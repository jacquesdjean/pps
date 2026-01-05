import React from 'react';
import {
  Section,
  SectionHeader,
  Card,
  PrimaryButton,
  SecondaryButton,
} from '../components/common';
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';
import { company } from '../theme/constants';

// This will be refactored to import home section components later
const Home = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const { colors, gradients } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: gradients.hero,
          padding: isMobile ? '40px 20px 48px' : isTablet ? '60px 32px 80px' : '80px 40px 100px',
        }}
      >
        <div
          style={{
            maxWidth: isMobile ? 600 : isTablet ? 900 : 1140,
            margin: '0 auto',
            textAlign: isDesktop ? 'left' : 'center',
          }}
        >
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
            🛡️ Licensed EPC Contractor in Texas
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: isMobile ? 28 : isTablet ? 42 : 52,
              fontWeight: 800,
              color: colors.textPrimary,
              lineHeight: 1.15,
              marginBottom: isMobile ? 14 : 20,
            }}
          >
            Energy + Water Solutions for Texas Resilience
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: isMobile ? 16 : 19,
              color: colors.textSecondary,
              lineHeight: 1.6,
              marginBottom: isMobile ? 28 : 32,
              maxWidth: isDesktop ? 620 : '100%',
              margin: isDesktop ? '0 0 32px 0' : '0 auto 32px',
            }}
          >
            Professional energy storage, solar integration, and atmospheric water
            generation. Statewide Texas coverage. Never worry about grid outages or
            water emergencies again.
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
            <PrimaryButton href="/contact" fullWidth={!isDesktop}>
              Get Your Free Quote
            </PrimaryButton>
            <SecondaryButton href={`tel:${company.phoneRaw}`} fullWidth={!isDesktop}>
              📞 Call {company.phone}
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <Section bgVariant="alt">
        <SectionHeader
          title="Energy + Water Convergence"
          subtitle="We're not just another solar company. We combine energy resilience with water security for comprehensive Texas emergency preparedness."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 14 : 20,
            marginTop: 32,
          }}
        >
          {[
            { icon: '⚡', title: 'Energy Storage', desc: 'Battery backup for grid outages' },
            { icon: '☀️', title: 'Solar Integration', desc: 'US-made panels + smart inverters' },
            { icon: '💧', title: 'Water Generation', desc: 'Clean water from air, no plumbing' },
            { icon: '🎛️', title: 'Smart Panels', desc: 'Circuit-level control & monitoring' },
          ].map((item, i) => (
            <Card key={i} style={{ textAlign: 'center', padding: isMobile ? 20 : 24 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary, marginBottom: 6 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Service Area */}
      <Section bgVariant="default">
        <SectionHeader
          title="Statewide Texas Coverage"
          subtitle="Based in Fort Worth, serving residential and commercial clients across the entire state."
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            marginTop: 24,
          }}
        >
          {company.majorCities.map((city, i) => (
            <span
              key={i}
              style={{
                background: colors.backgroundAccent,
                color: colors.electricBlue,
                fontSize: 14,
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: 20,
              }}
            >
              {city}
            </span>
          ))}
          <span
            style={{
              background: colors.backgroundAlt,
              color: colors.textSecondary,
              fontSize: 14,
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: 20,
              border: `1px solid ${colors.border}`,
            }}
          >
            + Entire Texas
          </span>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgVariant="accent">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isMobile ? 26 : isTablet ? 32 : 38,
              fontWeight: 700,
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            Ready to Build Resilience?
          </h2>
          <p
            style={{
              fontSize: isMobile ? 15 : 17,
              color: colors.textSecondary,
              marginBottom: isMobile ? 28 : 36,
              lineHeight: 1.5,
            }}
          >
            Contact us for a free consultation. We'll assess your needs and design a
            custom solution for your home or business.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 12,
              justifyContent: 'center',
            }}
          >
            <PrimaryButton href="/contact" fullWidth={isMobile}>
              Request Free Quote
            </PrimaryButton>
            <SecondaryButton href="/products/franklinwh" fullWidth={isMobile}>
              View FranklinWH System
            </SecondaryButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
