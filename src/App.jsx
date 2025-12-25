import React, { useEffect, useState } from 'react';
import './styles.css';

// Color palette
const colors = {
  blue: '#1E6BB8',
  blueLight: '#E8F2FC',
  blueDark: '#14507D',
  navy: '#1A2B3C',
  orange: '#E8762D',
  orangeLight: '#FEF3EB',
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
  phone: '(817) 555-0123',
  phoneRaw: '8175550123',
  location: 'Fort Worth, TX',
  license: 'TECL #XXXXX',
  serviceArea: [
    'Fort Worth',
    'Arlington',
    'Southlake',
    'Keller',
    'Grapevine',
    'Colleyville',
    'Weatherford',
    'Burleson',
    'Mansfield',
  ],
};

// Reusable Section component
const Section = ({ children, bg = colors.white, id }) => (
  <section id={id} style={{ background: bg, padding: '48px 20px' }}>
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      {children}
    </div>
  </section>
);

// Reusable Section Header
const SectionHeader = ({ label, title, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: 28 }}>
    {label && (
      <div style={{
        fontSize: 12,
        fontWeight: 600,
        color: colors.blue,
        letterSpacing: '0.05em',
        marginBottom: 8,
        textTransform: 'uppercase',
      }}>
        {label}
      </div>
    )}
    <h2 style={{
      fontSize: 26,
      fontWeight: 700,
      color: colors.navy,
      marginBottom: subtitle ? 10 : 0,
      lineHeight: 1.2,
    }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6 }}>
        {subtitle}
      </p>
    )}
  </div>
);

// Primary Button
const PrimaryButton = ({ children, href, onClick, style = {} }) => (
  <a
    href={href}
    onClick={onClick}
    style={{
      background: 'linear-gradient(180deg, #E8862D 0%, #E8762D 100%)',
      boxShadow: '0 2px 8px rgba(232, 118, 45, 0.3)',
      color: colors.white,
      padding: '16px 24px',
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 15,
      width: '100%',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'block',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      ...style,
    }}
  >
    {children}
  </a>
);

// Secondary Button (outline)
const SecondaryButton = ({ children, href, style = {} }) => (
  <a
    href={href}
    style={{
      background: colors.white,
      border: `2px solid ${colors.blue}`,
      color: colors.blue,
      padding: '14px 24px',
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 15,
      width: '100%',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'block',
      transition: 'background 0.2s, color 0.2s',
      cursor: 'pointer',
      ...style,
    }}
  >
    {children}
  </a>
);

// Card component
const Card = ({ children, featured = false, badge = null, badgeColor = colors.blue, style = {} }) => (
  <div
    style={{
      background: colors.white,
      border: featured ? `2px solid ${colors.blue}` : `1px solid ${colors.border}`,
      borderRadius: 14,
      padding: '20px 24px',
      position: 'relative',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      ...style,
    }}
  >
    {badge && (
      <div
        style={{
          position: 'absolute',
          top: -11,
          left: 20,
          background: badgeColor,
          color: colors.white,
          fontSize: 11,
          fontWeight: 700,
          padding: '5px 12px',
          borderRadius: 6,
        }}
      >
        {badge}
      </div>
    )}
    {children}
  </div>
);

// Feature Tag
const Tag = ({ children }) => (
  <span
    style={{
      background: colors.blueLight,
      color: colors.blue,
      fontSize: 12,
      fontWeight: 500,
      padding: '5px 10px',
      borderRadius: 6,
    }}
  >
    {children}
  </span>
);

