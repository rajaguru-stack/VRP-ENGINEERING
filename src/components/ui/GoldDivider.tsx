import { type FC } from 'react';

interface GoldDividerProps {
  className?: string;
  variant?: 'line' | 'angled' | 'blueprint';
}

const GoldDivider: FC<GoldDividerProps> = ({ className = '', variant = 'line' }) => {
  if (variant === 'angled') {
    return (
      <div className={`relative w-full h-20 overflow-hidden ${className}`} aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 80">
          <polygon fill="#061033" points="0,0 1440,40 1440,80 0,80" />
          <line x1="0" y1="0" x2="1440" y2="40" stroke="#D4A62A" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === 'blueprint') {
    return (
      <div className={`relative w-full h-16 overflow-hidden ${className}`} aria-hidden="true">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`gold-divider my-8 ${className}`} aria-hidden="true">
      <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rotate-45 bg-gold-500" />
    </div>
  );
};

export default GoldDivider;
