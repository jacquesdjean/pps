import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTheme } from '../../hooks/useTheme';

const Section = ({ children, bg, bgVariant = 'default', id, style = {} }) => {
  const { isMobile, isTablet } = useWindowSize();
  const { colors } = useTheme();

  // Background color mapping
  const bgColors = {
    default: colors.background,
    alt: colors.backgroundAlt,
    accent: colors.backgroundAccent,
    primary: colors.electricBlue,
    navy: colors.deepBlue,
  };

  const backgroundColor = bg || bgColors[bgVariant] || bgColors.default;

  return (
    <section
      id={id}
      style={{
        background: backgroundColor,
        padding: isMobile ? '48px 20px' : isTablet ? '80px 32px' : '100px 40px',
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? 600 : isTablet ? 900 : 1140,
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
