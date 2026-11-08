import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Ruler, Satellite, Map, ArrowRight } from 'lucide-react';
import SceneSection from './SceneSection';
import GoldDivider from '../ui/GoldDivider';
import VideoBackground from '../media/VideoBackground';
import { Link } from 'react-router-dom';

const surveyCapabilities = [
  {
    icon: Compass,
    title: 'Electronic Total Station Survey',
    description: 'Sub-millimeter angular and distance precision measurements to map actual site boundaries and physical land contours.',
  },
  {
    icon: Ruler,
    title: 'FMB Boundary Demarcation',
    description: 'Reconciling field measurement book (FMB) sketches with physical on-ground survey stones to prevent legal encroachment.',
  },
  {
    icon: Satellite,
    title: 'Drone & Aerial Topography',
    description: 'High-resolution orthomosaic imaging and digital elevation models (DEM) for extensive acreage layout designs.',
  },
  {
    icon: Map,
    title: 'Contour & Level Mapping',
    description: 'Establishing spot levels and natural gradient profiles for optimal stormwater drainage, cut-and-fill, and plinth levels.',
  },
];

const OnSiteScene: React.FC = () => {
  return (
    <>
      <GoldDivider variant="blueprint" />
      <SceneSection id="on-site-survey" fullHeight={false} className="py-20 md:py-28 bg-navy-900 relative">
        {/* Real Survey Background Video */}
        <VideoBackground src="/media/video/site-survey.mp4" overlay />

        {/* Subtle background grid */}
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
              On-Ground Survey & Digital Demarcation
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading text-off-white font-bold tracking-tight">
              On-Site <span className="text-gold-gradient">Expertise</span>
            </h2>
            <p className="text-base text-off-white/70 mt-4 leading-relaxed">
              True civil engineering starts on the soil. We bridge land revenue sketches with modern Total Station
              precision to ensure your blueprint matches reality down to the millimeter.
            </p>
          </motion.div>

          {/* Interactive Before/After Interactive Visualizer (Raw Plot vs Planned Layout) */}
          {/* <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-between text-xs text-off-white/60 mb-2 px-2">
              <span className="text-gold-400 font-medium">← SLIDE TO REVEAL PLANNED DTCP LAYOUT</span>
              <span>RAW UNPLANNED PLOT →</span>
            </div>

            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative h-[340px] sm:h-[440px] rounded-3xl overflow-hidden cursor-ew-resize border-2 border-gold-500/30 select-none shadow-2xl"
            >
              {/* Layer 1: "AFTER" — Planned Engineered Layout */}
              {/* <div className="absolute inset-0 bg-[#061033] flex items-center justify-center p-8">
                <div className="absolute inset-0 blueprint-grid opacity-40" /> */}

                {/* Technical Layout Graphic */}
                {/* <div className="relative z-10 w-full h-full border border-gold-500/40 rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-navy-950/80 px-3 py-1.5 rounded border border-gold-500/40 text-[11px] text-gold-400 font-mono">
                      PLANNED RESIDENTIAL LAYOUT (DTCP COMPLIANT)
                    </div>
                    <div className="text-right font-mono text-[10px] text-off-white/60">
                      <div>SETBACK: 1.5M ALL SIDES</div>
                      <div>ROAD WIDTH: 9.0M (30 FT)</div>
                    </div>
                  </div> */}

                  {/* Planned Plots Matrix */}
                  {/* <div className="grid grid-cols-3 gap-3 my-auto">
                    {[1, 2, 3, 4, 5, 6].map((plot) => (
                      <div
                        key={plot}
                        className="h-16 sm:h-20 bg-gold-500/10 border border-gold-400/50 rounded-lg flex flex-col items-center justify-center p-1 text-center"
                      >
                        <span className="text-xs font-bold text-gold-300 font-heading">PLOT #{plot}</span>
                        <span className="text-[10px] text-off-white/60">1200 SQ.FT</span>
                        <span className="text-[9px] text-emerald-400 font-mono">APPROVED</span>
                      </div>
                    ))}
                  </div> */}

                  {/* <div className="flex justify-between items-center text-[11px] text-gold-400/80 font-mono">
                    <span>FSI: 1.50</span>
                    <span>COVERAGE: 65%</span>
                    <span>O.S.R: 10% RESERVED</span>
                  </div>
                </div> */}
              {/* </div> */}

              {/* Layer 2: "BEFORE" — Raw Unsurveyed Site (Clipped by sliderPos) */}
              {/* <div
                className="absolute inset-0 bg-gradient-to-br from-navy-950 via-[#0a1945] to-[#040b24] p-8 flex items-center justify-center"
                style={{
                  clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
                }}
              > */}
                {/* Irregular Raw Boundary Graphic */}
                {/* <div className="relative z-10 w-full h-full border border-dashed border-red-400/30 rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-red-950/80 px-3 py-1.5 rounded border border-red-500/40 text-[11px] text-red-300 font-mono">
                      RAW UNREGISTERED FIELD DATA (NO CLEARANCE)
                    </div>
                    <div className="text-right font-mono text-[10px] text-red-400/80">
                      <div>FMB CONFLICT DETECTED</div>
                      <div>IRREGULAR BOUNDARY</div>
                    </div>
                  </div>

                  <div className="my-auto text-center">
                    <div className="inline-block p-4 rounded-2xl bg-navy-900/80 border border-red-500/30">
                      <p className="text-sm font-semibold text-off-white">Unsurveyed Rural Acreage</p>
                      <p className="text-xs text-off-white/60 mt-1 max-w-sm">
                        Risk of revenue stone displacement, unauthorized encroachment, and DTCP rejection.
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-red-400/70 font-mono">
                    PENDING TOTAL STATION VERIFICATION
                  </div>
                </div>
              </div> */}

              {/* Slider Divider Bar & Handle */}
              {/* <div
                className="absolute top-0 bottom-0 w-1 bg-gold-400 shadow-[0_0_15px_#F2CB5B] z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-400 text-navy-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-off-white">
                  ↔
                </div>
              </div> */}
            {/* </div> */}
          {/* </div> */} 

          {/* 4 Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {surveyCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 border border-gold-500/15 hover:border-gold-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-off-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-off-white/70 leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Action Callout */}
          <div className="text-center">
            <Link
              to="/contact?service=site-measurement"
              className="btn-gold inline-flex items-center gap-2 text-sm px-8 py-3.5"
            >
              <Compass className="w-4 h-4" />
              <span>Book an On-Site Total Station Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SceneSection>
    </>
  );
};

export default OnSiteScene;
