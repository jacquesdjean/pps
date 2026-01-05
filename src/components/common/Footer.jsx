import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTheme } from '../../hooks/useTheme';
import { company, products } from '../../theme/constants';

const Footer = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const { colors } = useTheme();

  const services = [
    'Battery Installation',
    'Solar Integration',
    'Water Systems',
    'Smart Panels',
  ];

  const productList = [
    'FranklinWH',
    'SPAN Panel',
    'Aquaria',
    'Tesla Powerwall',
  ];

  const LogoSection = () => (
    <div style={{ marginBottom: isMobile ? 24 : 0 }}>
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'flex-start',
          gap: 12,
          marginBottom: 16,
          textDecoration: 'none',
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
          <div style={{ fontSize: 17, fontWeight: 700, color: colors.textPrimary }}>
            Prometheus Power
          </div>
          <div style={{ fontSize: 12, color: colors.textLight }}>
            {company.location}
          </div>
        </div>
      </Link>
      <p
        style={{
          fontSize: 13,
          color: colors.textSecondary,
          lineHeight: 1.6,
          marginBottom: 16,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        {company.positioning.tagline}
      </p>
      <div
        style={{
          fontSize: 12,
          color: colors.textLight,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
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
          color: colors.textPrimary,
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
          <span key={i} style={{ fontSize: 13, color: colors.textSecondary }}>
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
          color: colors.textPrimary,
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
        <a
          href={`mailto:${company.email}`}
          style={{
            fontSize: 13,
            color: colors.textSecondary,
            textDecoration: 'none',
          }}
        >
          {company.email}
        </a>
        <span style={{ fontSize: 13, color: colors.textSecondary }}>
          {company.serviceArea}
        </span>
      </div>
    </div>
  );

  return (
    <footer
      style={{
        background: colors.backgroundAlt,
        borderTop: `1px solid ${colors.border}`,
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
            <FooterColumn title="Products" items={productList} />
            <ContactColumn />
          </div>
        )}

        {/* Copyright */}
        <div
          style={{
            fontSize: 12,
            color: colors.textLight,
            borderTop: `1px solid ${colors.border}`,
            paddingTop: 20,
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
