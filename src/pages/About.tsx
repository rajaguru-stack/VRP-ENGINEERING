import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Building,
  Target,
  Eye,
  Users,
  Compass,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import VideoBackground from '../components/media/VideoBackground';
import GopuramSilhouette from '../components/ui/GopuramSilhouette';
import GoldDivider from '../components/ui/GoldDivider';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import { siteConfig } from '../data/siteConfig';

const whyChooseUsPoints = [
  {
    icon: ShieldCheck,
    title: '100% DTCP Bylaw Compliant',
    desc: 'Deep familiarity with TNCDBR rules and local Madurai planning directives prevents file rejections and penalties.',
  },
  {
    icon: Award,
    title: 'Accredited Bank Estimators',
    desc: 'Our construction cost valuation reports are accepted without questions by nationalized and private banking institutions.',
  },
  {
    icon: Compass,
    title: 'Modern Total Station Surveying',
    desc: 'Using high-precision digital surveying instruments to resolve land boundary and FMB measurement disputes on ground.',
  },
  {
    icon: Target,
    title: 'Steel Cost Optimization',
    desc: 'Bar bending schedules designed to save 8-14% of rebar tonnage, directly reducing your construction budget.',
  },
  {
    icon: Building,
    title: 'Rooted in Madurai Heritage',
    desc: 'Deep cultural pride and technical engineering expertise dedicated to shaping Madurai’s modern urban landscape.',
  },
  {
    icon: Users,
    title: 'Dedicated Client Coordination',
    desc: 'From paperwork collection to sanction order handover, our senior engineers personally guide you through each stage.',
  },
];

const technicalLead = {
  name: 'Er. Vignesh P',
  role: 'Civil Engineer / Building Consultant',
  exp: 'DTCP Registered Engineer',
  mobile: '+91 95663 66619',
  email: 'pvignesh738@gmail.com',
};

