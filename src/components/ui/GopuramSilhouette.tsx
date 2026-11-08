import { type FC } from 'react';

interface GopuramProps {
  className?: string;
  height?: number;
  color?: string;
}

const GopuramSilhouette: FC<GopuramProps> = ({ className = '', height = 200, color = '#142E78' }) => {
  const aspectRatio = 0.6;
  const width = height * aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {/* Main gopuram tower */}
      {/* Base level */}
      <rect x="10" y="160" width="100" height="40" fill={color} />
      {/* Door */}
      <path d="M45 200 L45 170 Q60 155 75 170 L75 200" fill="#061033" />
      
      {/* Level 1 */}
      <path d="M15 160 L15 130 L105 130 L105 160" fill={color} />
      <rect x="20" y="135" width="8" height="20" rx="2" fill="#061033" opacity="0.5" />
      <rect x="35" y="135" width="8" height="20" rx="2" fill="#061033" opacity="0.5" />
      <rect x="50" y="135" width="8" height="20" rx="2" fill="#061033" opacity="0.5" />
      <rect x="65" y="135" width="8" height="20" rx="2" fill="#061033" opacity="0.5" />
      <rect x="80" y="135" width="8" height="20" rx="2" fill="#061033" opacity="0.5" />
      <rect x="95" y="135" width="8" height="20" rx="2" fill="#061033" opacity="0.3" />
      
      {/* Level 2 */}
      <path d="M22 130 L22 105 L98 105 L98 130" fill={color} />
      <rect x="28" y="110" width="6" height="16" rx="1" fill="#061033" opacity="0.4" />
      <rect x="42" y="110" width="6" height="16" rx="1" fill="#061033" opacity="0.4" />
      <rect x="56" y="110" width="6" height="16" rx="1" fill="#061033" opacity="0.4" />
      <rect x="70" y="110" width="6" height="16" rx="1" fill="#061033" opacity="0.4" />
      <rect x="84" y="110" width="6" height="16" rx="1" fill="#061033" opacity="0.4" />
      
      {/* Level 3 */}
      <path d="M30 105 L30 82 L90 82 L90 105" fill={color} />
      <rect x="36" y="87" width="5" height="14" rx="1" fill="#061033" opacity="0.4" />
      <rect x="48" y="87" width="5" height="14" rx="1" fill="#061033" opacity="0.4" />
      <rect x="60" y="87" width="5" height="14" rx="1" fill="#061033" opacity="0.4" />
      <rect x="72" y="87" width="5" height="14" rx="1" fill="#061033" opacity="0.4" />
      
      {/* Level 4 */}
      <path d="M38 82 L38 62 L82 62 L82 82" fill={color} />
      <rect x="44" y="67" width="4" height="12" rx="1" fill="#061033" opacity="0.3" />
      <rect x="55" y="67" width="4" height="12" rx="1" fill="#061033" opacity="0.3" />
      <rect x="66" y="67" width="4" height="12" rx="1" fill="#061033" opacity="0.3" />
      
      {/* Level 5 - dome top */}
      <path d="M45 62 L45 46 L75 46 L75 62" fill={color} />
      
      {/* Crown / Kalasam */}
      <path d="M52 46 Q60 20 68 46" fill={color} />
      <circle cx="60" cy="18" r="4" fill={color} />
      <line x1="60" y1="14" x2="60" y2="5" stroke={color} strokeWidth="2" />
      <circle cx="60" cy="4" r="2" fill={color} />
    </svg>
  );
};

export default GopuramSilhouette;
