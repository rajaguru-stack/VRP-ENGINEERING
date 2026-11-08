import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '../../utils/gsapUtils';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import {
  MapPin,
  PencilRuler,
  FileCheck,
  RotateCw,
  Stamp,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import SceneSection from './SceneSection';
import GoldDivider from '../ui/GoldDivider';
import VideoBackground from '../media/VideoBackground';
import { Link } from 'react-router-dom';

interface DTCPStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const dtcpTimelineSteps: DTCPStep[] = [
  {
    number: '01',
    title: 'Site Study & Document Audit',
    subtitle: 'Verification & Feasibility',
    description: 'We examine your Patta, FMB sketch, parent documents, revenue boundary markers, and site accessibility to determine DTCP compliance eligibility.',
    deliverables: ['Revenue boundary verification', 'Road width & setback audit', 'Title document check'],
    icon: MapPin,
  },
  {
    number: '02',
    title: 'Architectural Drawing & Bylaw Drafting',
    subtitle: 'Technical Compliance Drafting',
    description: 'Our certified engineers draft layout plans, sectional elevations, parking allotments, and FSI calculations adhering to Tamil Nadu Combined Development & Building Rules (TNCDBR).',
    deliverables: ['2D Building plans in DTCP format', 'Key plan & topo layout', 'Structural stability declarations'],
    icon: PencilRuler,
  },
  {
    number: '03',
    title: 'DTCP Portal Submission & Scrutiny',
    subtitle: 'Official Application Filing',
    description: 'Online submission through the single window system with local planning authorities (LPA / DTCP Madurai), payment of statutory scrutiny fees, and token generation.',
    deliverables: ['Single window acknowledgment', 'Scrutiny fee challan', 'Official inspection scheduling'],
    icon: FileCheck,
  },
  {
    number: '04',
    title: 'Departmental Inspection & Follow-Up',
    subtitle: 'Proactive Officer Liaisoning',
    description: 'Personal coordination during site inspection by Town Planning Officers (TPO) to resolve departmental clarifications and ensure zero clerical bottlenecks.',
    deliverables: ['Inspection memo clearance', 'Joint site verification', 'NOC coordination if required'],
    icon: RotateCw,
  },
  {
    number: '05',
    title: 'Final Plan Approval & Seal Procurement',
    subtitle: 'Certified Sanction Order',
    description: 'Procurement of the officially stamped DTCP layout/building approval plan, sanction order copy, and official endorsement for immediate construction commencement.',
    deliverables: ['Sealed approval drawing set', 'Official DTCP sanction order', 'Endorsement letter for bank loan'],
    icon: Stamp,
  },
];

const DTCPJourneyScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (window.innerWidth < 1024 || reducedMotion) return;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const getScrollAmount = () => track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${getScrollAmount() + 500}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressLineRef.current) {
              progressLineRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      return () => {
        scrollTween.kill();
      };
    }, container);

    return () => ctx.revert();
  }, [isMobile, reducedMotion]);

  return (
    <>
      <GoldDivider variant="angled" />

      {/* For Mobile (< 1024px): Vertical Stepper */}
      <div className="block lg:hidden">
        <SceneSection id="dtcp-journey-mobile" fullHeight={false} className="py-20 bg-navy-950 relative">
          <VideoBackground src="/media/video/dtcp-journey.mp4" overlay />
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
                Step-by-Step Approval Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading text-off-white font-bold">
                DTCP Approval <span className="text-gold-gradient">Journey</span>
              </h2>
              <p className="text-sm text-off-white/60 mt-2 max-w-lg mx-auto">
                Navigating Tamil Nadu Town & Country Planning approvals in Madurai without delays or rejections.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-gold-500/30 space-y-10">
              {dtcpTimelineSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative pl-4"
                  >
                    <div className="absolute -left-[35px] top-1 w-8 h-8 rounded-full bg-navy-900 border-2 border-gold-400 flex items-center justify-center text-gold-400 shadow-[0_0_12px_rgba(212,166,42,0.4)]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-gold-400/80 font-bold">STEP {step.number}</span>
                    <h3 className="text-lg font-heading font-bold text-off-white mt-0.5">{step.title}</h3>
                    <p className="text-xs text-gold-400/90 font-medium mb-2">{step.subtitle}</p>
                    <p className="text-xs text-off-white/70 leading-relaxed mb-3">{step.description}</p>
                    <div className="bg-navy-900/80 rounded-lg p-3 border border-gold-500/10 space-y-1.5">
                      {step.deliverables.map((del, d) => (
                        <div key={d} className="flex items-center gap-2 text-[11px] text-off-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact?service=dtcp-land-approval" className="btn-gold inline-flex items-center gap-2 text-sm">
                <span>Start Your DTCP Approval</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </SceneSection>
      </div>

      {/* For Desktop (>= 1024px): Pinned Horizontal Scroll */}
      <div className="hidden lg:block overflow-hidden">
        <div ref={containerRef} id="dtcp-journey" className="relative h-screen bg-navy-950 overflow-hidden">
          {/* Real Background Video */}
          <VideoBackground src="/media/video/dtcp-journey.mp4" overlay />

          {/* Subtle blueprint background */}
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

          {/* Sticky Header Top Band */}
          <div className="absolute top-8 left-0 right-0 z-30 px-12 flex items-center justify-between pointer-events-none">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1 block">
                Official Regulatory Roadmap
              </span>
              <h2 className="text-3xl font-heading text-off-white font-bold">
                DTCP Approval <span className="text-gold-gradient">Journey</span>
              </h2>
            </div>
            <div className="glass px-4 py-2 rounded-full border border-gold-500/20 text-xs text-off-white/70 flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-gold-400" />
              <span>Full compliance with TNCDBR 2019 / DTCP Madurai</span>
            </div>
          </div>

          {/* Gold Progress Tracker Line */}
          <div className="absolute bottom-12 left-12 right-12 z-30 pointer-events-none">
            <div className="flex justify-between items-center text-xs text-gold-400/60 font-mono mb-2">
              <span>01 INITIAL STUDY</span>
              <span>02 BYLAW DRAFTING</span>
              <span>03 SUBMISSION</span>
              <span>04 INSPECTION</span>
              <span>05 CERTIFIED APPROVAL</span>
            </div>
            <div className="w-full h-1.5 bg-navy-800 rounded-full overflow-hidden border border-gold-500/20">
              <div
                ref={progressLineRef}
                className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 rounded-full transition-all duration-75"
                style={{ width: '0%' }}
              />
            </div>
          </div>

          {/* Horizontal Scrub Track */}
          <div
            ref={trackRef}
            className="flex items-center h-full pl-16 pr-32 pt-16 pb-20 gap-8"
            style={{ width: 'fit-content' }}
          >
            {/* Introductory Card */}
            {/* <div className="w-[380px] shrink-0 glass rounded-3xl p-8 border border-gold-500/20 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                  <Stamp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-off-white mb-3">
                  Zero Rejection Guarantee
                </h3>
                <p className="text-sm text-off-white/70 leading-relaxed mb-6">
                  With over 500+ building plans approved in Madurai and Southern Tamil Nadu, our step-by-step
                  consultancy eliminates red tape, procedural delays, and documentation queries.
                </p>
                <div className="space-y-2 text-xs text-off-white/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span>Madurai Corporation & LPA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span>Panchayat / Town Panchayat Plan Sanction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span>Commercial & Industrial Layout Approvals</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-gold-500/10">
                <span className="text-xs text-gold-400 font-mono">Scroll right to explore steps →</span>
              </div>
            </div> */}

            {/* 5 Step Cards */}
            {dtcpTimelineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="w-[420px] shrink-0 glass rounded-3xl p-8 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-heading font-black text-gold-gradient">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-medium block mb-1">
                      {step.subtitle}
                    </span>
                    <h4 className="text-xl font-heading font-bold text-off-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-off-white/70 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="bg-navy-900/60 rounded-xl p-4 border border-gold-500/15">
                    <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((del, d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-off-white/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* Final CTA Card on Track */}
            <div className="w-[360px] shrink-0 bg-gradient-to-br from-gold-600/20 via-navy-900 to-navy-950 rounded-3xl p-8 border border-gold-500/40 flex flex-col justify-between text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mx-auto mb-6">
                  <Stamp className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-gold-400 mb-3">
                  Ready to Submit?
                </h4>
                <p className="text-sm text-off-white/70 leading-relaxed mb-6">
                  Have your land documents ready? Let our team initiate your DTCP drawing and file submission today.
                </p>
              </div>
              <Link to="/contact?service=dtcp-land-approval" className="btn-gold w-full text-sm py-3.5">
                <span>Consult Our DTCP Engineer</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DTCPJourneyScene;
