import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTheme } from '../../hooks/useTheme';

const SectionHeader = ({ label, title, subtitle, align = 'center' }) => {
  const { isMobile, isTablet } = useWindowSize();
  const { colors } = useTheme();

  return (
    <div style={{ textAlign: align, marginBottom: isMobile ? 28 : 36 }}>
      {label && (
        <div
          style={{
            fontSize: isMobile ? 12 : 13,
            fontWeight: 600,
            color: colors.electricBlue,
            letterSpacing: '0.05em',
            marginBottom: 8,
            textTransform: 'uppercase',
          }}
        >
          {label}
        </div>
      )}
      <h2
        style={{
          fontSize: isMobile ? 26 : isTablet ? 32 : 38,
          fontWeight: 700,
          color: colors.textPrimary,
          marginBottom: subtitle ? 12 : 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: isMobile ? 15 : 17,
            color: colors.textSecondary,
            lineHeight: 1.6,
            maxWidth: 600,
            margin: align === 'center' ? '0 auto' : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
