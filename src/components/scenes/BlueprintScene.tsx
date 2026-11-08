import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ScrollTrigger } from '../../utils/gsapUtils';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useIsMobile } from '../../hooks/useMediaQuery';
import GoldDivider from '../ui/GoldDivider';
import { Compass, FileCheck2, Calculator, HardHat, Video } from 'lucide-react';

const steps = [
  {
    step: '01',
    label: 'Plan',
    title: 'Architectural & Building Planning',
    description: 'Precision 2D floor plans, elevation models, and structural blueprints drafted according to regional building rules and Madurai DTCP bylaws.',
    icon: Compass,
  },
  {
    step: '02',
    label: 'Approval',
    title: 'DTCP & Local Body Clearance',
    description: 'Complete documentation submission, liaisoning with town planning authorities, and seamless procurement of legal approvals.',
    icon: FileCheck2,
  },
  {
    step: '03',
    label: 'Estimate',
    title: 'Bank & Construction Costing',
    description: 'Accurate PWD-standard estimates and detailed bill of quantities formatted for nationalized and private bank loan approvals.',
    icon: Calculator,
  },
  {
    step: '04',
    label: 'Build',
    title: 'Construction & Execution Support',
    description: 'Accurate steel BBS, bar-bending schedules, and on-site engineering verification to ensure building rises without delays.',
    icon: HardHat,
  },
];

const BlueprintScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Fallback procedural canvas drawing if video fails or not available
  const drawFallbackCanvas = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Deep Navy Blueprint Background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#061033');
      bgGrad.addColorStop(0.5, '#0A1A4A');
      bgGrad.addColorStop(1, '#061033');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Technical Blueprint Grid
      const gridSize = 40;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(20, 46, 120, 0.45)';
      ctx.beginPath();
      for (let x = 0; x < w; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Blueprint Sub-grid & Markings
      ctx.strokeStyle = 'rgba(212, 166, 42, 0.12)';
      ctx.strokeRect(30, 30, w - 60, h - 60);

      const centerX = isMobile ? w * 0.5 : w * 0.35;
      const baseY = h * 0.78;
      const buildingW = Math.min(w * 0.45, 320);
      const floors = 4;
      const totalHeight = Math.min(h * 0.52, 360);
      const floorH = totalHeight / floors;

      // Foundation
      ctx.strokeStyle = '#D4A62A';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(centerX - buildingW * 0.7, baseY);
      ctx.lineTo(centerX + buildingW * 0.7, baseY);
      ctx.stroke();

      // Building floors rising with scroll progress
      const riseProgress = Math.min(progress * 1.15, 1);
      const builtFloors = Math.floor(riseProgress * floors);
      const partialFloor = (riseProgress * floors) % 1;

      for (let f = 0; f < floors; f++) {
        const floorBottom = baseY - f * floorH;
        const floorTop = floorBottom - floorH;

        if (f < builtFloors) {
          ctx.strokeStyle = '#D4A62A';
          ctx.lineWidth = 2;
          ctx.fillStyle = 'rgba(15, 36, 97, 0.45)';
          ctx.fillRect(centerX - buildingW / 2, floorTop, buildingW, floorH);
          ctx.strokeRect(centerX - buildingW / 2, floorTop, buildingW, floorH);

          // Columns
          const cols = 4;
          const colSpacing = buildingW / (cols - 1);
          ctx.strokeStyle = '#F2CB5B';
          ctx.lineWidth = 2;
          for (let c = 0; c < cols; c++) {
            ctx.beginPath();
            ctx.moveTo(centerX - buildingW / 2 + c * colSpacing, floorBottom);
            ctx.lineTo(centerX - buildingW / 2 + c * colSpacing, floorTop);
            ctx.stroke();
          }
        } else if (f === builtFloors && partialFloor > 0) {
          const currentTop = floorBottom - floorH * partialFloor;
          ctx.strokeStyle = '#F2CB5B';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([6, 4]);
          ctx.strokeRect(centerX - buildingW / 2, currentTop, buildingW, floorH * partialFloor);
          ctx.setLineDash([]);
        }
      }
    },
    [isMobile]
  );

  // Resize canvas for sharp rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFallbackCanvas(activeStep / (steps.length - 1));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFallbackCanvas, activeStep]);

  // Video Scrubbing + Pinned Scene with GSAP ScrollTrigger
  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    const video = videoRef.current;

    // Helper to safely set video time without DOMException
    const updateVideoTime = (progress: number) => {
      if (video && !hasVideoError && video.duration && !isNaN(video.duration)) {
        const targetTime = Math.min(progress * video.duration, video.duration - 0.05);
        if (isFinite(targetTime) && Math.abs(video.currentTime - targetTime) > 0.03) {
          video.currentTime = targetTime;
        }
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: isMobile ? '+=180%' : '+=320%',
      pin: true,
      scrub: 0.4,
      onUpdate: (self) => {
        const p = self.progress;

        // Scrub video currentTime
        updateVideoTime(p);

        // Fallback canvas if video is not ready
        if (!isVideoReady || hasVideoError) {
          drawFallbackCanvas(p);
        }

        // Advance steps
        const currentIdx = Math.min(Math.floor(p * steps.length), steps.length - 1);
        setActiveStep(currentIdx);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [reducedMotion, isMobile, isVideoReady, hasVideoError, drawFallbackCanvas]);

  return (
    <>
      <GoldDivider variant="blueprint" />
      <div
        ref={containerRef}
        id="blueprint-journey"
        className="relative w-full h-screen bg-navy-950 overflow-hidden"
      >
        {/* 1. Real MP4 Video Layer (Scrubbed with GSAP ScrollTrigger) */}
        {!hasVideoError && (
          <video
            ref={videoRef}
            src="/media/video/blueprint-to-building.mp4"
            playsInline
            muted
            preload="auto"
            onLoadedMetadata={() => {
              setIsVideoReady(true);
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
            onError={() => {
              console.warn('Video failed to load in BlueprintScene, activating animated canvas fallback.');
              setHasVideoError(true);
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isVideoReady ? 'opacity-90' : 'opacity-0'
            }`}
            aria-label="Blueprint to Building architectural construction animation"
          />
        )}

        {/* 2. Fallback Canvas (Visible if video is missing, buffering or failed) */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full block transition-opacity duration-500 ${
            isVideoReady && !hasVideoError ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-hidden={isVideoReady && !hasVideoError}
        />

        {/* Subtle Dark Overlay to guarantee crisp text legibility over any video frame */}
        <div className="absolute inset-0 bg-navy-950/45 pointer-events-none" />

        {/* Technical Blueprint Grid Accent */}
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        {/* Content Overlays */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-12 z-20">
          {/* Top Title Band */}
          <div className="text-center sm:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-2 backdrop-blur-md">
              <Video className="w-3.5 h-3.5" />
              <span>Scroll-Driven Video Animation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading text-off-white font-bold tracking-tight drop-shadow-lg">
              From Blueprint <span className="text-gold-gradient">to Building</span>
            </h2>
            <p className="text-xs sm:text-sm text-off-white/70 mt-2 max-w-md drop-shadow">
              Scroll down to scrub the civil engineering sequence — from initial cad drawings to completed multi-story construction.
            </p>
          </div>

          {/* Stepper Card on the Right (Desktop) / Bottom (Mobile) */}
          <div className="self-center sm:self-end max-w-md w-full pointer-events-auto">
            <div className="glass rounded-2xl p-6 sm:p-8 border border-gold-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Progress bar at top of card */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-navy-900">
                <div
                  className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-all duration-200"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gold-400 font-bold px-2 py-0.5 rounded bg-gold-500/15 border border-gold-500/30">
                    PHASE {steps[activeStep].step}
                  </span>
                  <span className="text-xs text-off-white/60 uppercase tracking-wider font-medium">
                    {steps[activeStep].label}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-md">
                  {React.createElement(steps[activeStep].icon, { className: 'w-5 h-5' })}
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-gold-400 mb-2">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-off-white/80 leading-relaxed min-h-[4.5rem]">
                {steps[activeStep].description}
              </p>

              {/* Step indicator dots with manual click support */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold-500/15">
                <div className="flex items-center gap-2">
                  {steps.map((st, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveStep(i);
                        if (videoRef.current && videoRef.current.duration) {
                          videoRef.current.currentTime = (i / (steps.length - 1)) * videoRef.current.duration;
                        }
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeStep ? 'w-8 bg-gold-400' : 'w-2.5 bg-navy-700 hover:bg-gold-500/40'
                      }`}
                      aria-label={`Jump to phase ${st.label}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-gold-400/70">
                  {activeStep + 1} of {steps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueprintScene;
