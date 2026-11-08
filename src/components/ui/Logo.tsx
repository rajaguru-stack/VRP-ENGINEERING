import { useState, type FC } from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'emblem' | 'full';
}

const Logo: FC<LogoProps> = ({ className = '', size = 48, variant = 'emblem' }) => {
  const [imgError, setImgError] = useState(false);

  const src = variant === 'full' ? '/logo-full.png' : '/logo.png';

  if (!imgError) {
    return (
      <img
        src={src}
        alt="VRP Engineering Services Logo"
        width={variant === 'full' ? size * 2.2 : size}
        height={size}
        onError={() => setImgError(true)}
        className={`object-contain shrink-0 ${className}`}
        style={{ height: size, width: 'auto' }}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="VRP Engineering Services Logo"
      role="img"
    >
      {/* Building base */}
      <rect x="20" y="30" width="60" height="55" rx="2" fill="url(#goldGradient)" opacity="0.15" />
      
      {/* Vertical bars (pillars) */}
      <rect x="25" y="25" width="8" height="60" rx="1" fill="url(#goldGradient)" />
      <rect x="38" y="20" width="8" height="65" rx="1" fill="url(#goldGradient)" />
      <rect x="51" y="15" width="8" height="70" rx="1" fill="url(#goldGradient)" />
      <rect x="64" y="20" width="8" height="65" rx="1" fill="url(#goldGradient)" />
      
      {/* Roof / top line */}
      <path d="M18 25 L50 8 L82 25" stroke="url(#goldGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Curved swoosh underneath */}
      <path
        d="M15 90 Q50 78 85 90"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20 95 Q50 85 80 95"
        stroke="#B8871A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2CB5B" />
          <stop offset="50%" stopColor="#D4A62A" />
          <stop offset="100%" stopColor="#B8871A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
