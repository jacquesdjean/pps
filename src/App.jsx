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
          {/* Badge */}
          <div
            style={{
              display: 'inline-block',
              background: colors.blueLight,
              color: colors.blue,
              fontSize: 12,
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: 6,
              marginBottom: 20,
            }}
          >
            Fort Worth Energy Experts
          </div>

          {/* Headline */}
          <h1>
            Backup Power & Energy Storage for Texas Homes
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.6,
              marginBottom: 28,
              maxWidth: 520,
            }}
          >
            Battery systems, panel upgrades, and whole-home solutions. Licensed, insured, and serving the DFW Metroplex.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href={`tel:${company.phone}`} className="btn-primary">
              Get Free Quote
            </a>
            <a href="#services" className="btn-secondary hide-mobile">
              View Services
            </a>
          </div>

          {/* Credentials */}
          <div className="hero-badge-row">
            {[
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
                  padding: '8px 14px',
                  borderRadius: 6,
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
          <div className="trust-stats-card">
            <div className="hero-stats">
              {[
                { num: '500+', label: 'Installations' },
                { num: '5+ Yrs', label: 'Experience' },
                { num: '5★', label: 'Google Rating' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px 0' }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: colors.blue }}>{item.num}</div>
                  <div style={{ fontSize: 12, color: colors.textLight, marginTop: 4 }}>
                    {item.label}
                  </div>
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
    { icon: '⚡', title: 'Grid Outages', desc: 'Texas storms leave you in the dark' },
    { icon: '💸', title: 'Rising Bills', desc: 'Energy costs keep climbing' },
    { icon: '💧', title: 'Water Worries', desc: 'Quality & access concerns' },
    { icon: '😰', title: 'No Control', desc: 'Dependent on unreliable systems' },
  ];

  return (
    <section className="section" style={{ background: colors.offWhite }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Common Challenges
          </h2>
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
              <div style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5 }}>
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
      desc: 'Store power for outages and reduce grid dependence.',
    },
    {
      icon: '⚡',
      title: 'Panel Upgrades',
      desc: 'Modernize your electrical for EVs, batteries, and smart home tech.',
    },
    {
      icon: '🏠',
      title: 'Whole-Home Solutions',
      desc: 'Complete energy and water independence packages.',
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
            SERVICES
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            What We Do
          </h2>
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

              <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>
                {s.title}
              </h3>

              <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.6 }}>
                {s.desc}
              </p>
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
            COMMERCIAL
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: colors.white, marginBottom: 16, lineHeight: 1.2 }}>
            Commercial & Multi-Family Projects
          </h2>
          <p style={{ fontSize: 16, color: '#94A3B8', lineHeight: 1.6, marginBottom: 24 }}>
            Scalable energy solutions for property managers and commercial developers.
          </p>
          <a href={`tel:${company.phone}`} className="btn-primary" style={{ display: 'inline-flex' }}>
            Get Commercial Quote
          </a>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          {[
            { icon: '📊', title: 'Load Analysis', desc: 'Energy audits and demand profiling' },
            { icon: '🔧', title: 'Turnkey Installation', desc: 'Design through commissioning' },
            { icon: '📈', title: 'Monitoring', desc: '24/7 system monitoring' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 10,
                padding: 16,
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.white }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#94A3B8' }}>{item.desc}</div>
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
            PRODUCTS
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Products We Install
          </h2>

          <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6, maxWidth: 500 }}>
            Reliable, proven solutions from trusted brands.
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

        {/* Additional brands note */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ fontSize: 14, color: colors.textLight }}>
            We also install Enphase, SolarEdge, LG, and other brands.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS SECTION (Desktop Only) ============
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'We discuss your needs and goals.' },
    { num: '02', title: 'Site Visit', desc: 'On-site evaluation and load analysis.' },
    { num: '03', title: 'Proposal', desc: 'Custom design with transparent pricing.' },
    { num: '04', title: 'Installation', desc: 'Permitting, install, and commissioning.' },
  ];

  return (
    <section id="process" className="process-section section" style={{ background: colors.white }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 40 }}>
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
            PROCESS
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            How It Works
          </h2>
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
    'Transparent pricing—no hidden fees',
    'Premium products with manufacturer warranties',
    'Fast response and clear communication',
    'Support after your project is complete',
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
            ABOUT US
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Why Choose Prometheus
          </h2>
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
              padding: 24,
              marginTop: 20,
            }}
            className="why-us-card"
          >
            <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.white, marginBottom: 16 }}>
              What Sets Us Apart
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {whyUs.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: colors.success, fontSize: 16, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#E2E8F0', lineHeight: 1.5 }}>{item}</span>
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
    { icon: '🏅', name: 'NABCEP', desc: 'PV Professional' },
    { icon: '📋', name: 'Texas TDLR', desc: 'Licensed Contractor' },
    { icon: '🔧', name: 'FranklinWH', desc: 'Certified Partner' },
  ];

  return (
    <section className="certifications-section section" style={{ background: colors.offWhite }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 36 }}>
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
            CERTIFICATIONS
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            Our Credentials
          </h2>
        </div>

        <div className="certifications-grid">
          {certs.map((cert, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{cert.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: colors.navy, marginBottom: 4 }}>{cert.name}</div>
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
      quote: "Prometheus made backup power easy. Professional from start to finish.",
      author: 'Sarah M.',
      location: 'Fort Worth',
    },
    {
      quote: "Panel upgrade and Powerwall installed in one day. On time and clean work.",
      author: 'Mike T.',
      location: 'Arlington',
    },
    {
      quote: "Honest advice, no upselling. Our energy bills are down significantly.",
      author: 'Jennifer K.',
      location: 'Plano',
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
            REVIEWS
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 10 }}>
            What Customers Say
          </h2>
        </div>

        <div className="grid-3-desktop">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="review-card"
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
              <p style={{ fontSize: 14, color: colors.text, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
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
    'Carrollton',
  ];

  return (
    <section id="areas" className="section" style={{ background: colors.navy }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 24 }}>
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

          <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.white, marginBottom: 10 }}>
            Serving the DFW Metroplex
          </h2>

          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.6 }}>
            Based in Fort Worth, serving the Dallas-Fort Worth area.
          </p>
        </div>

        <div className="service-tags">
          {dfwCities.map((city, i) => (
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
        <h2 style={{ fontSize: 28, fontWeight: 700, color: colors.navy, marginBottom: 12, lineHeight: 1.2 }}>
          Ready to Get Started?
        </h2>

        <p style={{ fontSize: 15, color: colors.textLight, marginBottom: 24, lineHeight: 1.5, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
          Get a free consultation and quote for your project.
        </p>

        <div className="cta-buttons">
          <a href={`tel:${company.phone}`} className="btn-primary">
            Call {company.phone}
          </a>
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
