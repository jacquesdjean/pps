import React from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader, Card } from '../components/common';
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';

const Solutions = () => {
  const { isMobile } = useWindowSize();
  const { colors } = useTheme();

  const solutions = [
    {
      title: 'Residential Solutions',
      desc: 'Home battery backup, solar integration, and water generation for Texas homeowners',
      link: '/solutions/residential',
      icon: '🏠',
    },
    {
      title: 'Commercial Solutions',
      desc: 'Enterprise energy storage, demand response, and water systems for businesses',
      link: '/solutions/commercial',
      icon: '🏢',
    },
  ];

  return (
    <div>
      <Section bgVariant="alt">
        <SectionHeader
          label="OUR SOLUTIONS"
          title="Residential & Commercial Energy + Water"
          subtitle="Comprehensive solutions for homes and businesses across Texas. From backup power to water security."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 24,
            marginTop: 40,
          }}
        >
          {solutions.map((solution, i) => (
            <Link key={i} to={solution.link} style={{ textDecoration: 'none' }}>
              <Card style={{ height: '100%', padding: isMobile ? 24 : 32 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{solution.icon}</div>
                <h3
                  style={{
                    fontSize: isMobile ? 20 : 24,
                    fontWeight: 700,
                    color: colors.textPrimary,
                    marginBottom: 12,
                  }}
                >
                  {solution.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {solution.desc}
                </p>
                <span
                  style={{
                    color: colors.electricBlue,
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Learn more →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Solutions;
