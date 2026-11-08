import { useEffect, useRef, useCallback, useState, type FC } from 'react';
import { ScrollTrigger } from '../../utils/gsapUtils';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ScrollFrameSequenceProps {
  scene: string;
  frameCount: number;
  videoSrc?: string;
  desktopPath?: string;
  mobilePath?: string;
  prefix?: string;
  extension?: string;
  className?: string;
}

const ScrollFrameSequence: FC<ScrollFrameSequenceProps> = ({
  scene,
  frameCount,
  videoSrc,
  desktopPath,
  mobilePath,
  prefix = 'frame_',
  extension = '.webp',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [useVideoMode, setUseVideoMode] = useState(false);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  const activeVideoSrc = videoSrc || `/media/video/${scene}.mp4`;
  const basePath = isMobile
    ? (mobilePath || `/media/frames/${scene}/mobile`)
    : (desktopPath || `/media/frames/${scene}/desktop`);

  const getFramePath = useCallback(
    (index: number) => {
      const num = String(index + 1).padStart(4, '0');
      return `${basePath}/${prefix}${num}${extension}`;
    },
    [basePath, prefix, extension]
  );

  // Draw frame on canvas
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = imagesRef.current[frameIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        const scale = Math.max(
          canvas.width / img.naturalWidth,
          canvas.height / img.naturalHeight
        );
        const x = (canvas.width - img.naturalWidth * scale) / 2;
        const y = (canvas.height - img.naturalHeight * scale) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
      }
    },
    []
  );

  // Draw blueprint placeholder when no frames/video are available
  const drawPlaceholder = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;

      // Navy gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#0A1A4A');
      bgGrad.addColorStop(1, '#061033');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Blueprint grid
      ctx.strokeStyle = 'rgba(20, 46, 120, 0.4)';
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Animated building based on progress
      const buildingProgress = Math.min(progress * 1.2, 1);
      const floors = 5;
      const buildingW = w * 0.3;
      const buildingH = h * 0.6;
      const bx = (w - buildingW) / 2;

      // Foundation
      ctx.fillStyle = 'rgba(212, 166, 42, 0.3)';
      ctx.fillRect(bx - 10, h * 0.8, buildingW + 20, 4);

      // Building floors
      const floorH = buildingH / floors;
      const visibleFloors = Math.ceil(buildingProgress * floors);
      for (let i = 0; i < visibleFloors; i++) {
        const floorProgress = Math.min((buildingProgress * floors - i) * 1, 1);
        const fy = h * 0.8 - (i + 1) * floorH;

        ctx.globalAlpha = floorProgress;

        // Floor body
        ctx.strokeStyle = '#D4A62A';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, fy, buildingW, floorH);

        // Windows
        const windowW = buildingW / 5;
        for (let j = 0; j < 4; j++) {
          const wx = bx + windowW * (j + 0.6);
          const wy = fy + floorH * 0.2;
          ctx.fillStyle = `rgba(242, 203, 91, ${0.1 + 0.1 * Math.sin(progress * Math.PI * 2 + j + i)})`;
          ctx.fillRect(wx, wy, windowW * 0.5, floorH * 0.5);
          ctx.strokeStyle = 'rgba(212, 166, 42, 0.5)';
          ctx.lineWidth = 0.5;
          ctx.strokeRect(wx, wy, windowW * 0.5, floorH * 0.5);
        }
      }

      ctx.globalAlpha = 1;
    },
    []
  );

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  // Preload frame images if frameCount > 0
  useEffect(() => {
    if (frameCount <= 0) {
      setUseVideoMode(true);
      return;
    }

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (i === 0) drawFrame(0);
      };
      img.onerror = () => {
        // Fall back to video scrub mode if frame images are missing
        setUseVideoMode(true);
      };
      images.push(img);
    }

    imagesRef.current = images;
    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [frameCount, getFramePath, drawFrame]);

  // GSAP ScrollTrigger for scrub
  useEffect(() => {
    if (reducedMotion) return;
    const container = containerRef.current;
    if (!container) return;

    const video = videoRef.current;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${window.innerHeight * 3}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;

        if (useVideoMode && video && video.duration) {
          const target = Math.min(progress * video.duration, video.duration - 0.05);
          if (isFinite(target) && Math.abs(video.currentTime - target) > 0.03) {
            video.currentTime = target;
          }
        } else if (frameCount > 0 && imagesRef.current.length > 0) {
          const frameIndex = Math.min(
            Math.floor(progress * (frameCount - 1)),
            frameCount - 1
          );
          currentFrameRef.current = frameIndex;
          const img = imagesRef.current[frameIndex];
          if (img && img.complete && img.naturalWidth > 0) {
            drawFrame(frameIndex);
          } else {
            drawPlaceholder(progress);
          }
        } else {
          drawPlaceholder(progress);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [frameCount, reducedMotion, drawFrame, drawPlaceholder, useVideoMode]);

  return (
    <div ref={containerRef} className={`relative w-full h-screen ${className}`}>
      {/* Video scrub layer */}
      {useVideoMode && (
        <video
          ref={videoRef}
          src={activeVideoSrc}
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}

      {/* Canvas layer (for frame sequence or blueprint fallback) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full ${useVideoMode ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default ScrollFrameSequence;
