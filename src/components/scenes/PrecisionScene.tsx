import React from 'react';
import { motion } from 'framer-motion';
import SceneSection from './SceneSection';
import AnimatedCounter from '../ui/AnimatedCounter';
import GoldDivider from '../ui/GoldDivider';
import VideoBackground from '../media/VideoBackground';
import { siteConfig } from '../../data/siteConfig';
import { Calculator, BarChart3, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const statsData = [
  { end: siteConfig.stats.yearsExperience, suffix: '+', label: 'Years Civil Consultancy' },
  { end: siteConfig.stats.estimatesDelivered, suffix: '+', label: 'Bank Estimates Sanctioned' },
  { end: siteConfig.stats.clientSupport, suffix: '%', label: 'Client Advisory Support' },
];

const PrecisionScene: React.FC = () => {
  return (
    <>
      <GoldDivider variant="line" />
      <SceneSection id="precision" className="flex items-center bg-navy-950 relative min-h-screen py-20">
        {/* Background video / steel grid overlay */}
        <VideoBackground
          src="/media/video/steel-boq.mp4"
          webmSrc="/media/video/steel-boq.webm"
          poster="/media/posters/steel-boq.webp"
          overlay
        />

        {/* Blueprint & Rebar Digital Sheet Pattern */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="relative z-10 container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
              Quantifiable Engineering Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading text-off-white font-bold tracking-tight">
              Precision in <span className="text-gold-gradient">Numbers</span>
            </h2>
            <p className="text-base text-off-white/70 mt-4 leading-relaxed">
              Every millimeter of bar bending, every cubic meter of concrete, and every rupee estimated for your bank
              loan is calculated with exact mathematical diligence.
            </p>
          </motion.div>

          {/* 3 Animated Counters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass rounded-2xl p-6 sm:p-8 border border-gold-500/20 hover:border-gold-500/40 transition-colors shadow-lg text-center"
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </div>

          {/* Interactive Parallax Breakdown: Steel BOQ & Bank Estimation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Card: Steel BOQ & Bar Bending */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 border border-gold-500/25 relative overflow-hidden group hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                    Structural Economy
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-off-white">
                    Steel BOQ & Takeoff
                  </h3>
                </div>
              </div>

              <p className="text-sm text-off-white/70 leading-relaxed mb-6">
                Steel constitutes up to 25% of RCC construction cost. Our bar bending schedules (BBS) determine exact
                cutting lengths, bend deductions, and grade-wise tonnage to suppress site wastage.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-navy-900/80 rounded-xl p-3 border border-gold-500/15">
                  <div className="flex items-center gap-2 text-gold-400 font-bold text-lg font-heading">
                    <TrendingDown className="w-4 h-4 text-emerald-400" />
                    <span>8% - 14%</span>
                  </div>
                  <div className="text-[11px] text-off-white/60">Typical Steel Wastage Saved</div>
                </div>
                <div className="bg-navy-900/80 rounded-xl p-3 border border-gold-500/15">
                  <div className="text-gold-400 font-bold text-lg font-heading">IS 2502</div>
                  <div className="text-[11px] text-off-white/60">Code Compliant BBS Standard</div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {[
                  'Element-wise steel schedules (Footings, Columns, Beams, Slabs)',
                  'Diameter-wise cut length and lap length optimization',
                  'Procurement checklist matched with local Madurai steel rolling mills',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/services#steel-boq"
                className="inline-flex items-center gap-2 text-sm text-gold-400 font-semibold hover:text-gold-300 transition-colors"
              >
                <span>Explore Steel Takeoff Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right Card: Bank & Construction Estimates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 border border-gold-500/25 relative overflow-hidden group hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                    Financial Sanctions
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-off-white">
                    Bank Cost Estimates
                  </h3>
                </div>
              </div>

              <p className="text-sm text-off-white/70 leading-relaxed mb-6">
                Housing loan approval hinges on an acceptable, accredited valuation and abstract estimate. We prepare
                bank-approved construction estimates complying with PWD schedules of rates (SOR).
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-navy-900/80 rounded-xl p-3 border border-gold-500/15">
                  <div className="text-gold-400 font-bold text-lg font-heading">100% Accept</div>
                  <div className="text-[11px] text-off-white/60">All Nationalized and Private Banks</div>
                </div>
                <div className="bg-navy-900/80 rounded-xl p-3 border border-gold-500/15">
                  <div className="text-gold-400 font-bold text-lg font-heading">PWD SOR</div>
                  <div className="text-[11px] text-off-white/60">Current Tamil Nadu Schedule of Rates</div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {[
                  'Stage-wise construction disbursement valuation certificates',
                  'Item-wise abstract and detailed bill of quantities',
                  'Commercial complex, villa, and home loan documentation support',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-off-white/80">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/services#bank-estimates"
                className="inline-flex items-center gap-2 text-sm text-gold-400 font-semibold hover:text-gold-300 transition-colors"
              >
                <span>Explore Bank Estimate Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </SceneSection>
    </>
  );
};

export default PrecisionScene;

