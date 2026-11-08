export const siteConfig = {
  business: {
    name: 'VRP Engineering Services',
    tagline: 'DTCP & Civil Engineering Consultancy',
    signOff: 'Build Better... Together...',
    city: 'Madurai',
    state: 'Tamil Nadu',
    country: 'India',
    leadEngineer: {
      name: 'Er. Vignesh P',
      role: 'Civil Engineer / Building Consultant',
      qualification: 'DTCP Registered Engineer',
      mobile: '+91 95663 66619',
      email: 'pvignesh738@gmail.com',
    },
  },
  contact: {
    phone: '+91 95663 66619',
    whatsapp: '919566366619', // international format for wa.me without + or spaces
    email: 'pvignesh738@gmail.com',
    address: '47, Rajiv Gandhi street, Meenakshi Nagar, Villapuram, Madurai - 625020, Tamil Nadu, India',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.528027730397!2d78.1158485!3d9.8970875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5980a312019%3A0x6a2542a3bcfa025e!2sVillapuram%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },
  social: {
    facebook: 'https://www.facebook.com/share/1A2c76mv1x/',
    instagram: 'https://www.instagram.com/vrpengg_2020?mdxt=MWdsczdhZDZ1NmU0aA==',
    youtube: 'https://www.youtube.com/@VRPEngineeringServices',
    linkedin: '',
  },
  services: [
    {
      id: 'dtcp-land-approval',
      title: 'DTCP Approval Consultancy',
      shortTitle: 'DTCP Land Approval',
      icon: 'MapPin',
      subCategories: [
        'Single Plot Approval',
        'Layout Approval',
        'Land Use Conversion',
      ],
      description:
        'Comprehensive DTCP land-based approval and regularisation consultancy in Madurai and Southern Tamil Nadu. We manage the entire statutory clearance process for individual plots, residential/commercial layout sanctions, and agricultural-to-non-agricultural land conversions.',
      whatYouGet: [
        'Single plot approval & regularisation (DTCP Scheme)',
        'Residential & commercial layout approval & sanction',
        'Land conversion (Agricultural to Non-Agricultural / CLU / Nala)',
        'Field Measurement Book (FMB) survey alignment',
        'Directorate of Town & Country Planning liaison',
        'Procurement of sealed DTCP sanction order',
      ],
      documentsRequired: [
        'Registered Sale Deed / Parent land documents',
        'Patta copy & Chitta / Adangal extract',
        'FMB (Field Measurement Book) sketch',
        'Encumbrance Certificate (EC) for 30 years',
        'Revenue subdivision / combined sketch',
        'Aadhaar card & owner identity proof',
      ],
      timeline: '30 - 60 working days (subject to DTCP scrutiny)',
    },
    {
      id: 'building-plan-approvals',
      title: 'Building Plan Approvals',
      shortTitle: 'Building Approvals',
      icon: 'FileCheck',
      limits: [
        'Corporation',
        'Local Panchayat',
        'DTCP',
      ],
      buildingTypes: [
        'Residential',
        'Commercial',
        'Industrial'
      ],
      description:
        'Statutory building plan approvals and building permit sanctions tailored to your project location. We coordinate building sanctions across Madurai Corporation limits, Local Panchayat limits, and DTCP jurisdictions for both residential and commercial constructions.',
      whatYouGet: [
        'Madurai Corporation limit building approvals',
        'Local Panchayat (Village / Town) plan sanctions',
        'DTCP / LPA planning permission clearance',
        'Residential approvals (Houses, villas, apartments)',
        'Commercial approvals (Shops, complexes, offices, godowns)',
        'Bylaw compliance scrutiny (Setbacks, FSI, coverage & parking)',
      ],
      documentsRequired: [
        'Approved plot document / DTCP order copy',
        'Patta, Chitta & Encumbrance Certificate (EC)',
        'Proposed building architectural drawings & site plan',
        'Property tax receipt / Vacant land tax receipt',
        'Structural stability certificate (for multi-storey / commercial)',
        'Owner ID proof & NOC documentation (if applicable)',
      ],
      timeline: '15 - 30 working days',
    },
    {
      id: 'building-plan',
      title: 'Building Plan Consultancy & Architectural Design',
      shortTitle: 'Building Plans & Design',
      icon: 'PenTool',
      description:
        'Professional architectural drafting and design consultancy for residential and commercial projects. We create detailed 2D floor plans, elevations, structural layouts, and Vastu-compliant designs that optimize space and comply with building bylaws.',
      whatYouGet: [
        'Architectural floor plans (2D) & working drawings',
        'Front elevation and section drawings',
        'Site plan with setback & parking coordination',
        'Structural layout and column marking details',
        'Vastu-compliant designs tailored to plot orientation',
        'Revision support until final client sign-off',
      ],
      documentsRequired: [
        'Land survey details / FMB sketch',
        'Plot dimensions and orientation',
        'Owner requirements brief & room schedules',
        'Existing structure details (if renovation)',
      ],
      timeline: '7 - 15 working days',
    },
    {
      id: 'bank-estimates',
      title: 'Bank Estimates & Construction Cost Estimates',
      shortTitle: 'Bank Estimates',
      icon: 'Calculator',
      description:
        'Accurate construction cost estimates prepared to bank standards for housing loans, construction finance, and insurance purposes. Our estimates are accepted by all major banks and financial institutions across Tamil Nadu.',
      whatYouGet: [
        'Detailed cost estimate as per PWD/bank format',
        'Abstract estimate with item-wise breakdown',
        'Material and labour rate analysis',
        'Bank-ready estimate certificate',
        'Valuation report for loan processing',
        'Revision support for bank queries',
      ],
      documentsRequired: [
        'Approved building plan',
        'Land documents',
        'Existing structure details (if any)',
        'Bank-specific format requirements',
      ],
      timeline: '5 - 10 working days',
    },
    {
      id: 'steel-boq',
      title: 'Steel BOQ & Quantity Takeoff',
      shortTitle: 'Steel BOQ',
      icon: 'BarChart3',
      description:
        'Precise steel Bill of Quantities and quantity takeoff services for structural projects. We calculate exact steel requirements — bar bending schedules, cut lengths, and tonnage — to minimize waste and optimize procurement.',
      whatYouGet: [
        'Complete Bar Bending Schedule (BBS)',
        'Steel quantity takeoff (element-wise)',
        'Cut-length optimization',
        'Grade-wise steel summary',
        'Concrete quantity estimation',
        'Material procurement checklist',
      ],
      documentsRequired: [
        'Structural drawings',
        'Architectural plans',
        'Column and beam schedules',
        'Foundation details',
      ],
      timeline: '5 - 12 working days (based on project size)',
    },
    {
      id: 'site-measurement',
      title: 'Site Measurement & Technical Consultancy',
      shortTitle: 'Site Survey',
      icon: 'Ruler',
      description:
        'Professional site measurement, surveying, and technical consultancy services using modern equipment. From plot boundary verification to contour mapping, we provide the precise data you need for planning and construction.',
      whatYouGet: [
        'Total station survey and measurement',
        'Plot boundary verification',
        'Contour and level survey',
        'As-built measurement documentation',
        'Site feasibility assessment',
        'Technical advisory for construction issues',
      ],
      documentsRequired: [
        'Land document / Patta',
        'FMB / Survey sketch',
        'Access details to site',
        'Previous survey data (if available)',
      ],
      timeline: '1 - 3 working days',
    },
  ],
  stats: {
    yearsExperience: 6,
    estimatesDelivered: 50,
    clientSupport: 100,
  },
  festiveBanner: {
    enabled: false, // Toggle to true for festivals
    message: '🪔 Happy Deepavali from VRP Engineering Services! 🪔',
    link: '',
  },
  testimonials: [
    {
      id: 1,
      text: 'Excellent service by Engineer Vignesh! Very professional, supportive, and dedicated. The college building plan and layout were prepared neatly with great attention to detail. Highly recommended for quality engineering services!',
      rating: 5,
      tag: 'College Building Plan & Layout',
    },
    {
      id: 2,
      text: 'I know them from 2024 November. Their Plan design, Structural plan as well as Estimate everything is good. Easily approachable. In case of any clarification or doubt in plan as well as field work their response is highly appreciable. Most reliable person. In case of bank loan they issue stage by stage estimate value of completed work which is very easy to avail bank loan at times.',
      rating: 5,
      tag: 'Plan Design, Structural Plan & Bank Estimate',
    },
  ],
  faq: [
    {
      question: 'What is the difference between DTCP and CMDA approval?',
      answer:
        'DTCP (Directorate of Town and Country Planning) covers building plan approvals in most Tamil Nadu cities including Madurai. CMDA (Chennai Metropolitan Development Authority) operates specifically in the Chennai metro area. Both serve similar functions but cover different jurisdictions. VRP Engineering specializes in DTCP approvals for the Madurai region.',
    },
    {
      question: 'What documents are needed for DTCP building plan approval?',
      answer:
        'Key documents include: Land document/Patta copy, FMB (Field Measurement Book) sketch, Chitta, Encumbrance Certificate (EC), property tax receipt, Aadhaar & ID proof, and a professionally drafted building plan. Our team will guide you through the complete checklist based on your specific project.',
    },
    {
      question: 'How long does DTCP approval typically take?',
      answer:
        'DTCP approval usually takes 30-60 working days from submission, depending on the complexity of the project and the completeness of documentation. Our consultancy streamlines the process and follows up regularly to minimize delays.',
    },
    {
      question:
        'Are your construction cost estimates accepted by banks for housing loans?',
      answer:
        'Yes, our estimates are prepared in PWD (Public Works Department) and bank-standard formats and are accepted by all major banks and financial institutions in Tamil Nadu, including SBI, Indian Bank, Canara Bank, HDFC, ICICI, and others.',
    },
    {
      question:
        'What is a BOQ (Bill of Quantities) and why is it important?',
      answer:
        'A BOQ is a detailed document listing all materials, parts, and labour needed for a construction project with exact quantities. For steel, it includes a Bar Bending Schedule (BBS) with cut lengths and shapes. It helps in accurate procurement, cost control, and minimizing material wastage — potentially saving 10-15% on steel costs.',
    },
  ],
  seo: {
    siteUrl: 'https://vrpengineering.in',
    defaultTitle:
      'VRP Engineering Services | DTCP & Civil Engineering Consultancy, Madurai',
    defaultDescription:
      'Expert DTCP building plan approval consultancy, construction cost estimates for bank loans, steel BOQ, quantity takeoff, and site measurement services in Madurai, Tamil Nadu.',
    keywords:
      'DTCP approval Madurai, building plan approval Madurai, civil engineering consultant Madurai, BOQ, quantity takeoff, construction cost estimate for bank loan, steel BBS, site measurement Madurai',
  },
  formEndpoint:
    import.meta.env.VITE_FORM_ENDPOINT ||
    'https://formspree.io/f/YOUR_FORM_ID', // Set VITE_FORM_ENDPOINT in .env
};

export type Service = (typeof siteConfig.services)[number];
export type Testimonial = (typeof siteConfig.testimonials)[number];
export type FAQ = (typeof siteConfig.faq)[number];
