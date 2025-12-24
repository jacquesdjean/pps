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
      <ProblemSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
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
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#areas">Service Areas</a>
        </nav>

        <a href={`tel:${company.phone}`} className="btn-primary btn-header">
          📞 Call Now
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
            🏆 Fort Worth's Trusted Energy Experts
          </div>

          {/* Headline */}
          <h1>Keep Your Home Powered & Protected—No Matter What Texas Throws At You</h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: 17,
              color: colors.textLight,
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 540,
            }}
          >
            From grid outages to water worries, we help Texas homeowners take control with premium battery systems and whole-home solutions. Licensed, certified, and here for you.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href={`tel:${company.phone}`} className="btn-primary">
              Get Your Free Estimate
            </a>
            <a href="#services" className="btn-secondary">
              See Our Solutions
            </a>
          </div>
        </div>

        {/* Trust Stats Card - Right side on desktop */}
        <div>
          <div
            style={{
              background: colors.white,
              padding: 24,
              borderRadius: 16,
              border: `1px solid ${colors.border}`,
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div className="hero-stats">
              {[
                { num: '500+', label: 'Successful Installs' },
                { num: '5+ Yrs', label: 'Experience' },
                { num: '5★', label: 'Google Rated' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px 0' }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: colors.blue }}>{item.num}</div>
                  <div style={{ fontSize: 13, color: colors.textLight, marginTop: 4 }}>{item.label}</div>
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
                gap: 20,
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: 13, color: colors.textLight }}>✅ Licensed</span>
              <span style={{ fontSize: 13, color: colors.textLight }}>✅ Insured</span>
              <span style={{ fontSize: 13, color: colors.textLight }}>✅ Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.navy,
              marginBottom: 12,
            }}
          >
            Tired of Feeling Powerless?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.6,
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            Texas homeowners face real challenges every day
          </p>
        </div>

        <div className="grid-4-desktop" style={{ maxWidth: 900, margin: '0 auto' }}>
          {problems.map((p, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 14,
                padding: 24,
                textAlign: 'center',
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{p.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: colors.navy, marginBottom: 6 }}>
                {p.title}
              </div>
              <div style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5 }}>{p.desc}</div>
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
      desc: 'Store solar energy or grid power for when you need it most. Stay powered during outages and reduce your dependence on the grid.',
    },
    {
      icon: '⚡',
      title: 'Main Panel Upgrades',
      desc: "Modernize your electrical system to handle today's demands—EVs, batteries, smart home tech, and more.",
    },
    {
      icon: '🏠',
      title: 'Whole-Home Solutions',
      desc: 'Complete energy and water independence packages designed specifically for Texas homes and climate.',
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
            WHAT WE DO
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.navy,
              marginBottom: 12,
            }}
          >
            Expert Services for Your Home
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            From batteries to panel upgrades, we handle it all with care and expertise.
          </p>
        </div>

        <div className="grid-3-desktop">
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: colors.offWhite,
                borderRadius: 16,
                padding: 28,
                border: `1px solid ${colors.border}`,
                height: '100%',
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: colors.blueLight,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 20,
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.navy,
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6 }}>{s.desc}</p>
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
    },
    {
      icon: '📊',
      name: 'SPAN Smart Panel',
      tagline: 'Intelligent electrical panel',
      tags: ['Circuit Control', 'Energy Monitoring', 'EV Ready', 'App Managed'],
      featured: false,
    },
    {
      icon: '⚡',
      name: 'FranklinWH aPower 2',
      tagline: 'Scalable whole-home power',
      tags: ['Modular Design', '15 kWh', 'Smart Gateway', 'Grid Hybrid'],
      featured: false,
    },
    {
      icon: '🔌',
      name: 'FranklinWH S Battery',
      tagline: 'Expand your storage capacity',
      tags: ['Stackable', '13.6 kWh Each', 'Easy Add-On', 'Weather Rated'],
      featured: false,
    },
    {
      icon: '💧',
      name: 'Aquaria Hydropacks',
      tagline: 'Pure water from the air',
      tags: ['Atmospheric Water', 'Off-Grid Ready', 'No Plumbing', 'Texas Made'],
      featured: false,
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
            PREMIUM PRODUCTS
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.navy,
              marginBottom: 12,
            }}
          >
            Industry-Leading Brands We Trust
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            We partner with the best to bring you reliable, proven solutions for energy and water independence.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div
              key={i}
              className={p.featured ? 'product-featured' : ''}
              style={{
                background: colors.white,
                borderRadius: 16,
                padding: 24,
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
                  gap: 16,
                  marginTop: p.featured ? 8 : 0,
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: colors.blueLight,
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: colors.navy,
                      marginBottom: 4,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 14, color: colors.textLight }}>{p.tagline}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      background: colors.blueLight,
                      color: colors.blue,
                      fontSize: 12,
                      fontWeight: 500,
                      padding: '5px 12px',
                      borderRadius: 6,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.navy,
              marginBottom: 12,
            }}
          >
            Your Neighbors Trust Us
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            We're not just another contractor—we're your partners in creating a more resilient home.
          </p>
        </div>

        <div className="about-layout">
          {/* Trust Badges */}
          <div className="grid-2" style={{ gap: 16 }}>
            {badges.map((b, i) => (
              <div
                key={i}
                style={{
                  background: colors.offWhite,
                  borderRadius: 14,
                  padding: 24,
                  textAlign: 'center',
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 10 }}>{b.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: colors.navy }}>{b.label}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Card */}
          <div
            style={{
              background: colors.navy,
              borderRadius: 16,
              padding: 32,
              marginTop: 24,
            }}
            className="why-us-card"
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: colors.white,
                marginBottom: 24,
              }}
            >
              Why Choose Prometheus?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {whyUs.map((item, i) => (
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

// ============ REVIEWS SECTION ============
function ReviewsSection() {
  const reviews = [
    {
      quote:
        "After Winter Storm Uri, we knew we needed backup power. Prometheus made the whole process easy—from picking the right system to flawless installation. Haven't worried about outages since!",
      author: 'Sarah M.',
      location: 'Fort Worth',
    },
    {
      quote:
        "These guys know their stuff. They upgraded our panel and installed a Powerwall in one day. Professional, clean, and they actually showed up on time. Rare these days!",
      author: 'Mike T.',
      location: 'Arlington',
    },
    {
      quote:
        "The team at Prometheus helped us understand exactly what we needed—no upselling, just honest advice. Our energy bills are down and we have peace of mind during storm season.",
      author: 'Jennifer & David K.',
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
            REAL REVIEWS
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.navy,
              marginBottom: 12,
            }}
          >
            What Texas Homeowners Say
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            Don't just take our word for it—hear from your neighbors.
          </p>
        </div>

        <div className="grid-3-desktop">
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: colors.white,
                borderRadius: 16,
                padding: 28,
                border: `1px solid ${colors.border}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: '#FBBF24', fontSize: 20 }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 16,
                  color: colors.text,
                  lineHeight: 1.7,
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                "{r.quote}"
              </p>
              <div style={{ fontSize: 15, fontWeight: 600, color: colors.navy }}>
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

  return (
    <section id="areas" className="section" style={{ background: colors.navy }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: 32 }}>
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
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.white,
              marginBottom: 12,
            }}
          >
            Proudly Serving the DFW Metroplex
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#94A3B8',
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            Based in Fort Worth, we serve homeowners across the entire Dallas-Fort Worth area—and throughout Texas.
          </p>
          <p
            style={{
              fontSize: 14,
              color: colors.blue,
              marginTop: 12,
              fontWeight: 500,
            }}
          >
            📍 Statewide service available for larger projects
          </p>
        </div>

        <div className="service-tags">
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
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: colors.navy,
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Ready for Energy Independence?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: colors.textLight,
            marginBottom: 32,
            lineHeight: 1.6,
            maxWidth: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Get a free consultation and see how we can protect your home from Texas's unpredictable grid and weather.
        </p>

        <div className="cta-buttons">
          <a href={`tel:${company.phone}`} className="btn-primary">
            📞 Call {company.phone}
          </a>
          <a href={`tel:${company.phone}`} className="btn-secondary">
            Get Your Free Estimate
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
                  fontSize: 24,
                  fontWeight: 700,
                  color: colors.white,
                  textDecoration: 'none',
                  marginBottom: 16,
                }}
              >
                📞 {company.phone}
              </a>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 16 }}>
                <span style={{ fontSize: 13, color: '#64748B' }}>✅ Licensed</span>
                <span style={{ fontSize: 13, color: '#64748B' }}>✅ Insured</span>
                <span style={{ fontSize: 13, color: '#64748B' }}>✅ Certified</span>
              </div>
            </div>

            {/* Desktop Footer Links */}
            <div className="footer-links">
              <div className="footer-links-column">
                <h4>Services</h4>
                <a href="#services">Battery Installation</a>
                <a href="#services">Panel Upgrades</a>
                <a href="#services">Whole-Home Solutions</a>
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
                <a href="#reviews">Reviews</a>
                <a href="#areas">Service Areas</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="footer-bottom"
            style={{
              fontSize: 13,
              color: '#475569',
              borderTop: '1px solid #2D3748',
              paddingTop: 24,
              marginTop: 32,
            }}
          >
            <span>© {new Date().getFullYear()} Prometheus Power Solutions. All rights reserved.</span>
            <span style={{ fontSize: 12, color: '#64748B' }}>
              Serving Fort Worth, Dallas, and all of Texas
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
