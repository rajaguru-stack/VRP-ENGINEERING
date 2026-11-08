import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TimelineStep {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

const ProcessTimeline: FC<ProcessTimelineProps> = ({ steps, className = '' }) => {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });
  const reducedMotion = useReducedMotion();

  if (isMobile) {
    // Vertical stepper for mobile
    return (
      <div ref={ref} className={`relative ${className}`}>
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gold-500/20" />
        {inView && (
          <motion.div
            className="absolute left-5 top-0 w-0.5 bg-gold-500 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: reducedMotion ? 0 : 2, ease: 'easeInOut' }}
          />
        )}
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: reducedMotion ? 0 : i * 0.2, duration: 0.4 }}
              className="relative pl-14"
            >
              <div className="absolute left-2.5 top-1 w-6 h-6 rounded-full bg-navy-800 border-2 border-gold-500 flex items-center justify-center">
                <span className="text-[10px] text-gold-400 font-bold">{i + 1}</span>
              </div>
              <h4 className="text-gold-400 font-heading font-semibold text-sm mb-1">
                {step.title}
              </h4>
              <p className="text-off-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Horizontal timeline for desktop
  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Track line */}
      <div className="absolute top-6 left-0 right-0 h-0.5 bg-gold-500/20" />
      {inView && (
        <motion.div
          className="absolute top-6 left-0 right-0 h-0.5 bg-gold-500 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reducedMotion ? 0 : 2, ease: 'easeInOut' }}
        />
      )}
      
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reducedMotion ? 0 : 0.3 + i * 0.2, duration: 0.4 }}
            className="flex flex-col items-center text-center max-w-[160px]"
          >
            <div className="w-12 h-12 rounded-full bg-navy-800 border-2 border-gold-500 flex items-center justify-center mb-3 z-10">
              <span className="text-sm text-gold-400 font-bold">{i + 1}</span>
            </div>
            <h4 className="text-gold-400 font-heading font-semibold text-sm mb-1">
              {step.title}
            </h4>
            <p className="text-off-white/60 text-xs leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
