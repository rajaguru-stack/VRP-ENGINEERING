import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../ui/SocialIcons';
import Logo from '../ui/Logo';
import GopuramSilhouette from '../ui/GopuramSilhouette';
import { siteConfig } from '../../data/siteConfig';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/20 overflow-hidden">
      {/* Gopuram silhouette decoration */}
      <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none">
        <GopuramSilhouette height={400} color="#D4A62A" />
      </div>
      <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none -scale-x-100">
        <GopuramSilhouette height={300} color="#D4A62A" />
      </div>

      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4 group" aria-label="VRP Engineering Services">
              <Logo size={42} className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-gold-400 font-heading font-bold text-lg leading-tight">VRP</span>
                <span className="text-off-white/70 text-[10px] tracking-widest uppercase leading-tight">
                  Engineering Services
                </span>
              </div>
            </Link>
            <p className="text-off-white/60 text-sm leading-relaxed mb-4">
              {siteConfig.business.tagline}
            </p>
            <p className="text-gold-500/80 font-accent text-lg">
              {siteConfig.business.signOff}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gold-400 font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-off-white/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-gold-400 font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-off-white/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-gold-400 font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-off-white/60">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-off-white/60">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-off-white/60">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-off-white/60">
                <Clock className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-navy-800/50 text-off-white/50 hover:text-gold-400 hover:bg-navy-700/50 transition-all">
                  <FacebookIcon size={16} />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-navy-800/50 text-off-white/50 hover:text-gold-400 hover:bg-navy-700/50 transition-all">
                  <InstagramIcon size={16} />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-lg bg-navy-800/50 text-off-white/50 hover:text-gold-400 hover:bg-navy-700/50 transition-all">
                  <YoutubeIcon size={16} />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-navy-800/50 text-off-white/50 hover:text-gold-400 hover:bg-navy-700/50 transition-all">
                  <LinkedinIcon size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-off-white/40 text-xs">
            © {currentYear} {siteConfig.business.name}. All rights reserved.
          </p>
          <p className="text-off-white/30 text-xs">
            DTCP & Civil Engineering Consultancy — {siteConfig.business.city}, {siteConfig.business.state}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
