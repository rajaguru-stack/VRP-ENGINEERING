import { useState, useEffect, useCallback, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const TestimonialCarousel: FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = siteConfig.testimonials;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <div
      className="relative max-w-3xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 text-gold-500/20" aria-hidden="true" />
      
      <div className="relative overflow-hidden py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-4" aria-label={`Rating: ${testimonials[current].rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[current].rating
                      ? 'text-gold-400 fill-gold-400'
                      : 'text-gold-500/30'
                  }`}
                />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-base sm:text-lg md:text-xl text-off-white/90 leading-relaxed mb-6 italic">
              "{testimonials[current].text}"
            </blockquote>
            
            {/* Verified Client Badge - No Reviewer Name */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gold-400 font-semibold tracking-wide uppercase">Verified Client Review</span>
              {testimonials[current].tag && (
                <>
                  <span className="text-gold-500/40">•</span>
                  <span className="text-off-white/70 font-medium">{testimonials[current].tag}</span>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="p-2 text-off-white/50 hover:text-gold-400 transition-colors" aria-label="Previous testimonial">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-gold-500 w-6' : 'bg-off-white/20 hover:bg-off-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 text-off-white/50 hover:text-gold-400 transition-colors" aria-label="Next testimonial">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
