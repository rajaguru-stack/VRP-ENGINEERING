import { useRef, type FC, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import type { Service } from '../../data/siteConfig';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[service.icon] || LucideIcons.Building2;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative glass rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(212,166,42,0.15)]"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
      >
        {/* Gold glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,166,42,0.08) 0%, transparent 70%)' }} />
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
            <IconComponent className="w-7 h-7 text-gold-400" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-gold-400 mb-3">
            {service.shortTitle}
          </h3>
          <p className="text-off-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
            {service.description}
          </p>
          <Link
            to={`/services#${service.id}`}
            className="inline-flex items-center text-sm text-gold-500 hover:text-gold-400 transition-colors font-medium"
          >
            Learn more
            <LucideIcons.ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
