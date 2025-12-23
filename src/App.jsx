import React, { useEffect } from 'react';

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

  const baseStyles = {
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
    color: colors.text,
    lineHeight: 1.5,
  };

  return (
    <div style={baseStyles}>
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
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colors.white,
        borderBottom: `1px solid ${colors.border}`,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            width: 36,
            height: 36,
            background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.blue} 100%)`,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
          }}
        >
          ⚡
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: colors.navy, lineHeight: 1.2 }}>
            Prometheus
          </div>
          <div style={{ fontSize: 10, color: colors.textLight, fontWeight: 500 }}>
            Power Solutions
          </div>
        </div>
      </div>
      <a
        href={`tel:${company.phone}`}
        style={{
          background: `linear-gradient(135deg, #E8862D 0%, ${colors.orange} 100%)`,
          color: colors.white,
          padding: '10px 18px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        📞 Call Now
      </a>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section
      style={{
        background: colors.white,
        padding: '40px 16px 48px',
      }}
    >
      {/* Badge */}
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
        🏆 Fort Worth's Trusted Energy Experts
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: colors.navy,
          lineHeight: 1.15,
          marginBottom: 16,
        }}
      >
        Keep Your Home Powered & Protected—No Matter What Texas Throws At You
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: 16,
          color: colors.textLight,
          lineHeight: 1.6,
          marginBottom: 24,
        }}
      >
        From grid outages to water worries, we help Texas homeowners take control with premium battery systems and whole-home solutions. Licensed, certified, and here for you.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
        <a
          href={`tel:${company.phone}`}
          style={{
            background: `linear-gradient(135deg, #E8862D 0%, ${colors.orange} 100%)`,
            color: colors.white,
            padding: '16px 24px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            textAlign: 'center',
            minHeight: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Get Your Free Estimate
        </a>
        <a
          href="#services"
          style={{
            background: colors.white,
            color: colors.blue,
            padding: '16px 24px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            textAlign: 'center',
            border: `2px solid ${colors.blue}`,
            minHeight: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          See Our Solutions
        </a>
      </div>

      {/* Trust Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 8,
          background: colors.white,
          padding: 16,
          borderRadius: 12,
          border: `1px solid ${colors.border}`,
        }}
      >
        {[
          { num: '500+', label: 'Installs' },
          { num: '5+ Yrs', label: 'Experience' },
          { num: '5★', label: 'Rated' },
        ].map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: colors.blue }}>{item.num}</div>
            <div style={{ fontSize: 11, color: colors.textLight }}>{item.label}</div>
          </div>
        ))}
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
    <section style={{ background: colors.offWhite, padding: '48px 16px' }}>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: colors.navy,
          textAlign: 'center',
          marginBottom: 8,
        }}
      >
        Tired of Feeling Powerless?
      </h2>
      <p
        style={{
          fontSize: 15,
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: 28,
          lineHeight: 1.6,
        }}
      >
        Texas homeowners face real challenges every day
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
        }}
      >
        {problems.map((p, i) => (
          <div
            key={i}
            style={{
              background: colors.white,
              borderRadius: 12,
              padding: 16,
              textAlign: 'center',
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>{p.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: colors.navy, marginBottom: 4 }}>
              {p.title}
            </div>
            <div style={{ fontSize: 12, color: colors.textLight, lineHeight: 1.4 }}>{p.desc}</div>
          </div>
        ))}
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
      desc: 'Store solar energy or grid power for when you need it most. Stay powered during outages.',
    },
    {
      icon: '⚡',
      title: 'Main Panel Upgrades',
      desc: 'Modernize your electrical system to handle today\'s demands—EVs, batteries, and more.',
    },
    {
      icon: '🏠',
      title: 'Whole-Home Solutions',
      desc: 'Complete energy and water independence packages designed for Texas homes.',
    },
  ];

  return (
    <section id="services" style={{ background: colors.white, padding: '48px 16px' }}>
      <div
        style={{
          display: 'inline-block',
          background: colors.blueLight,
          color: colors.blue,
          fontSize: 11,
          fontWeight: 600,
          padding: '5px 10px',
          borderRadius: 5,
          marginBottom: 12,
        }}
      >
        WHAT WE DO
      </div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: colors.navy,
          marginBottom: 8,
        }}
      >
        Expert Services for Your Home
      </h2>
      <p
        style={{
          fontSize: 15,
          color: colors.textLight,
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        From batteries to panel upgrades, we handle it all with care and expertise.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {services.map((s, i) => (
          <div
            key={i}
            style={{
              background: colors.offWhite,
              borderRadius: 14,
              padding: 20,
              display: 'flex',
              gap: 16,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: colors.blueLight,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                flexShrink: 0,
              }}
            >
              {s.icon}
            </div>
            <div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: colors.navy,
                  marginBottom: 4,
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          </div>
        ))}
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
    <section style={{ background: colors.blueLight, padding: '48px 16px' }}>
      <div
        style={{
          display: 'inline-block',
          background: colors.white,
          color: colors.blue,
          fontSize: 11,
          fontWeight: 600,
          padding: '5px 10px',
          borderRadius: 5,
          marginBottom: 12,
        }}
      >
        PREMIUM PRODUCTS
      </div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: colors.navy,
          marginBottom: 8,
        }}
      >
        Industry-Leading Brands We Trust
      </h2>
      <p
        style={{
          fontSize: 15,
          color: colors.textLight,
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        We partner with the best to bring you reliable, proven solutions for energy and water independence.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {products.map((p, i) => (
          <div
            key={i}
            style={{
              background: colors.white,
              borderRadius: 14,
              padding: 20,
              border: p.featured ? `2px solid ${colors.blue}` : `1px solid ${colors.border}`,
              position: 'relative',
            }}
          >
            {p.featured && (
              <div
                style={{
                  position: 'absolute',
                  top: -10,
                  left: 16,
                  background: colors.blue,
                  color: colors.white,
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: 5,
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
                }}
              >
                {p.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: colors.navy,
                    marginBottom: 2,
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: 13, color: colors.textLight }}>{p.tagline}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {p.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{
                    background: colors.blueLight,
                    color: colors.blue,
                    fontSize: 12,
                    fontWeight: 500,
                    padding: '4px 10px',
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
    <section style={{ background: colors.white, padding: '48px 16px' }}>
      <div
        style={{
          display: 'inline-block',
          background: colors.successLight,
          color: colors.success,
          fontSize: 11,
          fontWeight: 600,
          padding: '5px 10px',
          borderRadius: 5,
          marginBottom: 12,
        }}
      >
        WHY PROMETHEUS
      </div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: colors.navy,
          marginBottom: 8,
        }}
      >
        Your Neighbors Trust Us
      </h2>
      <p
        style={{
          fontSize: 15,
          color: colors.textLight,
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        We're not just another contractor—we're your partners in creating a more resilient home.
      </p>

      {/* Trust Badges */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
          marginBottom: 24,
        }}
      >
        {badges.map((b, i) => (
          <div
            key={i}
            style={{
              background: colors.offWhite,
              borderRadius: 10,
              padding: 14,
              textAlign: 'center',
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 6 }}>{b.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.navy }}>{b.label}</div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Card */}
      <div
        style={{
          background: colors.navy,
          borderRadius: 14,
          padding: 24,
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: colors.white,
            marginBottom: 16,
          }}
        >
          Why Choose Prometheus?
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {whyUs.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: colors.success, fontSize: 16 }}>✓</span>
              <span style={{ fontSize: 14, color: '#E2E8F0', lineHeight: 1.5 }}>{item}</span>
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
    <section style={{ background: colors.offWhite, padding: '48px 16px' }}>
      <div
        style={{
          display: 'inline-block',
          background: colors.orangeLight,
          color: colors.orange,
          fontSize: 11,
          fontWeight: 600,
          padding: '5px 10px',
          borderRadius: 5,
          marginBottom: 12,
        }}
      >
        REAL REVIEWS
      </div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: colors.navy,
          marginBottom: 8,
        }}
      >
        What Texas Homeowners Say
      </h2>
      <p
        style={{
          fontSize: 15,
          color: colors.textLight,
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        Don't just take our word for it—hear from your neighbors.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              background: colors.white,
              borderRadius: 14,
              padding: 20,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ color: '#FBBF24', fontSize: 16 }}>
                  ★
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: 15,
                color: colors.text,
                lineHeight: 1.6,
                marginBottom: 14,
              }}
            >
              "{r.quote}"
            </p>
            <div style={{ fontSize: 14, fontWeight: 600, color: colors.navy }}>
              {r.author}
              <span style={{ fontWeight: 400, color: colors.textLight }}> • {r.location}</span>
            </div>
          </div>
        ))}
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
  ];

  return (
    <section style={{ background: colors.navy, padding: '48px 16px' }}>
      <div
        style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.15)',
          color: colors.white,
          fontSize: 11,
          fontWeight: 600,
          padding: '5px 10px',
          borderRadius: 5,
          marginBottom: 12,
        }}
      >
        SERVICE AREA
      </div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: colors.white,
          marginBottom: 8,
        }}
      >
        Proudly Serving the DFW Metroplex
      </h2>
      <p
        style={{
          fontSize: 15,
          color: '#94A3B8',
          marginBottom: 6,
          lineHeight: 1.6,
        }}
      >
        Based in Fort Worth, we serve homeowners across the entire Dallas-Fort Worth area—and throughout Texas.
      </p>
      <p
        style={{
          fontSize: 13,
          color: colors.blue,
          marginBottom: 24,
          fontWeight: 500,
        }}
      >
        📍 Statewide service available for larger projects
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {dfwCities.map((city, i) => (
          <span
            key={i}
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: colors.white,
              fontSize: 13,
              fontWeight: 500,
              padding: '8px 14px',
              borderRadius: 6,
              border: city === 'Fort Worth' ? `1px solid ${colors.blue}` : '1px solid transparent',
            }}
          >
            {city}
          </span>
        ))}
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  return (
    <section style={{ background: colors.blueLight, padding: '48px 16px', textAlign: 'center' }}>
      <h2
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: colors.navy,
          marginBottom: 12,
          lineHeight: 1.2,
        }}
      >
        Ready for Energy Independence?
      </h2>
      <p
        style={{
          fontSize: 15,
          color: colors.textLight,
          marginBottom: 28,
          lineHeight: 1.6,
          maxWidth: 340,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Get a free consultation and see how we can protect your home from Texas's unpredictable grid and weather.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <a
          href={`tel:${company.phone}`}
          style={{
            background: `linear-gradient(135deg, #E8862D 0%, ${colors.orange} 100%)`,
            color: colors.white,
            padding: '16px 24px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            textAlign: 'center',
            minHeight: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          📞 Call {company.phone}
        </a>
        <a
          href={`tel:${company.phone}`}
          style={{
            background: colors.white,
            color: colors.blue,
            padding: '16px 24px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            textAlign: 'center',
            border: `2px solid ${colors.blue}`,
            minHeight: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Get Your Free Estimate
        </a>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer style={{ background: colors.navy, padding: '40px 16px', textAlign: 'center' }}>
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          marginBottom: 16,
        }}
      >
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
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: colors.white }}>
            Prometheus Power Solutions
          </div>
          <div style={{ fontSize: 12, color: '#94A3B8' }}>Fort Worth, Texas</div>
        </div>
      </div>

      {/* Phone */}
      <a
        href={`tel:${company.phone}`}
        style={{
          display: 'inline-block',
          fontSize: 22,
          fontWeight: 700,
          color: colors.white,
          textDecoration: 'none',
          marginBottom: 20,
          padding: '12px 0',
        }}
      >
        📞 {company.phone}
      </a>

      {/* Services */}
      <div style={{ fontSize: 13, color: '#94A3B8', marginBottom: 20, lineHeight: 1.8 }}>
        Battery Installation • Panel Upgrades • Whole-Home Solutions
        <br />
        Tesla Powerwall • SPAN • FranklinWH • Aquaria
      </div>

      {/* Badges */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 24,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: 12, color: '#64748B' }}>✅ Licensed</span>
        <span style={{ fontSize: 12, color: '#64748B' }}>✅ Insured</span>
        <span style={{ fontSize: 12, color: '#64748B' }}>✅ Certified</span>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: 12, color: '#475569', borderTop: '1px solid #2D3748', paddingTop: 20 }}>
        © {new Date().getFullYear()} Prometheus Power Solutions. All rights reserved.
        <br />
        <span style={{ fontSize: 11, color: '#64748B' }}>
          Serving Fort Worth, Dallas, and all of Texas
        </span>
      </div>
    </footer>
  );
}

export default App;
