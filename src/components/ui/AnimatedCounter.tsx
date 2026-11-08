import { useEffect, useRef, useState, type FC } from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  label,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.5 });
  const hasAnimated = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reducedMotion) {
      setCount(end);
      return;
    }

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration, reducedMotion]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-heading font-bold text-gold-gradient">
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-off-white/70 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
