/**
 * VRP Engineering Services - Media Processing Pipeline (Node.js / Windows / Cross-platform)
 * 
 * Usage:
 *   node scripts/process-media.mjs
 *   node scripts/process-media.mjs --manifest-only
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const RAW_DIR = path.join(rootDir, 'public', 'media', 'raw');
const VIDEO_DIR = path.join(rootDir, 'public', 'media', 'video');
const POSTERS_DIR = path.join(rootDir, 'public', 'media', 'posters');
const FRAMES_DIR = path.join(rootDir, 'public', 'media', 'frames');
const MANIFEST_FILE = path.join(rootDir, 'src', 'data', 'mediaManifest.json');

const SCENES = [
  'hero',
  'blueprint-to-building',
  'dtcp-journey',
  'steel-boq',
  'site-survey',
  'about',
];

const SCROLL_SCENES = [
  'blueprint-to-building',
  'dtcp-journey',
  'steel-boq',
  'site-survey',
];

// Ensure target directories exist
[VIDEO_DIR, POSTERS_DIR, FRAMES_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

function hasFfmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function updateManifest() {
  console.log('📄 Updating media manifest (src/data/mediaManifest.json)...');
  
  let manifest = { scenes: {} };
  if (fs.existsSync(MANIFEST_FILE)) {
    try {
      manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf-8'));
    } catch {
      manifest = { scenes: {} };
    }
  }

  for (const scene of SCENES) {
    manifest.scenes[scene] = manifest.scenes[scene] || {};
    
    // Check if video file exists in video dir or raw dir
    const videoExists = fs.existsSync(path.join(VIDEO_DIR, `${scene}.mp4`)) || fs.existsSync(path.join(RAW_DIR, `${scene}.mp4`));
    const webmExists = fs.existsSync(path.join(VIDEO_DIR, `${scene}.webm`));
    const posterExists = fs.existsSync(path.join(POSTERS_DIR, `${scene}.webp`));

    manifest.scenes[scene].video = {
      mp4: videoExists ? `/media/video/${scene}.mp4` : null,
      webm: webmExists ? `/media/video/${scene}.webm` : null,
      poster: posterExists ? `/media/posters/${scene}.webp` : null,
      hasVideo: videoExists,
    };

    // Frame sequences
    if (SCROLL_SCENES.includes(scene)) {
      const desktopDir = path.join(FRAMES_DIR, scene, 'desktop');
      const mobileDir = path.join(FRAMES_DIR, scene, 'mobile');

      const desktopCount = fs.existsSync(desktopDir)
        ? fs.readdirSync(desktopDir).filter((f) => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg')).length
        : 0;

      const mobileCount = fs.existsSync(mobileDir)
        ? fs.readdirSync(mobileDir).filter((f) => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg')).length
        : 0;

      manifest.scenes[scene].frames = {
        desktop: {
          path: `/media/frames/${scene}/desktop`,
          prefix: 'frame_',
          extension: '.webp',
          count: desktopCount,
          width: 1280,
          height: 720,
        },
        mobile: {
          path: `/media/frames/${scene}/mobile`,
          prefix: 'frame_',
          extension: '.webp',
          count: mobileCount,
          width: 720,
          height: 405,
        },
      };
    }
  }

  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('✅ mediaManifest.json updated successfully.');
}

async function run() {
  const isManifestOnly = process.argv.includes('--manifest-only');

  if (isManifestOnly) {
    updateManifest();
    return;
  }

  console.log('==========================================================');
  console.log(' 🎥 VRP Engineering Services - Media Processing Pipeline');
  console.log('==========================================================');

  const ffmpegAvailable = hasFfmpeg();

  if (!ffmpegAvailable) {
    console.warn('⚠️  FFmpeg is not installed in system PATH.');
    console.log('👉 Activating Direct MP4 Mode: Copying raw clips to public/media/video/...');

    let copiedCount = 0;
    for (const scene of SCENES) {
      const rawFile = path.join(RAW_DIR, `${scene}.mp4`);
      const targetFile = path.join(VIDEO_DIR, `${scene}.mp4`);
      if (fs.existsSync(rawFile)) {
        fs.copyFileSync(rawFile, targetFile);
        console.log(`  ✓ Copied ${scene}.mp4 to public/media/video/`);
        copiedCount++;
      }
    }
    console.log(`✅ Synchronized ${copiedCount} video files for direct video playback.`);
    updateManifest();
    return;
  }

  let processedCount = 0;

  for (const scene of SCENES) {
    const rawFile = path.join(RAW_DIR, `${scene}.mp4`);
    if (!fs.existsSync(rawFile)) {
      console.log(`ℹ️  [Skip] Raw file not found: ${scene}.mp4 (Placeholder active)`);
      continue;
    }

    console.log(`\n🎬 Processing ${scene}.mp4...`);
    processedCount++;

    try {
      // 1. MP4 H.264
      console.log('  -> Compressing MP4 loop...');
      execSync(
        `ffmpeg -y -i "${rawFile}" -an -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -movflags +faststart -vf "scale='min(1920,iw)':-2" "${path.join(VIDEO_DIR, `${scene}.mp4`)}"`,
        { stdio: 'inherit' }
      );

      // 2. WebM VP9
      console.log('  -> Encoding WebM loop...');
      execSync(
        `ffmpeg -y -i "${rawFile}" -an -c:v libvpx-vp9 -crf 30 -b:v 0 -vf "scale='min(1920,iw)':-2" "${path.join(VIDEO_DIR, `${scene}.webm`)}"`,
        { stdio: 'inherit' }
      );

      // 3. Poster WebP
      console.log('  -> Generating poster WebP...');
      execSync(
        `ffmpeg -y -ss 00:00:00 -i "${rawFile}" -vframes 1 -c:v libwebp -lossless 0 -q:v 85 "${path.join(POSTERS_DIR, `${scene}.webp`)}"`,
        { stdio: 'inherit' }
      );

      // 4. Frames for scrubbed scenes
      if (SCROLL_SCENES.includes(scene)) {
        console.log('  -> Extracting frame sequences (desktop 1280px & mobile 720px)...');
        const deskDir = path.join(FRAMES_DIR, scene, 'desktop');
        const mobDir = path.join(FRAMES_DIR, scene, 'mobile');
        if (!fs.existsSync(deskDir)) fs.mkdirSync(deskDir, { recursive: true });
        if (!fs.existsSync(mobDir)) fs.mkdirSync(mobDir, { recursive: true });

        // Desktop
        execSync(
          `ffmpeg -y -i "${rawFile}" -r 24 -vf "scale=1280:-1" -c:v libwebp -quality 75 "${path.join(deskDir, 'frame_%04d.webp')}"`,
          { stdio: 'inherit' }
        );

        // Mobile
        execSync(
          `ffmpeg -y -i "${rawFile}" -r 24 -vf "scale=720:-1" -c:v libwebp -quality 75 "${path.join(mobDir, 'frame_%04d.webp')}"`,
          { stdio: 'inherit' }
        );
      }
    } catch (err) {
      console.error(`❌ Error processing ${scene}:`, err.message);
    }
  }

  updateManifest();
  console.log('\n==========================================================');
  console.log(` Pipeline finished! Processed: ${processedCount} clips.`);
  console.log('==========================================================');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
