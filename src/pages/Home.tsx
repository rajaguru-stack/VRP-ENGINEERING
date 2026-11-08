import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroScene from '../components/scenes/HeroScene';
import BlueprintScene from '../components/scenes/BlueprintScene';
import DTCPJourneyScene from '../components/scenes/DTCPJourneyScene';
import PrecisionScene from '../components/scenes/PrecisionScene';
import OnSiteScene from '../components/scenes/OnSiteScene';
import ServicesPreviewScene from '../components/scenes/ServicesPreviewScene';
import CTAScene from '../components/scenes/CTAScene';
import { siteConfig } from '../data/siteConfig';
import { generateLocalBusinessSchema } from '../utils/seo';

const Home: React.FC = () => {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.defaultTitle}</title>
        <meta name="description" content={siteConfig.seo.defaultDescription} />
        <meta name="keywords" content={siteConfig.seo.keywords} />
        <link rel="canonical" href={siteConfig.seo.siteUrl} />
        <meta property="og:title" content={siteConfig.seo.defaultTitle} />
        <meta property="og:description" content={siteConfig.seo.defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.seo.siteUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main className="w-full max-w-[100vw] overflow-x-hidden">
        {/* Scene 1: Hero */}
        <HeroScene />

        {/* Scene 2: Blueprint to Building */}
        <BlueprintScene />

        {/* Scene 3: DTCP Approval Journey */}
        <DTCPJourneyScene />

        {/* Scene 4: Precision in Numbers */}
        <PrecisionScene />

        {/* Scene 5: On-Site Expertise */}
        <OnSiteScene />

        {/* Scene 6: Services Preview */}
        <ServicesPreviewScene />

        {/* Scene 7: Testimonials & CTA Band */}
        <CTAScene />
      </main>
    </>
  );
};

export default Home;
