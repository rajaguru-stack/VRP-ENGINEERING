import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import {
  FileCheck2,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Send,
  Building2,
} from 'lucide-react';
import FAQAccordion from '../components/ui/FAQAccordion';
import GoldDivider from '../components/ui/GoldDivider';
import VideoBackground from '../components/media/VideoBackground';
import { siteConfig } from '../data/siteConfig';

const videoClips = [
  { mp4: '/media/video/dtcp-journey.mp4', poster: '/media/posters/dtcp-journey.webp' },
  { mp4: '/media/video/blueprint-to-building.mp4', poster: '/media/posters/blueprint-to-building.webp' },
  { mp4: '/media/video/hero.mp4', poster: '/media/posters/hero.webp' },
  { mp4: '/media/video/steel-boq.mp4', poster: '/media/posters/steel-boq.webp' },
  { mp4: '/media/video/steel-boq.mp4', poster: '/media/posters/steel-boq.webp' },
  { mp4: '/media/video/site-survey.mp4', poster: '/media/posters/site-survey.webp' },
];

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | VRP Engineering Services - Madurai</title>
        <meta
          name="description"
          content="Explore our 5 specialized civil engineering services in Madurai: DTCP approval, building planning, bank cost estimates, steel BOQ & takeoff, and site measurement."
        />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/#/services`} />
      </Helmet>

      <main className="w-full pt-20">
        {/* Services Page Hero */}
        <section className="relative py-20 bg-navy-950 overflow-hidden text-center">
          <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(212,166,42,0.1) 0%, transparent 70%)',
            }}
          />

          <div className="container-custom relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
              Consultancy Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-off-white tracking-tight">
              Engineering <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-base sm:text-lg text-off-white/70 mt-4 leading-relaxed">
              We offer comprehensive civil, planning and regulatory consultancy tailored to make your
              building journey in Madurai seamless and cost-effective.
            </p>
          </div>
        </section>

        <GoldDivider variant="line" />

        {/* 5 Detailed Service Sections (Alternating Layout) */}
        <div className="space-y-16 py-12">
          {siteConfig.services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[service.icon] || Building2;
            const clip = videoClips[index] || videoClips[0];

            return (
              <section
                key={service.id}
                id={service.id}
                className="relative py-16 scroll-mt-24 overflow-hidden"
              >
                {/* Background subtle video/ambient styling */}
                <div className="absolute inset-0 -z-10 opacity-30">
                  <VideoBackground src={clip.mp4} poster={clip.poster} overlay />
                </div>
                <div className="absolute inset-0 bg-navy-950/85 -z-10" />

                <div className="container-custom">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Left Column (Details) */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-gold-400 font-bold px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
                          SERVICE 0{index + 1}
                        </span>
                        {'scope' in service && Boolean(service.scope) && (
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
                            {String((service as { scope?: string }).scope)}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-off-white mb-4">
                        {service.title}
                      </h2>

                      {/* Special Tags: subCategories (Single Plot, Layout, Land Conversion) */}
                      {'subCategories' in service && Array.isArray(service.subCategories) && (
                        <div className="mb-6 p-4 rounded-xl bg-navy-900/80 border border-gold-500/20">
                          <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider block mb-2.5">
                            Core Approvals Handled:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.subCategories.map((cat, c) => (
                              <span
                                key={c}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 text-off-white text-xs font-medium border border-gold-500/25"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Special Tags: Limits & Building Types for Building Approvals */}
                      {'limits' in service && Array.isArray(service.limits) && (
                        <div className="mb-6 p-4 rounded-xl bg-navy-900/80 border border-gold-500/20 space-y-3">
                          <div>
                            <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider block mb-2">
                              Jurisdiction Limits:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {service.limits.map((limit, l) => (
                                <span
                                  key={l}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 text-off-white text-xs font-medium border border-gold-500/25"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                                  {limit}
                                </span>
                              ))}
                            </div>
                          </div>
                          {'buildingTypes' in service && Array.isArray(service.buildingTypes) && (
                            <div>
                              <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider block mb-2">
                                Building Types:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {service.buildingTypes.map((type, t) => (
                                  <span
                                    key={t}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/10 text-gold-300 text-xs font-medium border border-gold-500/30"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      <p className="text-sm sm:text-base text-off-white/70 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* What You Get Checklist */}
                      <div className="mb-6">
                        <h3 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-3 flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-gold-400" />
                          <span>What You Get (Deliverables)</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.whatYouGet.map((item, w) => (
                            <div key={w} className="flex items-start gap-2 text-xs text-off-white/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      {/* <div className="flex items-center gap-2 mb-8 text-xs text-off-white/70 bg-navy-900/60 p-3 rounded-lg border border-gold-500/10 inline-flex">
                        <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>
                          <strong className="text-gold-400">Typical Timeline:</strong> {service.timeline}
                        </span>
                      </div> */}

                      {/* Enquire Button */}
                      <div>
                        <Link
                          to={`/contact?service=${service.id}`}
                          className="btn-gold inline-flex items-center gap-2 text-sm px-6 py-3"
                        >
                          <Send className="w-4 h-4" />
                          <span>Enquire About {service.shortTitle}</span>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Right Column: Documents Required Box */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}
                    >
                      <div className="glass rounded-3xl p-6 sm:p-8 border border-gold-500/20 shadow-xl relative overflow-hidden">
                        <div className="flex items-center gap-2 text-gold-400 mb-4">
                          <FileCheck2 className="w-5 h-5" />
                          <h4 className="text-sm uppercase tracking-wider font-heading font-bold">
                            Documents Required
                          </h4>
                        </div>
                        <p className="text-xs text-off-white/60 mb-4">
                          Have these ready or contact us to assist with missing revenue certificates:
                        </p>
                        <ul className="space-y-2.5">
                          {service.documentsRequired.map((doc, d) => (
                            <li
                              key={d}
                              className="flex items-center gap-2.5 text-xs text-off-white/80 bg-navy-900/80 p-2.5 rounded-lg border border-gold-500/10"
                            >
                              <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs">
                          <span className="text-off-white/50">Need help compiling?</span>
                          <Link
                            to={`/contact?service=${service.id}`}
                            className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1"
                          >
                            <span>Ask our team</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-16">
                  <GoldDivider variant={index % 2 === 0 ? 'angled' : 'blueprint'} />
                </div>
              </section>
            );
          })}
        </div>

        {/* Short FAQ Accordion */}
        <section className="py-20 bg-navy-950 relative">
          <div className="container-custom max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-heading font-bold text-off-white">
                Civil Consultancy & Approval FAQs
              </h2>
              <p className="text-xs sm:text-sm text-off-white/60 mt-2">
                Clear answers to common questions on DTCP clearances, bank valuation estimates, and steel quantity takeoffs.
              </p>
            </div>

            <FAQAccordion items={siteConfig.faq} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-navy-900 border-t border-gold-500/15 text-center">
          <div className="container-custom">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-off-white mb-3">
              Ready to Initiate Your Project?
            </h3>
            <p className="text-sm text-off-white/60 mb-6 max-w-lg mx-auto">
              Our registered civil consultants provide transparent pricing, rapid document audits, and end-to-end liaisoning.
            </p>
            <Link to="/contact" className="btn-gold text-sm px-8 py-3.5">
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
