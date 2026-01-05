import React from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader, Card, Tag, ProductLink } from '../components/common';
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';

const Products = () => {
  const { isMobile, isTablet } = useWindowSize();
  const { colors } = useTheme();

  const products = [
    {
      name: 'FranklinWH aPower',
      tagline: 'Our Top Pick',
      desc: '15kWh modular battery system with integrated inverter and intelligent energy management.',
      tags: ['15kWh', 'Stackable', 'Smart App', 'Whole Home'],
      link: '/products/franklinwh',
      external: false,
      featured: true,
      badge: '⭐ FEATURED',
    },
    {
      name: 'SPAN Smart Panel',
      tagline: 'Circuit-Level Control',
      desc: 'Replace your breaker panel with intelligent monitoring and control for every circuit.',
      tags: ['Smart Control', 'Energy Monitor', 'App Control'],
      link: 'https://www.span.io',
      external: true,
      featured: false,
    },
    {
      name: 'Aquaria Hydropacks',
      tagline: 'Water from Air',
      desc: 'Atmospheric water generators creating clean drinking water from humidity.',
      tags: ['AWG', 'Solar Powered', 'Emergency Ready'],
      link: 'https://www.aquaria.com',
      external: true,
      featured: false,
    },
    {
      name: 'Tesla Powerwall',
      tagline: 'Proven Reliability',
      desc: '13.5kWh battery with seamless backup and Storm Watch auto-charging.',
      tags: ['13.5kWh', 'Storm Watch', 'Tesla App'],
      link: 'https://www.tesla.com/powerwall',
      external: true,
      featured: false,
    },
  ];

  return (
    <div>
      <Section bgVariant="alt">
        <SectionHeader
          label="PRODUCTS WE INSTALL"
          title="Premium Energy & Water Systems"
          subtitle="We partner with the industry's leading manufacturers to bring you reliable, proven solutions."
        />

        <div style={{ marginTop: 40 }}>
          {products.map((product, i) => (
            <Card
              key={i}
              featured={product.featured}
              badge={product.badge}
              badgeColor={product.featured ? colors.electricBlue : undefined}
              style={{
                marginBottom: 20,
                paddingTop: product.badge ? 28 : undefined,
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
                  gap: 20,
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: isMobile ? 20 : 24,
                      fontWeight: 700,
                      color: colors.textPrimary,
                      marginBottom: 4,
                    }}
                  >
                    {product.name}
                  </h3>
                  <div
                    style={{
                      fontSize: 15,
                      color: colors.electricBlue,
                      fontWeight: 500,
                      marginBottom: 12,
                    }}
                  >
                    {product.tagline}
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: colors.textSecondary,
                      lineHeight: 1.6,
                      marginBottom: 14,
                    }}
                  >
                    {product.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {product.tags.map((tag, j) => (
                      <Tag key={j}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
                  {product.external ? (
                    <ProductLink href={product.link} external>
                      Learn more
                    </ProductLink>
                  ) : (
                    <Link
                      to={product.link}
                      style={{
                        color: colors.electricBlue,
                        fontWeight: 600,
                        fontSize: 14,
                        textDecoration: 'none',
                      }}
                    >
                      View details →
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Products;
