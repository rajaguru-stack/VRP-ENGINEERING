import { useState, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const FestiveBanner: FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!siteConfig.festiveBanner.enabled || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative z-50 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950"
      >
        <div className="container-custom flex items-center justify-center py-2 px-8 text-sm font-medium">
          <span>{siteConfig.festiveBanner.message}</span>
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-4 p-1 hover:bg-navy-950/10 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FestiveBanner;
