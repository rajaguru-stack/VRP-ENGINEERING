import { spawn, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';

const artifactDir = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\622836c1-d6a9-4a2a-8dd5-beb5164caab9';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempDir = os.tmpdir();
const profileDir = path.join(tempDir, 'edge_header_footer_profile');

if (!fs.existsSync(profileDir)) fs.mkdirSync(profileDir, { recursive: true });

console.log('Starting preview server on port 4173...');
const server = spawn('npm.cmd', ['run', 'preview', '--', '--port', '4173'], {
  stdio: 'ignore',
  shell: true,
});

await new Promise((r) => setTimeout(r, 3500));

const shots = [
  { name: 'screenshot-header-nav.png', size: '1280,300', url: 'http://localhost:4173/' },
  { name: 'screenshot-footer.png', size: '1280,700', url: 'http://localhost:4173/#/contact' },
];

try {
  for (const shot of shots) {
    const tempFile = path.join(tempDir, shot.name);
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);

    console.log(`Capturing ${shot.name} (${shot.size}) from ${shot.url}...`);
    try {
      execSync(
        `"${edgePath}" --headless --no-sandbox --disable-gpu --disable-background-networking --user-data-dir="${profileDir}" --run-all-compositor-stages-before-draw --virtual-time-budget=3000 --window-size=${shot.size} --screenshot="${tempFile}" "${shot.url}"`,
        { stdio: 'inherit' }
      );

      if (fs.existsSync(tempFile)) {
        const dest = path.join(artifactDir, shot.name);
        fs.copyFileSync(tempFile, dest);
        console.log(`✅ Saved ${shot.name} (${fs.statSync(dest).size} bytes)`);
      } else {
        console.warn(`⚠️  Could not find generated screenshot: ${tempFile}`);
      }
    } catch (err) {
      console.error(`Error on ${shot.name}:`, err.message);
    }
  }
} finally {
  console.log('Stopping preview server...');
  try {
    if (server.pid) {
      execSync(`taskkill /F /T /PID ${server.pid}`, { stdio: 'ignore' });
    }
  } catch {}
}