const processSteps = [
  {
    title: 'Discovery & Consultation',
    description: 'We review your land documents, owner requirement brief, and plot dimensions.',
  },
  {
    title: 'On-Site Survey & Verification',
    description: 'Total station boundary demarcation and road width verification against revenue FMB sketches.',
  },
  {
    title: 'Bylaw Drawing & Cost Modeling',
    description: 'Drafting compliant architectural plans, structural schedules, and bank-grade estimates.',
  },
  {
    title: 'Approval & Handover',
    description: 'Submitting through the official portal, attending scrutiny, and handing over sealed documents.',
  },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | VRP Engineering Services - Madurai Civil Engineering Consultancy</title>
        <meta
          name="description"
          content="Learn about VRP Engineering Services in Madurai. 6+ years of trusted civil engineering consultancy, DTCP approvals, building plans, and bank valuation estimates."
        />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/#/about`} />
      </Helmet>

      <main className="w-full pt-20">
        {/* About Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-950 overflow-hidden py-16">
          <VideoBackground
            src="/media/video/about.mp4"
            webmSrc="/media/video/about.webm"
            poster="/media/posters/about.webp"
            overlay
          />

          <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

          <div className="container-custom relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block"
            >
              Our Story & Heritage
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-off-white"
            >
              Engineering Madurai's Future <br />
              <span className="text-gold-gradient">With Integrity & Precision</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gold-400 font-accent text-2xl sm:text-3xl mt-4"
            >
              "{siteConfig.business.signOff}"
            </motion.p>
          </div>
        </section>

        <GoldDivider variant="angled" />

        {/* Company Story & Madurai Roots with Gopuram Silhouette */}
        <section className="py-20 bg-navy-900 relative overflow-hidden">
          {/* Gopuram Watermark Accent */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <GopuramSilhouette height={460} color="#D4A62A" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
                  Rooted in the Temple City
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-off-white mb-6">
                  Over 6 Years of Civil Engineering Excellence in Madurai
                </h2>
                <div className="space-y-4 text-off-white/70 text-sm sm:text-base leading-relaxed">
                  <p>
                    Founded in Madurai, <strong className="text-gold-400">VRP Engineering Services</strong> was established with a singular
                    commitment: to deliver honest, meticulous, and technically sound civil engineering consultancy for land
                    owners, property developers, and families building their dream homes.
                  </p>
                  <p>
                    Navigating regulatory approvals like DTCP, and local town planning directives can often be an intimidating
                    hurdle. We bring structured engineering rigour, ensuring all architectural drawings, structural layouts, and revenue
                    documents are perfectly compliant with the Tamil Nadu Combined Development and Building Rules (TNCDBR).
                  </p>
                  <p>
                    From total station surveying on rural Madurai acreage to bank cost estimation certificates accepted by leading financial
                    institutions, our practice bridges traditional craftsmanship with cutting-edge engineering precision.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="glass px-4 py-3 rounded-xl border border-gold-500/20">
                    <span className="text-2xl font-bold font-heading text-gold-400 block">{siteConfig.stats.yearsExperience}+</span>
                    <span className="text-xs text-off-white/60 uppercase">Years Experience</span>
                  </div>
                  <div className="glass px-4 py-3 rounded-xl border border-gold-500/20">
                    <span className="text-2xl font-bold font-heading text-gold-400 block">{siteConfig.stats.estimatesDelivered}+</span>
                    <span className="text-xs text-off-white/60 uppercase">Bank Estimates</span>
                  </div>
                  <div className="glass px-4 py-3 rounded-xl border border-gold-500/20">
                    <span className="text-2xl font-bold font-heading text-gold-400 block">{siteConfig.stats.clientSupport}%</span>
                    <span className="text-xs text-off-white/60 uppercase">Client Support</span>
                  </div>
                </div>
              </div>

              {/* Vision & Mission Cards */}
              <div className="space-y-6">
                <div className="glass rounded-3xl p-8 border border-gold-500/25">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gold-400 mb-2">Our Vision</h3>
                  <p className="text-sm text-off-white/70 leading-relaxed">
                    To be the foremost civil engineering and plan approval consultancy in Southern Tamil Nadu, renowned for
                    uncompromising technical ethics, transparent turnaround times, and customer-first engineering guidance.
                  </p>
                </div>

                <div className="glass rounded-3xl p-8 border border-gold-500/25">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gold-400 mb-2">Our Mission</h3>
                  <p className="text-sm text-off-white/70 leading-relaxed">
                    To empower builders and property owners with precise architectural drawings, zero-rejection DTCP approvals,
                    scientifically optimized steel schedules, and reliable bank loan estimates that safeguard construction investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoldDivider variant="line" />

        {/* Why Choose Us: 6 Icon Points */}
        <section className="py-20 bg-navy-950 relative">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
                The VRP Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-off-white">
                Why Work With <span className="text-gold-gradient">VRP Engineering</span>
              </h2>
              <p className="text-sm text-off-white/60 mt-3">
                Specialized experience, dedicated engineering talent, and a reputation built on trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyChooseUsPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="glass rounded-2xl p-6 sm:p-8 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-off-white mb-2">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-off-white/70 leading-relaxed">{point.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <GoldDivider variant="blueprint" />

        {/* Process Timeline */}
        <section className="py-20 bg-navy-900 relative">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
                Structured Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-off-white">
                Our Proven Consulting Method
              </h2>
            </div>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        {/* Technical Leadership */}
        <section className="py-20 bg-navy-950 relative border-t border-gold-500/10">
          <div className="container-custom">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
                Technical Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-off-white">
                Engineers You Can Rely On
              </h2>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="glass rounded-3xl p-8 sm:p-10 border border-gold-500/25 text-center relative overflow-hidden group hover:border-gold-400/50 transition-all shadow-xl">
                <div className="w-24 h-24 rounded-full bg-navy-800 border-2 border-gold-400/50 mx-auto mb-6 flex items-center justify-center text-gold-400 shadow-lg shadow-gold-500/10">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-off-white mb-2">{technicalLead.name}</h3>
                <p className="text-sm text-gold-400 font-semibold mb-2">{technicalLead.role}</p>
                <p className="text-xs text-off-white/70 mb-6">{technicalLead.exp}</p>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                  <a
                    href={`tel:${technicalLead.mobile.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-800/80 hover:bg-gold-500/20 text-off-white hover:text-gold-400 border border-gold-500/30 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>{technicalLead.mobile}</span>
                  </a>
                  <a
                    href={`mailto:${technicalLead.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-800/80 hover:bg-gold-500/20 text-off-white hover:text-gold-400 border border-gold-500/30 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-400" />
                    <span>{technicalLead.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Statutory Affiliations */}
        {/* <section className="py-16 bg-navy-900 border-t border-gold-500/15">
          <div className="container-custom text-center">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4 block">
              Official Accreditations & Code Adherence
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-off-white/70 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>DTCP Madurai Region Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>TNCDBR 2019 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Licensed Building Surveyor (LBS)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Institution of Engineers (India)</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* Bottom CTA */}
        <section className="py-16 bg-navy-950 text-center">
          <div className="container-custom">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-off-white mb-4">
              Discuss Your Civil Engineering Requirements
            </h3>
            <p className="text-sm text-off-white/60 mb-6 max-w-md mx-auto">
              Visit our office in Villapuram, Madurai, or schedule a free telephone consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-gold text-sm px-7 py-3.5">
                <Phone className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>
              <Link to="/services" className="btn-outline text-sm px-7 py-3.5">
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
