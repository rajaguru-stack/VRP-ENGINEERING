#!/usr/bin/env bash
# ==============================================================================
# VRP Engineering Services - Media Processing Pipeline (FFmpeg)
# Converts raw Google Flow clips into web-optimized loops, posters, and frame sets.
# ==============================================================================

set -e

RAW_DIR="public/media/raw"
VIDEO_DIR="public/media/video"
POSTERS_DIR="public/media/posters"
FRAMES_DIR="public/media/frames"
MANIFEST_FILE="src/data/mediaManifest.json"

mkdir -p "$VIDEO_DIR" "$POSTERS_DIR" "$FRAMES_DIR"

SCENES=("hero" "blueprint-to-building" "dtcp-journey" "steel-boq" "site-survey" "about")
SCROLL_SCENES=("blueprint-to-building" "dtcp-journey" "steel-boq" "site-survey")

echo "=========================================================="
echo " Starting VRP Media Processing Pipeline"
echo "=========================================================="

if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed or not in PATH."
    echo "Please install ffmpeg to process raw clips."
    exit 1
fi

for SCENE in "${SCENES[@]}"; do
    RAW_FILE="$RAW_DIR/${SCENE}.mp4"
    if [ ! -f "$RAW_FILE" ]; then
        echo "⚠️  Raw file not found: $RAW_FILE (Skipping, placeholders will be used)"
        continue
    fi

    echo "🎬 Processing $SCENE..."

    # 1. Generate optimized MP4 (H.264, no audio, web-optimized faststart)
    echo "  -> Encoding MP4 loop..."
    ffmpeg -y -i "$RAW_FILE" -an -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p \
      -movflags +faststart -vf "scale='min(1920,iw)':-2" "$VIDEO_DIR/${SCENE}.mp4"

    # 2. Generate optimized WebM (VP9, no audio)
    echo "  -> Encoding WebM loop..."
    ffmpeg -y -i "$RAW_FILE" -an -c:v libvpx-vp9 -crf 30 -b:v 0 \
      -vf "scale='min(1920,iw)':-2" "$VIDEO_DIR/${SCENE}.webm"

    # 3. Extract high quality poster (.webp) from first frame
    echo "  -> Extracting poster WebP..."
    ffmpeg -y -ss 00:00:00 -i "$RAW_FILE" -vframes 1 -c:v libwebp -lossless 0 -q:v 85 \
      "$POSTERS_DIR/${SCENE}.webp"

    # 4. If scene is in SCROLL_SCENES, extract image frame sequences
    if [[ " ${SCROLL_SCENES[*]} " =~ " ${SCENE} " ]]; then
        echo "  -> Extracting frame sequences for scroll scrubbing..."
        DESKTOP_DIR="$FRAMES_DIR/${SCENE}/desktop"
        MOBILE_DIR="$FRAMES_DIR/${SCENE}/mobile"
        mkdir -p "$DESKTOP_DIR" "$MOBILE_DIR"

        # Desktop frames (1280px width, 24fps WebP, q=75)
        ffmpeg -y -i "$RAW_FILE" -r 24 -vf "scale=1280:-1" -c:v libwebp -quality 75 \
          "$DESKTOP_DIR/frame_%04d.webp"

        # Mobile frames (720px width, 24fps WebP, q=75)
        ffmpeg -y -i "$RAW_FILE" -r 24 -vf "scale=720:-1" -c:v libwebp -quality 75 \
          "$MOBILE_DIR/frame_%04d.webp"
    fi
done

echo ""
echo "Updating manifest counts..."
node scripts/process-media.mjs --manifest-only

echo "=========================================================="
echo " Media processing complete!"
echo "=========================================================="

