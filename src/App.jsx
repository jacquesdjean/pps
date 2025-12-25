import React, { useEffect, useState } from 'react';
import './styles.css';

// Responsive hook for detecting screen size
const useWindowSize = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 600);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    isMobile: width < 600,
    isTablet: width >= 600 && width < 1024,
    isDesktop: width >= 1024,
  };
};

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
const Section = ({ children, bg = colors.white, id }) => {
  const { isMobile, isTablet } = useWindowSize();
  return (
    <section
      id={id}
      style={{
        background: bg,
        padding: isMobile ? '48px 20px' : isTablet ? '80px 32px' : '100px 40px',
      }}
    >
      <div style={{ maxWidth: isMobile ? 600 : isTablet ? 900 : 1140, margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
};

// Reusable Section Header
const SectionHeader = ({ label, title, subtitle, align = 'center' }) => {
  const { isMobile, isTablet } = useWindowSize();
  return (
    <div style={{ textAlign: align, marginBottom: isMobile ? 28 : 36 }}>
      {label && (
        <div style={{
          fontSize: isMobile ? 12 : 13,
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
        fontSize: isMobile ? 26 : isTablet ? 32 : 38,
        fontWeight: 700,
        color: colors.navy,
        marginBottom: subtitle ? 12 : 0,
        lineHeight: 1.2,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: isMobile ? 15 : 17,
          color: colors.textLight,
          lineHeight: 1.6,
          maxWidth: 600,
          margin: align === 'center' ? '0 auto' : 0,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Primary Button
const PrimaryButton = ({ children, href, onClick, fullWidth = true, style = {} }) => (
  <a
    href={href}
    onClick={onClick}
    style={{
      background: 'linear-gradient(180deg, #E8862D 0%, #E8762D 100%)',
      boxShadow: '0 2px 8px rgba(232, 118, 45, 0.3)',
      color: colors.white,
      padding: '16px 28px',
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 15,
      width: fullWidth ? '100%' : 'auto',
      textAlign: 'center',
      textDecoration: 'none',
      display: fullWidth ? 'block' : 'inline-block',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      ...style,
    }}
  >
    {children}
  </a>
);

// Secondary Button (outline)
const SecondaryButton = ({ children, href, fullWidth = true, style = {} }) => (
  <a
    href={href}
    style={{
      background: colors.white,
      border: `2px solid ${colors.blue}`,
      color: colors.blue,
      padding: '14px 28px',
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 15,
      width: fullWidth ? '100%' : 'auto',
      textAlign: 'center',
      textDecoration: 'none',
      display: fullWidth ? 'block' : 'inline-block',
      transition: 'background 0.2s, color 0.2s',
      cursor: 'pointer',
      ...style,
    }}
  >
    {children}
  </a>
);

// Card component
const Card = ({ children, featured = false, badge = null, badgeColor = colors.blue, style = {} }) => {
  const { isMobile, isTablet } = useWindowSize();
  const basePadding = isMobile ? '20px 24px' : isTablet ? '24px 28px' : '28px 32px';
  return (
    <div
      className="card"
      style={{
        background: colors.white,
        border: featured ? `2px solid ${colors.blue}` : `1px solid ${colors.border}`,
        borderRadius: 14,
        padding: basePadding,
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
};

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
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const navItems = ['Services', 'Products', 'About', 'Reviews'];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colors.white,
        borderBottom: `1px solid ${colors.border}`,
        padding: isMobile ? '12px 20px' : '14px 32px',
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? 600 : isTablet ? 900 : 1140,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img
            src="/logo.png"
            alt="Prometheus Power Solutions"
            style={{
              width: isMobile ? 44 : 52,
              height: isMobile ? 44 : 52,
              objectFit: 'contain',
            }}
          />
          {!isMobile && (
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: colors.navy, lineHeight: 1.2 }}>
                Prometheus Power
              </div>
              <div style={{ fontSize: 11, color: colors.textLight, fontWeight: 500 }}>
                Fort Worth, TX
              </div>
            </div>
          )}
        </div>

        {/* Navigation Links - Tablet & Desktop */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: isDesktop ? 32 : 24 }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: colors.text,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}

        {/* Call Us Button */}
        <a
          href={`tel:${company.phoneRaw}`}
          style={{
            background: 'linear-gradient(180deg, #E8862D 0%, #E8762D 100%)',
            color: colors.white,
            padding: isDesktop ? '10px 20px' : '10px 16px',
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
          📞 {isDesktop ? company.phone : 'Call Us'}
        </a>
      </div>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  const stats = [
    { num: '500+', label: 'Installations' },
    { num: '10yr', label: 'Warranty' },
    { num: '5.0★', label: 'Rating' },
  ];

  const HeroContent = () => (
    <>
      {/* Badge */}
      <div
        style={{
          display: 'inline-block',
          background: colors.successLight,
          color: colors.success,
          fontSize: isMobile ? 12 : 13,
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
          fontSize: isMobile ? 28 : isTablet ? 42 : 52,
          fontWeight: 800,
          color: colors.navy,
          lineHeight: 1.15,
          marginBottom: isMobile ? 14 : 20,
        }}
      >
        Keep Your Home Powered When the Grid Goes Down
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: isMobile ? 16 : 19,
          color: colors.textLight,
          lineHeight: 1.6,
          marginBottom: isMobile ? 28 : 32,
          maxWidth: isDesktop ? 520 : 480,
        }}
      >
        Professional battery installation, solar integration, and water generation systems for Fort Worth homes. Never worry about outages again.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          gap: 12,
          marginBottom: isDesktop ? 0 : 32,
          justifyContent: isDesktop ? 'flex-start' : 'center',
        }}
      >
        <PrimaryButton href={`tel:${company.phoneRaw}`} fullWidth={!isDesktop}>
          Get Your Free Estimate
        </PrimaryButton>
        <SecondaryButton href={`tel:${company.phoneRaw}`} fullWidth={!isDesktop}>
          📞 Call {company.phone}
        </SecondaryButton>
      </div>
    </>
  );

  const TrustCard = () => (
    <Card style={{ padding: isMobile ? 20 : 28 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: isMobile ? 8 : 16,
          textAlign: 'center',
        }}
      >
        {stats.map((stat, i) => (
          <div key={i}>
            <div style={{ fontSize: isMobile ? 22 : isTablet ? 26 : 30, fontWeight: 700, color: colors.blue }}>
              {stat.num}
            </div>
            <div style={{ fontSize: isMobile ? 11 : 13, color: colors.textLight, marginTop: 2 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section
      style={{
        background: `linear-gradient(180deg, ${colors.blueLight} 0%, ${colors.white} 100%)`,
        padding: isMobile ? '40px 20px 48px' : isTablet ? '60px 32px 80px' : '80px 40px 100px',
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? 600 : isTablet ? 900 : 1140,
          margin: '0 auto',
        }}
      >
        {isDesktop ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <HeroContent />
            </div>
            <div>
              <TrustCard />
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <HeroContent />
            <TrustCard />
          </div>
        )}
      </div>
    </section>
  );
}

// ============ PROBLEM SECTION ============
function ProblemSection() {
  const { isMobile } = useWindowSize();
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
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 12 : 24,
        }}
      >
        {problems.map((p, i) => (
          <Card key={i} style={{ textAlign: 'center', padding: isMobile ? 16 : 24 }}>
            <div style={{ fontSize: isMobile ? 28 : 32, marginBottom: 8 }}>{p.icon}</div>
            <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 600, color: colors.navy, marginBottom: 4 }}>
              {p.title}
            </div>
            <div style={{ fontSize: isMobile ? 13 : 14, color: colors.textLight, lineHeight: 1.4 }}>
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
  const { isMobile } = useWindowSize();
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

  // Service card component that adapts layout based on screen size
  const ServiceCard = ({ service }) => (
    <Card style={{ padding: isMobile ? 16 : 24 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          alignItems: isMobile ? 'flex-start' : 'center',
          textAlign: isMobile ? 'left' : 'center',
          gap: isMobile ? 14 : 16,
        }}
      >
        <div
          style={{
            width: isMobile ? 48 : 56,
            height: isMobile ? 48 : 56,
            background: colors.blueLight,
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isMobile ? 22 : 28,
            flexShrink: 0,
          }}
        >
          {service.icon}
        </div>
        <div>
          <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 600, color: colors.navy, marginBottom: 4 }}>
            {service.title}
          </h3>
          <p style={{ fontSize: isMobile ? 14 : 15, color: colors.textLight, lineHeight: 1.5 }}>
            {service.desc}
          </p>
        </div>
      </div>
    </Card>
  );

  return (
    <Section bg={colors.white} id="services">
      <SectionHeader
        label="WHAT WE DO"
        title="Our Services"
      />

      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      )}
    </Section>
  );
}

// ============ PRODUCTS SECTION ============
function ProductsSection() {
  const { isMobile, isTablet } = useWindowSize();

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

  const ProductCard = ({ product }) => (
    <Card
      featured={product.featured}
      badge={product.badge}
      badgeColor={product.badgeColor}
      style={{ paddingTop: product.badge ? 28 : undefined }}
    >
      <h3 style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700, color: colors.navy, marginBottom: 4 }}>
        {product.name}
      </h3>
      <div style={{ fontSize: isMobile ? 14 : 15, color: colors.blue, fontWeight: 500, marginBottom: 10 }}>
        {product.tagline}
      </div>
      <p style={{ fontSize: isMobile ? 14 : 15, color: colors.textLight, lineHeight: 1.6, marginBottom: 14 }}>
        {product.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {product.tags.map((tag, j) => (
          <Tag key={j}>{tag}</Tag>
        ))}
      </div>
      <ProductLink href={product.link}>Learn more</ProductLink>
    </Card>
  );

  const OtherCard = () => (
    <Card style={{ textAlign: 'center', padding: isMobile ? 20 : 28 }}>
      <div style={{ fontSize: isMobile ? 15 : 17, fontWeight: 600, color: colors.navy, marginBottom: 8 }}>
        Need something else?
      </div>
      <p style={{ fontSize: isMobile ? 14 : 15, color: colors.textLight, lineHeight: 1.5, marginBottom: 12 }}>
        We install other battery systems by request—EG4, EcoFlow, and more. Tell us what you need.
      </p>
      <a
        href={`tel:${company.phoneRaw}`}
        style={{
          color: colors.blue,
          fontWeight: 600,
          fontSize: isMobile ? 14 : 15,
          textDecoration: 'none',
        }}
      >
        Contact us →
      </a>
    </Card>
  );

  const featuredProduct = products.find((p) => p.featured);
  const otherProducts = products.filter((p) => !p.featured);

  return (
    <Section bg={colors.offWhite} id="products">
      <SectionHeader
        label="PRODUCTS WE INSTALL"
        title="Quality Brands We Trust"
      />

      {isMobile ? (
        // Mobile: Stacked full-width cards
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
          <OtherCard />
        </div>
      ) : (
        // Tablet/Desktop: Featured full-width, others in 2x2 grid
        <div>
          {/* Featured product - full width */}
          <ProductCard product={featuredProduct} />

          {/* Other products - 2x2 grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 20,
              marginTop: 20,
            }}
          >
            {otherProducts.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
            <OtherCard />
          </div>
        </div>
      )}
    </Section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  const { isMobile, isDesktop } = useWindowSize();

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

  const TrustBadges = () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: isMobile ? 12 : 16,
        marginBottom: isMobile ? 20 : 0,
      }}
    >
      {badges.map((b, i) => (
        <Card key={i} style={{ textAlign: 'center', padding: isMobile ? 16 : 20 }}>
          <div style={{ fontSize: isMobile ? 28 : 32, marginBottom: 6 }}>{b.icon}</div>
          <div style={{ fontSize: isMobile ? 13 : 14, fontWeight: 600, color: colors.navy }}>{b.label}</div>
        </Card>
      ))}
    </div>
  );

  const WhyUsCard = () => (
    <div
      style={{
        background: colors.navy,
        borderRadius: 14,
        padding: isMobile ? 24 : 32,
        height: isMobile ? 'auto' : '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: colors.white, marginBottom: 20 }}>
        Why Choose Us
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 12 : 16 }}>
        {whyUs.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ color: colors.success, fontSize: 18, marginTop: 1 }}>✓</span>
            <span style={{ fontSize: isMobile ? 14 : 16, color: '#E2E8F0', lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Section bg={colors.white} id="about">
      <SectionHeader
        title="Your Neighbors, Not a Call Center"
        subtitle="We're a Fort Worth company, owned and operated by Texans who understand what it means to lose power in the summer heat or during a winter freeze."
      />

      {isMobile ? (
        <>
          <TrustBadges />
          <WhyUsCard />
        </>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: isDesktop ? 48 : 32,
            alignItems: 'stretch',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TrustBadges />
          </div>
          <WhyUsCard />
        </div>
      )}
    </Section>
  );
}

// ============ REVIEWS SECTION ============
function ReviewsSection() {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

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

  const ReviewCard = ({ review }) => (
    <Card style={{ padding: isMobile ? 20 : 24 }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} style={{ color: '#FBBF24', fontSize: isMobile ? 16 : 18 }}>★</span>
        ))}
      </div>
      <p style={{ fontSize: isMobile ? 14 : 15, color: colors.text, lineHeight: 1.6, marginBottom: 14 }}>
        "{review.quote}"
      </p>
      <div style={{ fontSize: isMobile ? 14 : 15 }}>
        <span style={{ fontWeight: 600, color: colors.navy }}>{review.author}</span>
        <span style={{ color: colors.textLight }}> • {review.location}</span>
      </div>
    </Card>
  );

  return (
    <Section bg={colors.offWhite} id="reviews">
      <SectionHeader title="What Customers Say" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: isMobile ? 14 : 24,
        }}
      >
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </Section>
  );
}

// ============ SERVICE AREA SECTION ============
function ServiceAreaSection() {
  const { isMobile, isDesktop } = useWindowSize();

  const HeadlineContent = () => (
    <>
      <h2
        style={{
          fontSize: isMobile ? 24 : isDesktop ? 32 : 28,
          fontWeight: 700,
          color: colors.white,
          marginBottom: 10,
        }}
      >
        Serving the DFW Metroplex
      </h2>
      <p
        style={{
          fontSize: isMobile ? 14 : 16,
          color: '#94A3B8',
          marginBottom: isDesktop ? 0 : 24,
          lineHeight: 1.5,
        }}
      >
        Based in Fort Worth, proudly serving these communities and beyond.
      </p>
    </>
  );

  const CityTags = () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: isMobile ? 8 : 10,
        justifyContent: isDesktop ? 'flex-start' : 'center',
      }}
    >
      {company.serviceArea.map((city, i) => (
        <span
          key={i}
          style={{
            background: city === 'Fort Worth' ? colors.blue : 'rgba(255,255,255,0.1)',
            color: colors.white,
            fontSize: isMobile ? 13 : 14,
            fontWeight: city === 'Fort Worth' ? 600 : 500,
            padding: isMobile ? '8px 14px' : '10px 18px',
            borderRadius: 20,
            border: city === 'Fort Worth' ? 'none' : '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {city}
        </span>
      ))}
    </div>
  );

  return (
    <Section bg={colors.navy} id="areas">
      {isDesktop ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <HeadlineContent />
          </div>
          <div>
            <CityTags />
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <HeadlineContent />
          <CityTags />
        </div>
      )}
    </Section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  return (
    <Section bg={colors.blueLight}>
      <div style={{ textAlign: 'center', maxWidth: isDesktop ? 700 : undefined, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: isMobile ? 26 : isTablet ? 32 : 38,
            fontWeight: 700,
            color: colors.navy,
            marginBottom: 12,
          }}
        >
          Ready to Stop Worrying?
        </h2>
        <p
          style={{
            fontSize: isMobile ? 15 : 17,
            color: colors.textLight,
            marginBottom: isMobile ? 28 : 36,
            lineHeight: 1.5,
          }}
        >
          Get a free, no-pressure estimate for your home. We'll assess your needs and design a system that fits your budget.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 12,
            justifyContent: 'center',
          }}
        >
          <PrimaryButton href={`tel:${company.phoneRaw}`} fullWidth={isMobile}>
            Get Your Free Estimate
          </PrimaryButton>
          <SecondaryButton href={`tel:${company.phoneRaw}`} fullWidth={isMobile}>
            📞 Call {company.phone}
          </SecondaryButton>
        </div>
      </div>
    </Section>
  );
}

// ============ FOOTER ============
function Footer() {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  const services = ['Battery Installation', 'Solar Integration', 'Water Systems', 'Smart Panels'];
  const products = ['FranklinWH', 'SPAN Panel', 'Aquaria', 'Tesla Powerwall'];

  const LogoSection = () => (
    <div style={{ marginBottom: isMobile ? 24 : 0 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'flex-start',
          gap: 12,
          marginBottom: 16,
        }}
      >
        <img
          src="/logo.png"
          alt="Prometheus Power Solutions"
          style={{
            width: 52,
            height: 52,
            objectFit: 'contain',
          }}
        />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: colors.white }}>
            Prometheus Power
          </div>
          <div style={{ fontSize: 12, color: '#94A3B8' }}>
            Fort Worth, TX
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: 13,
          color: '#94A3B8',
          lineHeight: 1.6,
          marginBottom: 16,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        Professional battery and solar solutions for Texas homes.
      </p>
      <div style={{ fontSize: 12, color: '#64748B', textAlign: isMobile ? 'center' : 'left' }}>
        {company.license}
      </div>
    </div>
  );

  const FooterColumn = ({ title, items }) => (
    <div style={{ marginBottom: isMobile ? 24 : 0 }}>
      <h4
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: colors.white,
          marginBottom: 16,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        {title}
      </h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: isMobile ? 'center' : 'flex-start',
        }}
      >
        {items.map((item, i) => (
          <span key={i} style={{ fontSize: 13, color: '#94A3B8' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  const ContactColumn = () => (
    <div>
      <h4
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: colors.white,
          marginBottom: 16,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        Contact
      </h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: isMobile ? 'center' : 'flex-start',
        }}
      >
        <a
          href={`tel:${company.phoneRaw}`}
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: colors.orange,
            textDecoration: 'none',
          }}
        >
          {company.phone}
        </a>
        <span style={{ fontSize: 13, color: '#94A3B8' }}>Fort Worth, TX</span>
      </div>
    </div>
  );

  return (
    <footer
      style={{
        background: colors.navy,
        padding: isMobile ? '48px 20px 32px' : '64px 40px 40px',
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? 600 : isTablet ? 900 : 1140,
          margin: '0 auto',
        }}
      >
        {isMobile ? (
          // Mobile: Centered, stacked layout
          <div style={{ textAlign: 'center' }}>
            <LogoSection />
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
          </div>
        ) : (
          // Tablet/Desktop: 4-column grid
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
              gap: isDesktop ? 48 : 32,
              marginBottom: 40,
            }}
          >
            <LogoSection />
            <FooterColumn title="Services" items={services} />
            <FooterColumn title="Products" items={products} />
            <ContactColumn />
          </div>
        )}

        {/* Copyright */}
        <div
          style={{
            fontSize: 12,
            color: '#475569',
            borderTop: '1px solid #2D3748',
            paddingTop: 20,
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Prometheus Power Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default App;
