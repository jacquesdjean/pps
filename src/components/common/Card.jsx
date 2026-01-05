import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTheme } from '../../hooks/useTheme';

const Card = ({ children, featured = false, badge = null, badgeColor, style = {} }) => {
  const { isMobile, isTablet } = useWindowSize();
  const { colors } = useTheme();

  const basePadding = isMobile ? '20px 24px' : isTablet ? '24px 28px' : '28px 32px';

  return (
    <div
      className="card"
      style={{
        background: colors.cardBg,
        border: featured
          ? `2px solid ${colors.electricBlue}`
          : `1px solid ${colors.cardBorder}`,
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
            background: badgeColor || colors.electricBlue,
            color: colors.background,
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

export default Card;
