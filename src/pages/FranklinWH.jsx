import React from 'react';
import { Section, SectionHeader, Card, Tag, PrimaryButton, SecondaryButton } from '../components/common';
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';
import { company } from '../theme/constants';

const FranklinWH = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const { colors, gradients } = useTheme();

  const features = [
    { icon: '⚡', title: '15kWh Capacity', desc: 'Stackable modules for expandable storage' },
    { icon: '🔄', title: 'Integrated Inverter', desc: 'All-in-one solution, less equipment' },
    { icon: '🧠', title: 'Smart Management', desc: 'aGate hub optimizes energy usage' },
    { icon: '📱', title: 'Mobile App', desc: 'Monitor and control from anywhere' },
    { icon: '🏠', title: 'Whole Home Backup', desc: 'Power your entire house during outages' },
    { icon: '☀️', title: 'Solar Ready', desc: 'Seamless integration with solar panels' },
  ];

  const specs = [
    { label: 'Capacity', value: '15kWh per unit' },
    { label: 'Power Output', value: '12kW continuous, 15kW peak' },
    { label: 'Expandable', value: 'Up to 90kWh (6 units)' },
    { label: 'Warranty', value: '12 years' },
    { label: 'Dimensions', value: '43.3" H × 23.6" W × 6.3" D' },
    { label: 'Weight', value: '295 lbs' },
  ];

  const benefits = [
    'ERCOT-optimized for Texas grid conditions',
    'Time-of-use rate optimization',
    'Storm mode auto-charging',
    'Quiet operation (indoor/outdoor rated)',
    'Scalable from 15kWh to 90kWh',
    'Works with or without solar',
  ];

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: gradients.hero,
          padding: isMobile ? '40px 20px 48px' : '80px 40px 100px',
        }}
      >
        <div
          style={{
            maxWidth: isMobile ? 600 : isTablet ? 900 : 1140,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: colors.electricBlue,
              color: '#FFFFFF',
              fontSize: 12,
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            ⭐ AUTHORIZED DEALER
          </div>

          <h1
            style={{
              fontSize: isMobile ? 32 : isTablet ? 42 : 52,
              fontWeight: 800,
              color: colors.textPrimary,
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            FranklinWH aPower System
          </h1>

          <p
            style={{
              fontSize: isMobile ? 17 : 19,
              color: colors.textSecondary,
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 700,
              margin: '0 auto 32px',
            }}
          >
            The complete home energy solution. Modular battery storage with integrated
            inverter and intelligent energy management designed for Texas homes.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 12,
              justifyContent: 'center',
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            <PrimaryButton href="/contact" fullWidth={isMobile}>
              Get a Quote
            </PrimaryButton>
            <SecondaryButton href={`tel:${company.phoneRaw}`} fullWidth={isMobile}>
              📞 Call Us
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <Section bgVariant="alt">
        <SectionHeader title="Key Features" subtitle="Everything you need in one intelligent system" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? 14 : 20,
            marginTop: 32,
          }}
        >
          {features.map((feature, i) => (
            <Card key={i} style={{ padding: isMobile ? 20 : 24 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{feature.icon}</div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: colors.textPrimary,
                  marginBottom: 6,
                }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.5 }}>
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technical Specs */}
      <Section bgVariant="default">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: 32,
          }}
        >
          <div>
            <SectionHeader align="left" title="Technical Specifications" />
            <Card style={{ padding: isMobile ? 20 : 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {specs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: 16,
                      borderBottom: i < specs.length - 1 ? `1px solid ${colors.border}` : 'none',
                    }}
                  >
                    <span style={{ fontSize: 14, color: colors.textSecondary }}>
                      {spec.label}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: colors.textPrimary,
                        textAlign: 'right',
                      }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <SectionHeader align="left" title="Why FranklinWH?" />
            <Card style={{ padding: isMobile ? 20 : 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {benefits.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: colors.success, fontSize: 18, marginTop: 1 }}>✓</span>
                    <span
                      style={{
                        fontSize: 15,
                        color: colors.textSecondary,
                        lineHeight: 1.5,
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgVariant="accent">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isMobile ? 26 : 32,
              fontWeight: 700,
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Ready to Install FranklinWH?
          </h2>
          <p
            style={{
              fontSize: isMobile ? 15 : 17,
              color: colors.textSecondary,
              marginBottom: 32,
              lineHeight: 1.5,
            }}
          >
            Get a custom quote for your home. We'll assess your energy needs and design
            the perfect system.
          </p>

          <PrimaryButton href="/contact" fullWidth={isMobile} style={{ maxWidth: 300, margin: '0 auto' }}>
            Request Free Quote
          </PrimaryButton>
        </div>
      </Section>
    </div>
  );
};

export default FranklinWH;
