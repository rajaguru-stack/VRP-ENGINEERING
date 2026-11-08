import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Star } from 'lucide-react';
import SceneSection from './SceneSection';
import TestimonialCarousel from '../ui/TestimonialCarousel';
import GoldDivider from '../ui/GoldDivider';
import GopuramSilhouette from '../ui/GopuramSilhouette';
import { siteConfig } from '../../data/siteConfig';

const CTAScene: React.FC = () => {
  return (
    <>
      <GoldDivider variant="line" />
      <SceneSection id="testimonials-cta" fullHeight={false} className="bg-navy-950 relative overflow-hidden">
        {/* Gopuram Decorative Silhouettes in background */}
        <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none overflow-hidden max-w-[50vw]">
          <GopuramSilhouette height={380} color="#D4A62A" />
        </div>
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none -scale-x-100 overflow-hidden max-w-[50vw]">
          <GopuramSilhouette height={380} color="#D4A62A" />
        </div>

        {/* 1. Testimonials Carousel Section */}
        <div className="py-20 md:py-24 relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading text-off-white font-bold tracking-tight">
              Trusted Across <span className="text-gold-gradient">Madurai</span>
            </h2>
            <p className="text-sm text-off-white/60 mt-2">
              Real feedback from our clients on building plans, structural designs, and bank estimates.
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>

        {/* 2. Full-Width CTA Band with Brand Sign-off */}
        <div className="relative border-t border-gold-500/20 bg-gradient-to-b from-navy-900 to-navy-950 py-20 px-6 sm:px-12 text-center overflow-hidden">
          {/* Subtle blueprint grid overlay */}
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

          {/* Golden radial aura */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(212,166,42,0.12) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-gold-400/90 font-accent text-3xl sm:text-4xl md:text-5xl block mb-4"
            >
              "{siteConfig.business.signOff}"
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-5xl font-heading font-extrabold text-off-white tracking-tight mb-6"
            >
              Have a Project in Mind? Let's Build with Precision.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-off-white/70 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Whether you need guaranteed DTCP plan clearance, bank-compliant cost estimates, or steel quantity
              takeoffs, our engineers in Madurai are ready to assist.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            >
              <Link to="/contact" className="btn-gold w-full sm:w-auto text-base px-8 py-3.5 shadow-xl shadow-gold-500/25">
                <Phone className="w-4 h-4" />
                <span>Contact Our Office</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello VRP Engineering Services! I'd like to discuss my project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all w-full sm:w-auto shadow-lg shadow-emerald-900/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          </div>
        </div>
      </SceneSection>
    </>
  );
};

export default CTAScene;
