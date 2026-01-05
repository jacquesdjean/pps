// Prometheus Power Solutions - Company Information & Constants

export const company = {
  name: 'Prometheus Power Solutions',
  url: 'prometheus-ps.com',

  // Contact information
  phone: '(817) 555-0123', // TODO: Update with real phone number
  phoneRaw: '8175550123',
  email: 'lukas@prometheus-ps.com',

  // Location & Service Area
  location: 'Fort Worth, TX',
  headquarters: 'Fort Worth, Texas',
  serviceArea: 'Statewide Texas',
  license: 'TECL #XXXXX', // TODO: Update with real license

  // Service regions - for display purposes
  majorCities: [
    'Fort Worth',
    'Dallas',
    'Houston',
    'Austin',
    'San Antonio',
    'Arlington',
    'Plano',
    'Irving',
    'Lubbock',
    'El Paso',
  ],

  // DFW Metro (primary service area)
  dfwMetro: [
    'Fort Worth',
    'Arlington',
    'Southlake',
    'Keller',
    'Grapevine',
    'Colleyville',
    'Weatherford',
    'Burleson',
    'Mansfield',
    'Bedford',
    'Hurst',
    'Euless',
  ],

  // Company type & capabilities
  type: 'EPC + Installer',
  segments: ['Residential', 'Commercial'],

  // Unique positioning
  positioning: {
    tagline: 'Energy + Water Convergence for Texas Resilience',
    expertise: [
      'ERCOT grid expertise',
      'Storm resilience solutions',
      'Demand response programs',
      'Power Purchase Agreements (PPAs)',
      'Water Purchase Agreements',
    ],
    differentiators: [
      'Energy + Water convergence',
      'EPC and installation capabilities',
      'Direct engagement with REPs and Co-Ops',
      'Texas-focused grid solutions',
      'Residential and commercial expertise',
    ],
  },

  // Stats & credentials
  stats: {
    installations: '500+',
    warranty: '10yr',
    rating: '5.0★',
  },

  // Social & business hours (for future use)
  hours: 'Mon-Fri: 8am-6pm, Sat: 9am-3pm',
  emergency: '24/7 Emergency Support',
};

// Product lines
export const products = {
  energyStorage: {
    primary: 'FranklinWH',
    other: ['Tesla Powerwall', 'EcoFlow (on request)'],
  },
  solar: {
    brands: ['Qcells', 'Silfab', 'Mission Solar', 'Aptos'],
    type: 'US-made/assembled',
  },
  electrical: {
    primary: 'SPAN Smart Panels',
  },
  water: {
    primary: 'Aquaria Hydropacks',
    type: 'Atmospheric Water Generation (AWG)',
  },
};

// Authorized dealer certifications
export const certifications = [
  'FranklinWH Authorized Dealer',
  'Aquaria Authorized Dealer',
  'SPAN Certified Installer',
  'NABCEP Certified',
  'Texas Licensed Contractor',
];

// Navigation structure
export const navigation = {
  main: [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions', submenu: [
      { label: 'Residential', path: '/solutions/residential' },
      { label: 'Commercial', path: '/solutions/commercial' },
    ]},
    { label: 'Products', path: '/products', submenu: [
      { label: 'FranklinWH', path: '/products/franklinwh' },
      { label: 'All Products', path: '/products' },
    ]},
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};

// SEO metadata
export const seo = {
  defaultTitle: 'Prometheus Power Solutions | Texas Energy Storage & Solar',
  titleTemplate: '%s | Prometheus Power Solutions',
  description: 'Texas EPC contractor specializing in energy storage, solar integration, and water generation. Statewide coverage. FranklinWH authorized dealer. Fort Worth based.',
  keywords: 'energy storage texas, solar battery fort worth, franklinwh dealer, tesla powerwall installer, commercial solar texas, ercot solutions, atmospheric water generator',
  ogImage: '/logo.png',
};

export default { company, products, certifications, navigation, seo };
