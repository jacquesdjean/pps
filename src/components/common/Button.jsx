import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// Primary Button
export const PrimaryButton = ({ children, href, onClick, fullWidth = true, style = {} }) => {
  const { gradients, colors } = useTheme();

  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        background: gradients.primary,
        boxShadow: '0 2px 8px rgba(232, 118, 45, 0.3)',
        color: colors.textPrimary,
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
        border: 'none',
        ...style,
      }}
    >
      {children}
    </a>
  );
};

// Secondary Button (outline)
export const SecondaryButton = ({ children, href, onClick, fullWidth = true, style = {} }) => {
  const { colors } = useTheme();

  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        background: colors.cardBg,
        border: `2px solid ${colors.electricBlue}`,
        color: colors.electricBlue,
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
};

// Icon Button (for small actions)
export const IconButton = ({ children, onClick, ariaLabel, style = {} }) => {
  const { colors } = useTheme();

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      style={{
        background: 'transparent',
        border: 'none',
        color: colors.textSecondary,
        padding: 8,
        borderRadius: 8,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
        minHeight: 44,
        minWidth: 44,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default { PrimaryButton, SecondaryButton, IconButton };
