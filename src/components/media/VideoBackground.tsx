import { useEffect, useRef, useState, type FC } from 'react';
import { useInView } from '../../hooks/useInView';

interface VideoBackgroundProps {
  src?: string;
  webmSrc?: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
}

const VideoBackground: FC<VideoBackgroundProps> = ({
  src,
  webmSrc,
  poster,
  className = '',
  overlay = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [videoError, setVideoError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;

    if (inView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented or video source not supported yet
        });
      }
    } else {
      video.pause();
    }
  }, [inView, videoError]);

  const hasVideoSource = (Boolean(src) || Boolean(webmSrc)) && !videoError;

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* 1. Base Blueprint & Gradient Placeholder (Always underneath as fallback & during buffer) */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950">
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(212,166,42,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(15,36,97,0.4) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* 2. Real Video Layer when source is specified and no error */}
      {hasVideoSource && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          onError={() => {
            console.warn(`VideoBackground failed to load: ${src}, falling back to blueprint placeholder.`);
            setVideoError(true);
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {src && <source src={src} type="video/mp4" />}
        </video>
      )}

      {/* 3. Contrast Overlay for text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-navy-950/60 backdrop-brightness-[0.85]" />
      )}
    </div>
  );
};

export default VideoBackground;
