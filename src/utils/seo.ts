import { siteConfig } from '../data/siteConfig';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.business.name,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '47, Rajiv Gandhi street, Meenakshi Nagar, Villapuram',
      addressLocality: 'Madurai',
      addressRegion: 'Tamil Nadu',
      postalCode: '625020',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '9.8971',
      longitude: '78.1158',
    },
    openingHours: 'Mo-Sa 09:00-19:00',
    areaServed: {
      '@type': 'City',
      name: 'Madurai',
    },
    serviceType: siteConfig.services.map((s) => s.title),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}
