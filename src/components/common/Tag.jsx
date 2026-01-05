import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Tag = ({ children, variant = 'primary', style = {} }) => {
  const { colors } = useTheme();

  const variants = {
    primary: {
      background: colors.backgroundAccent,
      color: colors.electricBlue,
    },
    success: {
      background: colors.successLight,
      color: colors.success,
    },
    orange: {
      background: colors.orangeLight,
      color: colors.orange,
    },
  };

  const variantStyle = variants[variant] || variants.primary;

  return (
    <span
      style={{
        background: variantStyle.background,
        color: variantStyle.color,
        fontSize: 12,
        fontWeight: 500,
        padding: '5px 10px',
        borderRadius: 6,
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