// Product Link
const ProductLink = ({ href, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: colors.blue,
        fontWeight: 600,
        fontSize: 13,
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: hovered ? 8 : 4,
        transition: 'gap 0.2s',
      }}
    >
      {children} <span>→</span>
    </a>
  );
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
    <div style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
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
        padding: '12px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
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
            <div style={{ fontSize: 15, fontWeight: 700, color: colors.navy, lineHeight: 1.2 }}>
              Prometheus Power
            </div>
            <div style={{ fontSize: 11, color: colors.textLight, fontWeight: 500 }}>
              Fort Worth, TX
            </div>
          </div>
        </div>

        {/* Call Us Button */}
        <a
          href={`tel:${company.phoneRaw}`}
          style={{
            background: 'linear-gradient(180deg, #E8862D 0%, #E8762D 100%)',
            color: colors.white,
            padding: '10px 16px',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 13,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            minHeight: 44,
          }}
        >
          📞 Call Us
        </a>
      </div>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, ${colors.blueLight} 0%, ${colors.white} 100%)`,
        padding: '40px 20px 48px',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-block',
            background: colors.successLight,
            color: colors.success,
            fontSize: 12,
            fontWeight: 600,
            padding: '6px 14px',
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          🛡️ Licensed & Insured in Texas
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: colors.navy,
            lineHeight: 1.15,
            marginBottom: 14,
          }}
        >
          Keep Your Home Powered When the Grid Goes Down
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: colors.textLight,
            lineHeight: 1.6,
            marginBottom: 28,
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Professional battery installation, solar integration, and water generation systems for Fort Worth homes. Never worry about outages again.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          <PrimaryButton href={`tel:${company.phoneRaw}`}>
            Get Your Free Estimate
          </PrimaryButton>
          <SecondaryButton href={`tel:${company.phoneRaw}`}>
            📞 Call {company.phone}
          </SecondaryButton>
        </div>

        {/* Trust Stats Card */}
        <Card style={{ padding: 20 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 8,
              textAlign: 'center',
            }}
          >
            {[
              { num: '500+', label: 'Installations' },
              { num: '10yr', label: 'Warranty' },
              { num: '5.0★', label: 'Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 22, fontWeight: 700, color: colors.blue }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: 11, color: colors.textLight, marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

// ============ PROBLEM SECTION ============
function ProblemSection() {
  const problems = [
    { icon: '❄️', title: 'Winter Storms', desc: 'Remember February 2021?' },
    { icon: '🌡️', title: 'Summer Heat', desc: 'Rolling blackouts when you need AC most' },
    { icon: '🏥', title: 'Medical Needs', desc: 'Keep critical equipment running' },
    { icon: '💧', title: 'Water Security', desc: 'Clean water even during boil notices' },
  ];

  return (
    <Section bg={colors.offWhite}>
      <SectionHeader
        title="Texas Weather Is Unpredictable"
        subtitle="From ERCOT failures to summer heat waves, the grid can't always keep up. Be prepared with backup power and clean water."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
        }}
      >
        {problems.map((p, i) => (
          <Card key={i} style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{p.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: colors.navy, marginBottom: 4 }}>
              {p.title}
            </div>
            <div style={{ fontSize: 13, color: colors.textLight, lineHeight: 1.4 }}>
              {p.desc}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ============ SERVICES SECTION ============
function ServicesSection() {
  const services = [
    {
      icon: '🔋',
      title: 'Home Battery Installation',
      desc: 'Store power for outages and reduce peak-hour energy costs.',
    },
    {
      icon: '☀️',
      title: 'Solar + Battery Integration',
      desc: 'Maximize your solar investment with intelligent storage.',
    },
    {
      icon: '💧',
      title: 'Water Generation Systems',
      desc: 'Atmospheric water generators for clean drinking water.',
    },
    {
      icon: '📱',
      title: 'Smart Panel Upgrades',
      desc: 'Circuit-level control and monitoring with SPAN panels.',
    },
  ];

  return (
    <Section bg={colors.white} id="services">
      <SectionHeader
        label="WHAT WE DO"
        title="Our Services"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {services.map((s, i) => (
          <Card key={i} style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: colors.blueLight,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: colors.navy, marginBottom: 4 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ============ PRODUCTS SECTION ============
function ProductsSection() {
  const products = [
    {
      name: 'FranklinWH',
      tagline: 'aPower 2 & aGate',
      desc: '15kWh battery with integrated inverter. The aGate hub intelligently manages your solar, grid, and battery for optimal efficiency.',
      tags: ['15kWh per unit', 'Stackable', 'Integrated inverter', 'Smart app'],
      link: 'https://www.franklinwh.com',
      featured: true,
      badge: '⭐ OUR TOP PICK',
      badgeColor: colors.blue,
    },
    {
      name: 'SPAN Panel',
      tagline: 'Smart Electrical Panel',
      desc: 'Replace your breaker panel with intelligent circuit-level control. Monitor and manage every circuit from your phone.',
      tags: ['Circuit control', 'Energy monitoring', 'Works with any battery', 'App control'],
      link: 'https://www.span.io',
      featured: false,
      badge: '🎛️ SMART PANEL',
      badgeColor: colors.navy,
    },
    {
      name: 'Aquaria Hydropanels',
      tagline: 'Water from Air',
      desc: 'Atmospheric water generators that create clean drinking water from humidity. No plumbing required, solar-powered option available.',
      tags: ['Solar powered', 'No plumbing', 'Emergency ready', 'Low maintenance'],
      link: 'https://www.aquaria.com',
      featured: false,
      badge: '💧 WATER',
      badgeColor: colors.success,
    },
    {
      name: 'Tesla Powerwall',
      tagline: 'Proven Reliability',
      desc: '13.5kWh battery with seamless backup. Storm Watch feature automatically prepares for severe weather.',
      tags: ['13.5kWh', 'Storm Watch', 'Tesla app', 'Proven reliability'],
      link: 'https://www.tesla.com/powerwall',
      featured: false,
      badge: null,
      badgeColor: null,
    },
  ];

  return (
    <Section bg={colors.offWhite} id="products">
      <SectionHeader
        label="PRODUCTS WE INSTALL"
        title="Quality Brands We Trust"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {products.map((p, i) => (
          <Card
            key={i}
            featured={p.featured}
            badge={p.badge}
            badgeColor={p.badgeColor}
            style={{ paddingTop: p.badge ? 28 : 20 }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.navy, marginBottom: 4 }}>
              {p.name}
            </h3>
            <div style={{ fontSize: 14, color: colors.blue, fontWeight: 500, marginBottom: 10 }}>
              {p.tagline}
            </div>
            <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.6, marginBottom: 14 }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
              {p.tags.map((tag, j) => (
                <Tag key={j}>{tag}</Tag>
              ))}
            </div>
            <ProductLink href={p.link}>Learn more</ProductLink>
          </Card>
        ))}

        {/* Other Batteries */}
        <Card style={{ textAlign: 'center', padding: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: colors.navy, marginBottom: 8 }}>
            Need something else?
          </div>
          <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5, marginBottom: 12 }}>
            We install other battery systems by request—EG4, EcoFlow, and more. Tell us what you need.
          </p>
          <a
            href={`tel:${company.phoneRaw}`}
            style={{
              color: colors.blue,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            Contact us →
          </a>
        </Card>
      </div>
    </Section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  const badges = [
    { icon: '🏠', label: 'Locally Owned' },
    { icon: '📋', label: 'Texas Licensed' },
    { icon: '🛡️', label: 'Fully Insured' },
    { icon: '⭐', label: '5-Star Rated' },
  ];

  const whyUs = [
    'Transparent pricing with no hidden fees',
    'Direct communication—not a call center',
    'Manufacturer-certified installers',
    'Support long after your project is complete',
    '10-year workmanship warranty',
  ];

  return (
    <Section bg={colors.white} id="about">
      <SectionHeader
        title="Your Neighbors, Not a Call Center"
        subtitle="We're a Fort Worth company, owned and operated by Texans who understand what it means to lose power in the summer heat or during a winter freeze."
      />

      {/* Trust Badges */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
          marginBottom: 20,
        }}
      >
        {badges.map((b, i) => (
          <Card key={i} style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>{b.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: colors.navy }}>{b.label}</div>
          </Card>
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
        <h3 style={{ fontSize: 18, fontWeight: 700, color: colors.white, marginBottom: 16 }}>
          Why Choose Us
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {whyUs.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: colors.success, fontSize: 16, marginTop: 1 }}>✓</span>
              <span style={{ fontSize: 14, color: '#E2E8F0', lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============ REVIEWS SECTION ============
function ReviewsSection() {
  const reviews = [
    {
      quote: "After the 2021 freeze, we knew we needed backup power. Prometheus made it easy. Professional from start to finish, and now we sleep easy during storms.",
      author: 'Sarah M.',
      location: 'Fort Worth',
    },
    {
      quote: "Great communication throughout the process. They showed up when they said they would and cleaned up after themselves. The FranklinWH system works flawlessly.",
      author: 'Mike T.',
      location: 'Southlake',
    },
    {
      quote: "We have a family member on oxygen, so reliable power isn't optional. Prometheus understood that and designed a system that gives us true peace of mind.",
      author: 'Jennifer K.',
      location: 'Keller',
    },
  ];

  return (
    <Section bg={colors.offWhite} id="reviews">
      <SectionHeader title="What Customers Say" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {reviews.map((r, i) => (
          <Card key={i} style={{ padding: 20 }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ color: '#FBBF24', fontSize: 16 }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: 14, color: colors.text, lineHeight: 1.6, marginBottom: 14 }}>
              "{r.quote}"
            </p>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontWeight: 600, color: colors.navy }}>{r.author}</span>
              <span style={{ color: colors.textLight }}> • {r.location}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ============ SERVICE AREA SECTION ============
function ServiceAreaSection() {
  return (
    <Section bg={colors.navy} id="areas">
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.white, marginBottom: 10 }}>
          Serving the DFW Metroplex
        </h2>
        <p style={{ fontSize: 14, color: '#94A3B8', marginBottom: 24, lineHeight: 1.5 }}>
          Based in Fort Worth, proudly serving these communities and beyond.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            justifyContent: 'center',
          }}
        >
          {company.serviceArea.map((city, i) => (
            <span
              key={i}
              style={{
                background: city === 'Fort Worth' ? colors.blue : 'rgba(255,255,255,0.1)',
                color: colors.white,
                fontSize: 13,
                fontWeight: city === 'Fort Worth' ? 600 : 500,
                padding: '8px 14px',
                borderRadius: 20,
                border: city === 'Fort Worth' ? 'none' : '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  return (
    <Section bg={colors.blueLight}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: colors.navy, marginBottom: 12 }}>
          Ready to Stop Worrying?
        </h2>
        <p style={{ fontSize: 15, color: colors.textLight, marginBottom: 28, lineHeight: 1.5 }}>
          Get a free, no-pressure estimate for your home. We'll assess your needs and design a system that fits your budget.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <PrimaryButton href={`tel:${company.phoneRaw}`}>
            Get Your Free Estimate
          </PrimaryButton>
          <SecondaryButton href={`tel:${company.phoneRaw}`}>
            📞 Call {company.phone}
          </SecondaryButton>
        </div>
      </div>
    </Section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer style={{ background: colors.navy, padding: '48px 20px 32px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.blue} 100%)`,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
            }}
          >
            ⚡
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: colors.white }}>
              Prometheus Power Solutions
            </div>
            <div style={{ fontSize: 12, color: '#94A3B8' }}>
              Fort Worth, TX
            </div>
          </div>
        </div>

        {/* License */}
        <div style={{ fontSize: 12, color: '#64748B', marginBottom: 20 }}>
          Texas Electrical Contractor License: {company.license}
        </div>

        {/* Phone */}
        <a
          href={`tel:${company.phoneRaw}`}
          style={{
            display: 'inline-block',
            fontSize: 24,
            fontWeight: 700,
            color: colors.orange,
            textDecoration: 'none',
            marginBottom: 24,
          }}
        >
          {company.phone}
        </a>

        {/* Copyright */}
        <div
          style={{
            fontSize: 12,
            color: '#475569',
            borderTop: '1px solid #2D3748',
            paddingTop: 20,
          }}
        >
          © {new Date().getFullYear()} Prometheus Power Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default App;
