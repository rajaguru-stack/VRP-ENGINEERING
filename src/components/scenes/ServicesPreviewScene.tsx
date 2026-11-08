import React from 'react';
import { motion } from 'framer-motion';
import SceneSection from './SceneSection';
import ServiceCard from '../ui/ServiceCard';
import GoldDivider from '../ui/GoldDivider';
import { siteConfig } from '../../data/siteConfig';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreviewScene: React.FC = () => {
  return (
    <>
      <GoldDivider variant="angled" />
      <SceneSection id="services-preview" fullHeight={false} className="py-20 md:py-28 bg-navy-950 relative">
        {/* Subtle background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(212,166,42,0.06) 0%, transparent 60%)',
          }}
        />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Civil Consultancy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading text-off-white font-bold tracking-tight">
              Our Core <span className="text-gold-gradient">Services</span>
            </h2>
            <p className="text-base text-off-white/70 mt-4 leading-relaxed">
              Tailored civil engineering, planning, approval, and estimation solutions crafted specifically for
              homebuilders, developers, and commercial investors in Madurai.
            </p>
          </motion.div>

          {/* 6 Core Service Cards Grid (3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {siteConfig.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Full-Width Custom Engineering Package Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-dashed border-gold-500/30 hover:border-gold-400/60 transition-all duration-300 group"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-gold-400" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-gold-400 mb-1">
                  Need a Custom Turnkey Package?
                </h3>
                <p className="text-off-white/70 text-sm leading-relaxed max-w-2xl">
                  Need an end-to-end bundle combining Site Survey, DTCP Land Approval, Building Sanction, Steel BOQ, and Bank Estimates for your development in Madurai?
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold whitespace-nowrap text-sm px-6 py-3 font-semibold shrink-0 group-hover:shadow-[0_0_20px_rgba(212,166,42,0.4)]"
            >
              <span>Request Custom Package</span>
              <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </motion.div>
        </div>
      </SceneSection>
    </>
  );
};

export default ServicesPreviewScene;

