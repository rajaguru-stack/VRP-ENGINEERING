import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/ui/SocialIcons';
import ContactForm from '../components/ui/ContactForm';
import GoldDivider from '../components/ui/GoldDivider';
import GopuramSilhouette from '../components/ui/GopuramSilhouette';
import { siteConfig } from '../data/siteConfig';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | VRP Engineering Services - Madurai Office</title>
        <meta
          name="description"
          content="Get in touch with VRP Engineering Services in Madurai. Contact our civil consultants for DTCP approvals, building plan designs, bank estimates, and site survey appointments."
        />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/#/contact`} />
      </Helmet>

      <main className="w-full pt-20">
        {/* Contact Hero */}
        <section className="relative py-16 sm:py-20 bg-navy-950 overflow-hidden text-center">
          <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(212,166,42,0.1) 0%, transparent 70%)',
            }}
          />

          <div className="container-custom relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
              Consultation & Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-off-white tracking-tight">
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="text-sm sm:text-base text-off-white/70 mt-3 leading-relaxed">
              Have a plot to measure, a building plan to draft, or a DTCP approval to secure? Send us a message or
              visit our Madurai consultancy office.
            </p>
          </div>
        </section>

        <GoldDivider variant="line" />

        {/* Contact Form & Contact Details Grid */}
        <section className="py-16 bg-navy-900 relative overflow-hidden">
          {/* Subtle Gopuram watermark accent */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <GopuramSilhouette height={400} color="#D4A62A" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 glass rounded-3xl p-6 sm:p-10 border border-gold-500/25 shadow-2xl relative"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-2">
                    <Send className="w-3.5 h-3.5" />
                    <span>Direct Consultancy Request</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-off-white">
                    Send an Online Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-off-white/60 mt-1">
                    Fill out the form below. We will review your requirement and respond within 24 working hours.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              {/* Right Column: Contact Cards, WhatsApp, Social & Timings */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 space-y-6"
              >
                {/* Instant WhatsApp Action Card */}
                <div className="glass rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-navy-950">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-bold text-off-white">
                        Instant WhatsApp Chat
                      </h3>
                      <p className="text-xs text-off-white/60">Connect directly with a civil engineer</p>
                    </div>
                  </div>
                  <p className="text-xs text-off-white/70 mb-4">
                    Send your site drawings or Patta copies on WhatsApp for rapid preliminary assessment.
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                      "Hi! I'd like to consult with VRP Engineering regarding building plan and approval services."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-900/40"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>

                {/* Info Cards Grid */}
                <div className="glass rounded-3xl p-6 border border-gold-500/20 space-y-5">
                  <h3 className="text-base font-heading font-bold text-gold-400 uppercase tracking-wider text-xs">
                    Office Contact Coordinates
                  </h3>

                  {/* Phone */}
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-off-white/50 block">Phone Consultation</span>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-off-white font-semibold hover:text-gold-400 transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-off-white/50 block">Email Inquiries</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-off-white font-semibold hover:text-gold-400 transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-off-white/50 block">Registered Office</span>
                      <p className="text-off-white/90 leading-snug">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-off-white/50 block">Consultation Hours</span>
                      <p className="text-off-white/90">{siteConfig.contact.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="glass rounded-2xl p-4 border border-gold-500/20 flex items-center justify-between">
                  <span className="text-xs text-off-white/60">Follow our social handles:</span>
                  <div className="flex items-center gap-2">
                    {siteConfig.social.facebook && (
                      <a
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="p-2 rounded-lg bg-navy-800 text-off-white/70 hover:text-gold-400 hover:bg-navy-700 transition-colors"
                      >
                        <FacebookIcon size={16} />
                      </a>
                    )}
                    {siteConfig.social.instagram && (
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-2 rounded-lg bg-navy-800 text-off-white/70 hover:text-gold-400 hover:bg-navy-700 transition-colors"
                      >
                        <InstagramIcon size={16} />
                      </a>
                    )}
                    {siteConfig.social.youtube && (
                      <a
                        href={siteConfig.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="p-2 rounded-lg bg-navy-800 text-off-white/70 hover:text-gold-400 hover:bg-navy-700 transition-colors"
                      >
                        <YoutubeIcon size={16} />
                      </a>
                    )}
                    {siteConfig.social.linkedin && (
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 rounded-lg bg-navy-800 text-off-white/70 hover:text-gold-400 hover:bg-navy-700 transition-colors"
                      >
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <GoldDivider variant="line" />

        {/* Google Maps Embed Section */}
        <section className="py-16 bg-navy-950">
          <div className="container-custom">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1 block">
                Find Our Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-off-white">
                Visit Us in Madurai
              </h2>
              <p className="text-xs sm:text-sm text-off-white/60 mt-1">
                Located in Villapuram, Meenakshi Nagar, Madurai, easily accessible from all parts of the district.
              </p>
            </div>

            <div className="glass rounded-3xl overflow-hidden border border-gold-500/20 shadow-2xl h-[360px] sm:h-[420px] w-full relative">
              <iframe
                title="VRP Engineering Services Office Location"
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.1]"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
