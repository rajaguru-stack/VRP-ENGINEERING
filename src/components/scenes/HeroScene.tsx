import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SceneSection from './SceneSection';
import VideoBackground from '../media/VideoBackground';
import Logo from '../ui/Logo';
import { siteConfig } from '../../data/siteConfig';

const headlineWords = ['Building', 'Approvals.', 'Plans.', 'Estimates.', 'Done', 'Right.'];

const HeroScene: React.FC = () => {
  return (
    <SceneSection className="flex items-center justify-center relative min-h-screen" id="hero">
      {/* Background with video / poster / subtle Ken-Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-1000">
          <VideoBackground
            src="/media/video/hero.mp4"
            webmSrc="/media/video/hero.webm"
            poster="/media/posters/hero.webp"
            overlay
          />
        </div>
      </div>

      {/* Blueprint Grid & Radial Glow */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(212,166,42,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Gold floating particles/dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[
          { top: '15%', left: '20%', delay: '0s', size: 'w-1.5 h-1.5' },
          { top: '25%', left: '75%', delay: '2s', size: 'w-2 h-2' },
          { top: '65%', left: '15%', delay: '4s', size: 'w-1 h-1' },
          { top: '75%', left: '85%', delay: '1s', size: 'w-1.5 h-1.5' },
          { top: '45%', left: '90%', delay: '3s', size: 'w-2 h-2' },
          { top: '35%', left: '10%', delay: '5s', size: 'w-1 h-1' },
        ].map((particle, i) => (
          <div
            key={i}
            className={`absolute ${particle.size} rounded-full bg-gold-400/60 blur-[0.5px] animate-pulse`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              boxShadow: '0 0 10px rgba(242, 203, 91, 0.6)',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom text-center pt-24 pb-16 w-full max-w-full min-w-0">
        {/* Subtle trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-gold-500/30 text-gold-400 text-xs md:text-sm font-medium tracking-wide mb-6 backdrop-blur-md max-w-[95%] mx-auto text-center justify-center"
        >
          <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
          <span className="hidden sm:inline">Govt. Approved DTCP & Licensed Civil Engineering Consultant</span>
          <span className="sm:hidden">Govt. Approved DTCP & Civil Consultant</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Logo size={96} variant="full" className="max-w-[280px] sm:max-w-[360px] drop-shadow-[0_4px_25px_rgba(212,166,42,0.4)]" />
        </motion.div>

        {/* Animated Headline: Word-by-word reveal */}
        <h1 className="font-heading font-extrabold text-off-white text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-5 max-w-5xl mx-auto tracking-tight">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-2.5 sm:mr-3.5 ${
                word === 'Approvals.' || word === 'Right.' ? 'text-gold-gradient' : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-base sm:text-xl md:text-2xl text-off-white/80 mb-3 max-w-3xl mx-auto font-light tracking-wide"
        >
          {siteConfig.business.tagline} — <span className="text-gold-400 font-medium">Madurai</span>
        </motion.p>

        {/* Elegant Sign-off Script Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-gold-400/90 font-accent text-2xl sm:text-3xl md:text-4xl mb-8"
        >
          "{siteConfig.business.signOff}"
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Link to="/contact" className="btn-gold w-full sm:w-auto text-base px-7 py-3.5 shadow-lg shadow-gold-500/20">
            <Phone className="w-4 h-4" />
            <span>Get a Free Consultation</span>
          </Link>
          <Link to="/services" className="btn-outline w-full sm:w-auto text-base px-7 py-3.5">
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Key Quick Highlights */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gold-500/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center"
        >
          <div className="p-2">
            <div className="text-gold-400 font-bold text-xl md:text-2xl font-heading">500+</div>
            <div className="text-xs text-off-white/60 uppercase tracking-wider">Plans Approved</div>
          </div>
          <div className="p-2">
            <div className="text-gold-400 font-bold text-xl md:text-2xl font-heading">15+</div>
            <div className="text-xs text-off-white/60 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="p-2">
            <div className="text-gold-400 font-bold text-xl md:text-2xl font-heading">300+</div>
            <div className="text-xs text-off-white/60 uppercase tracking-wider">Bank Estimates</div>
          </div>
          <div className="p-2">
            <div className="text-gold-400 font-bold text-xl md:text-2xl font-heading">100%</div>
            <div className="text-xs text-off-white/60 uppercase tracking-wider">Compliance Support</div>
          </div>
        </motion.div> */}
      </div>

      {/* Animated Scroll Down Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-gold-400/70 font-medium">Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border border-gold-500/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-gold-400"
          />
        </div>
      </motion.div> */}
    </SceneSection>
  );
};

export default HeroScene;
