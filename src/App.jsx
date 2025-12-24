import React, { useEffect } from 'react';
import './styles.css';

// Color palette
const colors = {
  blue: '#1E6BB8',
  blueLight: '#E8F2FC',
  blueDark: '#14507D',
  orange: '#E8762D',
  orangeLight: '#FEF3EB',
  navy: '#1A2B3C',
  white: '#FFFFFF',
  offWhite: '#F9FAFB',
  text: '#2D3748',
  textLight: '#64748B',
  border: '#E2E8F0',
  success: '#059669',
  successLight: '#ECFDF5',
};

// Company info
const company = {
  name: 'Prometheus Power Solutions',
  tagline: 'Energy & Water Independence for Texas Homes',
  phone: '(817) 555-0199',
  location: 'Fort Worth, Texas',
  yearsExp: '5+',
};

function App() {
  // Load Outfit font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <ServicesSection />
      <CommercialBanner />
      <ProductsSection />
      <ProcessSection />
      <AboutSection />
      <CertificationsSection />
      <ReviewsSection />
      <ServiceAreaSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// ============ HEADER ============
function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.blue} 100%)`,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}
          >
            ⚡
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: colors.navy, lineHeight: 1.2 }}>
              Prometheus
            </div>
            <div style={{ fontSize: 11, color: colors.textLight, fontWeight: 500 }}>
              Power Solutions
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#process">Our Process</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#areas">Service Areas</a>
        </nav>

        <div className="header-secondary-nav">
          <span style={{ fontSize: 14, color: colors.textLight }}>
            {company.phone}
          </span>
          <a href={`tel:${company.phone}`} className="btn-primary btn-header">
            Get Free Quote
          </a>
        </div>

        {/* Mobile CTA */}
        <a href={`tel:${company.phone}`} className="btn-primary btn-header mobile-only">
          Call Now
        </a>
      </div>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="hero" style={{ background: colors.white }}>
      <div className="hero-inner">
        <div className="hero-content">
          {/* Mobile Badge */}
          <div
            className="mobile-only"
            style={{
              display: 'inline-block',
              background: colors.blueLight,
              color: colors.blue,
              fontSize: 11,
              fontWeight: 600,
              padding: '5px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            Fort Worth's Energy Experts
          </div>

          {/* Tablet Badge */}
          <div
            className="tablet-only"
            style={{
              display: 'inline-block',
              background: colors.blueLight,
              color: colors.blue,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: 6,
              marginBottom: 18,
            }}
          >
            🏆 Fort Worth's Trusted Energy Experts
          </div>

          {/* Desktop Badge */}
          <div
            className="desktop-only"
            style={{
              display: 'inline-block',
              background: colors.blueLight,
              color: colors.blue,
              fontSize: 13,
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: 8,
              marginBottom: 24,
            }}
          >
            🏆 Fort Worth's Premier Energy & Utility Solutions Provider
          </div>

          {/* Mobile Headline */}
          <h1 className="mobile-only">
            Keep Your Home Powered—No Matter What
          </h1>

          {/* Tablet Headline */}
          <h1 className="tablet-only">
            Keep Your Home Powered & Protected—No Matter What Texas Throws At You
          </h1>

          {/* Desktop Headline */}
          <h1 className="desktop-only">
            Enterprise-Grade Power Solutions for Discerning Texas Properties
          </h1>

          {/* Mobile Subtext */}
          <p
            className="mobile-only"
            style={{
              fontSize: 15,
              color: colors.textLight,
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            Premium battery systems and whole-home solutions. Licensed, certified, and ready to help.
          </p>

          {/* Tablet Subtext */}
          <p
            className="tablet-only"
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 540,
            }}
          >
            From grid outages to water worries, we help Texas homeowners take control with premium battery systems and whole-home solutions. Licensed, certified, and here for you.
          </p>

          {/* Desktop Subtext */}
          <p
            className="desktop-only"
            style={{
              fontSize: 18,
              color: colors.textLight,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 580,
            }}
          >
            From luxury residences to commercial properties, we deliver institutional-grade energy independence and water solutions. Trusted by Fortune 500 facility managers and discerning homeowners across the DFW Metroplex.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href={`tel:${company.phone}`} className="btn-primary">
              <span className="mobile-only">Call Now</span>
              <span className="tablet-only">Get Your Free Estimate</span>
              <span className="desktop-only">Schedule Consultation</span>
            </a>
            <a href="#services" className="btn-secondary hide-mobile">
              <span className="tablet-only">See Our Solutions</span>
              <span className="desktop-only">Explore Solutions</span>
            </a>
          </div>

          {/* Desktop Hero Badge Row */}
          <div className="hero-badge-row">
            {[
              { icon: '🏢', text: 'Commercial & Utility Scale' },
              { icon: '🏠', text: 'High-End Residential' },
              { icon: '⚡', text: 'Tesla Certified' },
              { icon: '🔧', text: 'NABCEP Certified' },
            ].map((badge, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: colors.offWhite,
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  color: colors.text,
                }}
              >
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Stats Card */}
        <div>
          <div className="trust-stats-card desktop-enhanced">
            {/* Desktop-only header */}
            <div
              className="desktop-only"
              style={{
                textAlign: 'center',
                marginBottom: 24,
                paddingBottom: 20,
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 600, color: colors.blue, marginBottom: 4 }}>
                PROVEN TRACK RECORD
              </div>
              <div style={{ fontSize: 13, color: colors.textLight }}>
                Serving Texas since 2019
              </div>
            </div>

            <div className="hero-stats">
              {[
                { num: '500+', label: 'Installations', desktopLabel: 'Successful Installations' },
                { num: '5+ Yrs', label: 'Experience', desktopLabel: 'Industry Experience' },
                { num: '5★', label: 'Rated', desktopLabel: 'Google Rating' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px 0' }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: colors.blue }}>{item.num}</div>
                  <div className="mobile-only tablet-only" style={{ fontSize: 12, color: colors.textLight, marginTop: 4 }}>
                    {item.label}
                  </div>
                  <div className="desktop-only" style={{ fontSize: 13, color: colors.textLight, marginTop: 6 }}>
                    {item.desktopLabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop-only additional stats */}
            <div
              className="desktop-only"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 16,
                marginTop: 24,
                paddingTop: 24,
                borderTop: `1px solid ${colors.border}`,
              }}
            >
              {[
                { num: '$2M+', label: 'Projects Completed' },
                { num: '98%', label: 'Customer Satisfaction' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: colors.navy }}>{item.num}</div>
                  <div style={{ fontSize: 12, color: colors.textLight, marginTop: 4 }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 20,
                paddingTop: 20,
                borderTop: `1px solid ${colors.border}`,
                display: 'flex',
                justifyContent: 'center',
                gap: 16,
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: 12, color: colors.textLight }}>✅ Licensed</span>
              <span style={{ fontSize: 12, color: colors.textLight }}>✅ Insured</span>
              <span style={{ fontSize: 12, color: colors.textLight }}>✅ Bonded</span>
              <span className="desktop-only" style={{ fontSize: 12, color: colors.textLight }}>✅ NABCEP Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ STATS BAR (Desktop Only) ============
function StatsBar() {
  const stats = [
    { num: '15MW+', label: 'Total Capacity Installed' },
    { num: '500+', label: 'Projects Completed' },
    { num: '24/7', label: 'Monitoring & Support' },
    { num: '10yr', label: 'Warranty Coverage' },
  ];

  return (
    <div className="stats-bar">
      {stats.map((stat, i) => (
        <div key={i} className="stat-item">
          <div className="stat-number">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// ============ PROBLEM SECTION ============
function ProblemSection() {
  const problems = [
    { icon: '⚡', title: 'Grid Outages', desc: 'Texas storms leave you in the dark', mobileDesc: 'Storm blackouts' },
    { icon: '💸', title: 'Rising Bills', desc: 'Energy costs keep climbing', mobileDesc: 'High costs' },
    { icon: '💧', title: 'Water Worries', desc: 'Quality & access concerns', mobileDesc: 'Water issues' },
    { icon: '😰', title: 'No Control', desc: 'Dependent on unreliable systems', mobileDesc: 'No control' },
  ];

  return (
    <section className="section" style={{ background: colors.offWhite }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 28 }}>
          {/* Mobile */}
          <h2 className="mobile-only" style={{ fontSize: 22, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>
            Tired of Feeling Powerless?
          </h2>
          {/* Tablet */}
          <h2 className="tablet-only" style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Tired of Feeling Powerless?
          </h2>
          {/* Desktop */}
          <h2 className="desktop-only" style={{ fontSize: 32, fontWeight: 700, color: colors.navy, marginBottom: 12 }}>
            The Challenges Facing Texas Property Owners
          </h2>

          <p className="hide-mobile" style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.6, maxWidth: 500, margin: '0 auto' }}>
            Texas homeowners and businesses face real challenges every day
          </p>
        </div>

        <div className="grid-4-desktop" style={{ maxWidth: 900, margin: '0 auto' }}>
          {problems.map((p, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 12,
                padding: 20,
                textAlign: 'center',
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>{p.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: colors.navy, marginBottom: 4 }}>
                {p.title}
              </div>
              <div className="mobile-only" style={{ fontSize: 13, color: colors.textLight, lineHeight: 1.4 }}>
                {p.mobileDesc}
              </div>
              <div className="hide-mobile" style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5 }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES SECTION ============
function ServicesSection() {
  const services = [
    {
      icon: '🔋',
      title: 'Battery Installation',
      mobileTitle: 'Batteries',
      desc: 'Store solar energy or grid power for when you need it most. Stay powered during outages and reduce your dependence on the grid.',
      mobileDesc: 'Backup power when you need it most.',
      desktopFeatures: ['Residential 5-30kWh systems', 'Commercial 100kWh+ solutions', 'Seamless grid integration', 'Smart load management'],
    },
    {
      icon: '⚡',
      title: 'Main Panel Upgrades',
      mobileTitle: 'Panel Upgrades',
      desc: "Modernize your electrical system to handle today's demands—EVs, batteries, smart home tech, and more.",
      mobileDesc: 'Modern electrical for EVs & smart homes.',
      desktopFeatures: ['200-400A service upgrades', 'Smart panel integration', 'EV charging ready', 'Code compliance guaranteed'],
    },
    {
      icon: '🏠',
      title: 'Whole-Home Solutions',
      mobileTitle: 'Full Solutions',
      desc: 'Complete energy and water independence packages designed specifically for Texas homes and climate.',
      mobileDesc: 'Complete energy independence.',
      desktopFeatures: ['Solar + battery + water', 'Custom system design', 'Utility bill elimination', 'Property value increase'],
    },
  ];

  return (
    <section id="services" className="section" style={{ background: colors.white }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 32 }}>
          <div
            style={{
              display: 'inline-block',
              background: colors.blueLight,
              color: colors.blue,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            <span className="mobile-only">SERVICES</span>
            <span className="tablet-only">WHAT WE DO</span>
            <span className="desktop-only">PROFESSIONAL SERVICES</span>
          </div>

          <h2 className="mobile-only" style={{ fontSize: 22, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>
            Expert Services
          </h2>
          <h2 className="tablet-only" style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Expert Services for Your Home
          </h2>
          <h2 className="desktop-only" style={{ fontSize: 32, fontWeight: 700, color: colors.navy, marginBottom: 14 }}>
            Comprehensive Energy Solutions for Every Property Type
          </h2>

          <p className="hide-mobile" style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.6, maxWidth: 600 }}>
            From residential batteries to commercial-scale installations, we handle it all with expertise and care.
          </p>
        </div>

        <div className="grid-3-desktop">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                background: colors.offWhite,
                borderRadius: 16,
                padding: 24,
                border: `1px solid ${colors.border}`,
                height: '100%',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: colors.blueLight,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 26,
                  marginBottom: 18,
                }}
              >
                {s.icon}
              </div>

              <h3 className="mobile-only" style={{ fontSize: 17, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>
                {s.mobileTitle}
              </h3>
              <h3 className="hide-mobile" style={{ fontSize: 20, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
                {s.title}
              </h3>

              <p className="mobile-only" style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5 }}>
                {s.mobileDesc}
              </p>
              <p className="hide-mobile" style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6, marginBottom: 16 }}>
                {s.desc}
              </p>

              {/* Desktop-only feature list */}
              <div className="desktop-only" style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${colors.border}` }}>
                {s.desktopFeatures.map((feature, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ color: colors.success, fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 13, color: colors.text }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ COMMERCIAL BANNER (Desktop Only) ============
function CommercialBanner() {
  return (
    <section className="commercial-banner">
      <div className="commercial-banner-inner">
        <div>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              color: colors.white,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 20,
            }}
          >
            COMMERCIAL & UTILITY SCALE
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: colors.white, marginBottom: 20, lineHeight: 1.2 }}>
            Enterprise Solutions for Commercial Properties
          </h2>
          <p style={{ fontSize: 17, color: '#94A3B8', lineHeight: 1.7, marginBottom: 28 }}>
            We partner with property managers, facility operators, and commercial developers to deliver
            scalable energy solutions that reduce operating costs and ensure business continuity.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
            {['Office Buildings', 'Retail Centers', 'Industrial Facilities', 'Multi-Family Properties', 'Data Centers'].map((item, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: colors.white,
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <a href={`tel:${company.phone}`} className="btn-primary btn-large" style={{ display: 'inline-flex' }}>
            Discuss Your Project
          </a>
        </div>

        <div style={{ display: 'grid', gap: 20 }}>
          {[
            { icon: '📊', title: 'Load Analysis', desc: 'Comprehensive energy audits and demand profiling' },
            { icon: '💰', title: 'ROI Modeling', desc: 'Detailed financial projections and payback timelines' },
            { icon: '🔧', title: 'Turnkey Installation', desc: 'Full project management from design to commissioning' },
            { icon: '📈', title: 'Performance Monitoring', desc: '24/7 system monitoring and maintenance support' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                padding: 20,
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: colors.white, marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PRODUCTS SECTION ============
function ProductsSection() {
  const products = [
    {
      icon: '🔋',
      name: 'Tesla Powerwall 3',
      tagline: 'The gold standard in home batteries',
      tags: ['13.5 kWh', 'Seamless Backup', 'App Control', 'Sleek Design'],
      featured: true,
      showOnMobile: true,
    },
    {
      icon: '📊',
      name: 'SPAN Smart Panel',
      tagline: 'Intelligent electrical panel',
      tags: ['Circuit Control', 'Energy Monitoring', 'EV Ready', 'App Managed'],
      featured: false,
      showOnMobile: true,
    },
    {
      icon: '⚡',
      name: 'FranklinWH aPower 2',
      tagline: 'Scalable whole-home power',
      tags: ['Modular Design', '15 kWh', 'Smart Gateway', 'Grid Hybrid'],
      featured: false,
      showOnMobile: false,
    },
    {
      icon: '🔌',
      name: 'FranklinWH S Battery',
      tagline: 'Expand your storage capacity',
      tags: ['Stackable', '13.6 kWh Each', 'Easy Add-On', 'Weather Rated'],
      featured: false,
      showOnMobile: false,
    },
    {
      icon: '💧',
      name: 'Aquaria Hydropacks',
      tagline: 'Pure water from the air',
      tags: ['Atmospheric Water', 'Off-Grid Ready', 'No Plumbing', 'Texas Made'],
      featured: false,
      showOnMobile: true,
    },
  ];

  return (
    <section id="products" className="section" style={{ background: colors.blueLight }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 32 }}>
          <div
            style={{
              display: 'inline-block',
              background: colors.white,
              color: colors.blue,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            <span className="mobile-only">PRODUCTS</span>
            <span className="hide-mobile">PREMIUM PRODUCTS</span>
          </div>

          <h2 className="mobile-only" style={{ fontSize: 22, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>
            Top Products We Install
          </h2>
          <h2 className="tablet-only" style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Industry-Leading Brands We Trust
          </h2>
          <h2 className="desktop-only" style={{ fontSize: 32, fontWeight: 700, color: colors.navy, marginBottom: 14 }}>
            Premium Products for Residential & Commercial Applications
          </h2>

          <p className="hide-mobile" style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.6, maxWidth: 600 }}>
            We partner with the best to bring you reliable, proven solutions for energy and water independence.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div
              key={i}
              className={`product-card ${p.featured ? 'product-featured' : ''} ${!p.showOnMobile ? 'mobile-hide' : ''}`}
              style={{
                background: colors.white,
                borderRadius: 16,
                padding: 20,
                border: p.featured ? `2px solid ${colors.blue}` : `1px solid ${colors.border}`,
                position: 'relative',
              }}
            >
              {p.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: 20,
                    background: colors.blue,
                    color: colors.white,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: 6,
                  }}
                >
                  ⭐ OUR TOP PICK
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  marginTop: p.featured ? 8 : 0,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: colors.blueLight,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.navy, marginBottom: 4 }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 13, color: colors.textLight }}>{p.tagline}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      background: colors.blueLight,
                      color: colors.blue,
                      fontSize: 11,
                      fontWeight: 500,
                      padding: '4px 10px',
                      borderRadius: 5,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop-only "View All Products" link */}
        <div className="desktop-only" style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontSize: 15, color: colors.textLight, marginBottom: 16 }}>
            We also install Enphase, SolarEdge, LG, and other premium brands.
          </p>
          <a href={`tel:${company.phone}`} className="btn-secondary" style={{ display: 'inline-flex' }}>
            Request Product Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS SECTION (Desktop Only) ============
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Discovery Call', desc: 'We discuss your energy goals, challenges, and property requirements.' },
    { num: '02', title: 'Site Assessment', desc: 'Our engineers conduct a comprehensive on-site evaluation and load analysis.' },
    { num: '03', title: 'Custom Design', desc: 'We create a tailored solution with detailed specs and transparent pricing.' },
    { num: '04', title: 'Professional Install', desc: 'Our certified team handles permitting, installation, and commissioning.' },
  ];

  return (
    <section id="process" className="process-section section" style={{ background: colors.white }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              display: 'inline-block',
              background: colors.successLight,
              color: colors.success,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            OUR PROCESS
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: colors.navy, marginBottom: 14 }}>
            A Streamlined Path to Energy Independence
          </h2>
          <p style={{ fontSize: 17, color: colors.textLight, lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
            From initial consultation to ongoing support, we make the transition seamless.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={i} className="process-step">
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: colors.blueLight,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 700, color: colors.blue }}>{step.num}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  const badges = [
    { icon: '✅', label: 'Licensed & Insured' },
    { icon: '🏅', label: 'Certified Installers' },
    { icon: '📋', label: '5+ Years Experience' },
    { icon: '🤝', label: 'Local Texas Team' },
  ];

  const whyUs = [
    'Transparent pricing—no hidden fees or surprises',
    'Premium products backed by manufacturer warranties',
    'Fast response times and clear communication',
    'Comprehensive service from consult to install',
    'Ongoing support after your project is complete',
  ];

  const whyUsDesktop = [
    'Transparent pricing with detailed proposals—no hidden fees or surprises',
    'Premium products backed by comprehensive manufacturer warranties',
    'Dedicated project manager and fast response times',
    'Full-service from initial design through commissioning',
    'Ongoing 24/7 monitoring and lifetime support',
    'Financing options available for qualified customers',
  ];

  return (
    <section id="about" className="section" style={{ background: colors.white }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 32 }}>
          <div
            style={{
              display: 'inline-block',
              background: colors.successLight,
              color: colors.success,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            WHY PROMETHEUS
          </div>

          <h2 className="mobile-only" style={{ fontSize: 22, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>
            Why Choose Us
          </h2>
          <h2 className="tablet-only" style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Your Neighbors Trust Us
          </h2>
          <h2 className="desktop-only" style={{ fontSize: 32, fontWeight: 700, color: colors.navy, marginBottom: 14 }}>
            Trusted by Homeowners & Businesses Across Texas
          </h2>

          <p className="hide-mobile" style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.6, maxWidth: 600 }}>
            We're not just another contractor—we're your partners in creating a more resilient property.
          </p>
        </div>

        <div className="about-layout">
          {/* Trust Badges */}
          <div className="grid-2" style={{ gap: 14 }}>
            {badges.map((b, i) => (
              <div
                key={i}
                style={{
                  background: colors.offWhite,
                  borderRadius: 12,
                  padding: 20,
                  textAlign: 'center',
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{b.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.navy }}>{b.label}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Card */}
          <div
            style={{
              background: colors.navy,
              borderRadius: 16,
              padding: 28,
              marginTop: 20,
            }}
            className="why-us-card"
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: colors.white, marginBottom: 20 }}>
              Why Choose Prometheus?
            </h3>

            {/* Mobile/Tablet list */}
            <div className="tablet-only mobile-only" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {whyUs.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: colors.success, fontSize: 16, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#E2E8F0', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Desktop list */}
            <div className="desktop-only" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {whyUsDesktop.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: colors.success, fontSize: 18, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 15, color: '#E2E8F0', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CERTIFICATIONS SECTION (Desktop Only) ============
function CertificationsSection() {
  const certs = [
    { icon: '⚡', name: 'Tesla Certified', desc: 'Powerwall Installer' },
    { icon: '🏅', name: 'NABCEP', desc: 'PV Installation Professional' },
    { icon: '📋', name: 'Texas TDLR', desc: 'Licensed Electrical Contractor' },
    { icon: '🛡️', name: 'Fully Insured', desc: '$2M Liability Coverage' },
    { icon: '🔧', name: 'FranklinWH', desc: 'Certified Partner' },
  ];

  return (
    <section className="certifications-section section" style={{ background: colors.offWhite }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              display: 'inline-block',
              background: colors.white,
              color: colors.blue,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            CERTIFICATIONS & PARTNERSHIPS
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: colors.navy, marginBottom: 14 }}>
            Industry-Recognized Credentials
          </h2>
          <p style={{ fontSize: 17, color: colors.textLight, lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
            Our team holds the highest certifications in the industry, ensuring quality installations.
          </p>
        </div>

        <div className="certifications-grid">
          {certs.map((cert, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 14,
                padding: 28,
                textAlign: 'center',
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{cert.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: colors.navy, marginBottom: 6 }}>{cert.name}</div>
              <div style={{ fontSize: 13, color: colors.textLight }}>{cert.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ REVIEWS SECTION ============
function ReviewsSection() {
  const reviews = [
    {
      quote: "After Winter Storm Uri, we knew we needed backup power. Prometheus made it easy—from picking the right system to flawless installation.",
      mobileQuote: "Made backup power easy. Haven't worried about outages since!",
      author: 'Sarah M.',
      location: 'Fort Worth',
      showOnMobile: true,
    },
    {
      quote: "These guys know their stuff. They upgraded our panel and installed a Powerwall in one day. Professional, clean, and on time.",
      mobileQuote: "Professional and on time. They know their stuff!",
      author: 'Mike T.',
      location: 'Arlington',
      showOnMobile: false,
    },
    {
      quote: "The team helped us understand exactly what we needed—no upselling, just honest advice. Our energy bills are down and we have peace of mind.",
      mobileQuote: "Honest advice, lower bills. Highly recommend!",
      author: 'Jennifer K.',
      location: 'Plano',
      showOnMobile: true,
    },
  ];

  // Additional reviews for desktop
  const desktopOnlyReviews = [
    {
      quote: "As a commercial property manager, I've worked with many contractors. Prometheus stands out for their professionalism and technical expertise. They delivered a 500kWh system on time and under budget.",
      author: 'Robert H.',
      location: 'Dallas (Commercial)',
    },
    {
      quote: "The whole-home solution they designed for our ranch has been flawless. Complete energy independence and the Aquaria system provides all our water. Game changer for rural Texas living.",
      author: 'The Martinez Family',
      location: 'Weatherford',
    },
  ];

  return (
    <section id="reviews" className="section" style={{ background: colors.offWhite }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 32 }}>
          <div
            style={{
              display: 'inline-block',
              background: colors.orangeLight,
              color: colors.orange,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            <span className="mobile-only">REVIEWS</span>
            <span className="hide-mobile">REAL REVIEWS</span>
          </div>

          <h2 className="mobile-only" style={{ fontSize: 22, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>
            What Customers Say
          </h2>
          <h2 className="tablet-only" style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            What Texas Homeowners Say
          </h2>
          <h2 className="desktop-only" style={{ fontSize: 32, fontWeight: 700, color: colors.navy, marginBottom: 14 }}>
            Trusted by Homeowners & Businesses Across Texas
          </h2>

          <p className="hide-mobile" style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.6, maxWidth: 600 }}>
            Don't just take our word for it—hear from your neighbors and local businesses.
          </p>
        </div>

        <div className="grid-3-desktop">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`review-card ${!r.showOnMobile ? 'mobile-hide' : ''}`}
              style={{
                background: colors.white,
                borderRadius: 14,
                padding: 24,
                border: `1px solid ${colors.border}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: '#FBBF24', fontSize: 18 }}>★</span>
                ))}
              </div>
              <p className="mobile-only" style={{ fontSize: 14, color: colors.text, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                "{r.mobileQuote}"
              </p>
              <p className="hide-mobile" style={{ fontSize: 15, color: colors.text, lineHeight: 1.7, marginBottom: 18, flex: 1 }}>
                "{r.quote}"
              </p>
              <div style={{ fontSize: 14, fontWeight: 600, color: colors.navy }}>
                {r.author}
                <span style={{ fontWeight: 400, color: colors.textLight }}> • {r.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop-only additional reviews */}
        <div className="desktop-only" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginTop: 28 }}>
          {desktopOnlyReviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 14,
                padding: 28,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: '#FBBF24', fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 15, color: colors.text, lineHeight: 1.7, marginBottom: 20 }}>
                "{r.quote}"
              </p>
              <div style={{ fontSize: 14, fontWeight: 600, color: colors.navy }}>
                {r.author}
                <span style={{ fontWeight: 400, color: colors.textLight }}> • {r.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SERVICE AREA SECTION ============
function ServiceAreaSection() {
  const dfwCities = [
    'Fort Worth',
    'Dallas',
    'Arlington',
    'Plano',
    'Irving',
    'Frisco',
    'McKinney',
    'Denton',
    'Garland',
    'Grand Prairie',
    'Carrollton',
    'Richardson',
    'Lewisville',
    'Allen',
    'Flower Mound',
    'Southlake',
    'Grapevine',
    'Keller',
  ];

  // Mobile only shows first 6 cities
  const mobileCities = dfwCities.slice(0, 6);

  return (
    <section id="areas" className="section" style={{ background: colors.navy }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 28 }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              color: colors.white,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 6,
              marginBottom: 16,
            }}
          >
            SERVICE AREA
          </div>

          <h2 className="mobile-only" style={{ fontSize: 22, fontWeight: 700, color: colors.white, marginBottom: 8 }}>
            Serving DFW & Beyond
          </h2>
          <h2 className="tablet-only" style={{ fontSize: 26, fontWeight: 700, color: colors.white, marginBottom: 10 }}>
            Proudly Serving the DFW Metroplex
          </h2>
          <h2 className="desktop-only" style={{ fontSize: 32, fontWeight: 700, color: colors.white, marginBottom: 14 }}>
            Serving the Greater DFW Metroplex & All of Texas
          </h2>

          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.6, maxWidth: 600 }}>
            <span className="mobile-only">Based in Fort Worth, serving all of DFW.</span>
            <span className="hide-mobile">Based in Fort Worth, we serve homeowners and businesses across the entire Dallas-Fort Worth area—and throughout Texas.</span>
          </p>

          <p className="hide-mobile" style={{ fontSize: 14, color: colors.blue, marginTop: 12, fontWeight: 500 }}>
            📍 Statewide service available for commercial and larger residential projects
          </p>
        </div>

        {/* Mobile cities */}
        <div className="mobile-only service-tags">
          {mobileCities.map((city, i) => (
            <span
              key={i}
              style={{
                background: city === 'Fort Worth' ? colors.blue : 'rgba(255,255,255,0.1)',
                color: colors.white,
                fontSize: 13,
                fontWeight: 500,
                padding: '8px 14px',
                borderRadius: 6,
                border: city === 'Fort Worth' ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {city}
            </span>
          ))}
          <span
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: colors.white,
              fontSize: 13,
              fontWeight: 500,
              padding: '8px 14px',
              borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            +12 more
          </span>
        </div>

        {/* Tablet and Desktop cities */}
        <div className="hide-mobile service-tags">
          {dfwCities.map((city, i) => (
            <span
              key={i}
              style={{
                background: city === 'Fort Worth' ? colors.blue : 'rgba(255,255,255,0.1)',
                color: colors.white,
                fontSize: 14,
                fontWeight: 500,
                padding: '10px 18px',
                borderRadius: 8,
                border: city === 'Fort Worth' ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  return (
    <section className="section" style={{ background: colors.blueLight, textAlign: 'center' }}>
      <div className="container">
        <h2 className="mobile-only" style={{ fontSize: 24, fontWeight: 700, color: colors.navy, marginBottom: 12, lineHeight: 1.2 }}>
          Ready to Get Started?
        </h2>
        <h2 className="tablet-only" style={{ fontSize: 28, fontWeight: 700, color: colors.navy, marginBottom: 14, lineHeight: 1.2 }}>
          Ready for Energy Independence?
        </h2>
        <h2 className="desktop-only" style={{ fontSize: 36, fontWeight: 700, color: colors.navy, marginBottom: 18, lineHeight: 1.2 }}>
          Ready to Take Control of Your Energy Future?
        </h2>

        <p className="mobile-only" style={{ fontSize: 15, color: colors.textLight, marginBottom: 24, lineHeight: 1.5 }}>
          Get a free consultation today.
        </p>
        <p className="tablet-only" style={{ fontSize: 16, color: colors.textLight, marginBottom: 28, lineHeight: 1.6, maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>
          Get a free consultation and see how we can protect your home from Texas's unpredictable grid and weather.
        </p>
        <p className="desktop-only" style={{ fontSize: 18, color: colors.textLight, marginBottom: 36, lineHeight: 1.6, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          Schedule a complimentary consultation with our energy experts. We'll assess your property, discuss your goals, and design a custom solution that fits your needs and budget.
        </p>

        <div className="cta-buttons">
          <a href={`tel:${company.phone}`} className="btn-primary">
            <span className="mobile-only">Call {company.phone}</span>
            <span className="tablet-only">📞 Call {company.phone}</span>
            <span className="desktop-only">📞 Call {company.phone}</span>
          </a>
          <a href={`tel:${company.phone}`} className="btn-secondary hide-mobile">
            <span className="tablet-only">Get Your Free Estimate</span>
            <span className="desktop-only">Schedule Free Consultation</span>
          </a>
        </div>

        {/* Desktop-only guarantee */}
        <div className="desktop-only" style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 32 }}>
          {['Free Site Assessment', 'No-Pressure Consultation', 'Custom System Design', 'Transparent Pricing'].map((item, i) => (
            <span key={i} style={{ fontSize: 14, color: colors.textLight }}>
              ✓ {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="section" style={{ background: colors.navy, paddingTop: 48, paddingBottom: 32 }}>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Logo & Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.blue} 100%)`,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                  }}
                >
                  ⚡
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: colors.white }}>
                    Prometheus Power Solutions
                  </div>
                  <div style={{ fontSize: 13, color: '#94A3B8' }}>Fort Worth, Texas</div>
                </div>
              </div>

              <a
                href={`tel:${company.phone}`}
                style={{
                  display: 'inline-block',
                  fontSize: 22,
                  fontWeight: 700,
                  color: colors.white,
                  textDecoration: 'none',
                  marginBottom: 16,
                }}
              >
                📞 {company.phone}
              </a>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 16 }}>
                <span style={{ fontSize: 12, color: '#64748B' }}>✅ Licensed</span>
                <span style={{ fontSize: 12, color: '#64748B' }}>✅ Insured</span>
                <span style={{ fontSize: 12, color: '#64748B' }}>✅ Bonded</span>
              </div>
            </div>

            {/* Desktop Footer Links */}
            <div className="footer-links">
              <div className="footer-links-column">
                <h4>Services</h4>
                <a href="#services">Battery Installation</a>
                <a href="#services">Panel Upgrades</a>
                <a href="#services">Whole-Home Solutions</a>
                <a href="#services">Commercial Projects</a>
              </div>
              <div className="footer-links-column">
                <h4>Products</h4>
                <a href="#products">Tesla Powerwall</a>
                <a href="#products">SPAN Panel</a>
                <a href="#products">FranklinWH</a>
                <a href="#products">Aquaria</a>
              </div>
              <div className="footer-links-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#process">Our Process</a>
                <a href="#reviews">Reviews</a>
                <a href="#areas">Service Areas</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="footer-bottom"
            style={{
              fontSize: 12,
              color: '#475569',
              borderTop: '1px solid #2D3748',
              paddingTop: 24,
              marginTop: 32,
            }}
          >
            <span>© {new Date().getFullYear()} Prometheus Power Solutions. All rights reserved.</span>
            <span className="hide-mobile" style={{ fontSize: 12, color: '#64748B' }}>
              Serving Fort Worth, Dallas, and all of Texas
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
