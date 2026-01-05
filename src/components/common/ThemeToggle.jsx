import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = ({ style = {} }) => {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        background: colors.backgroundAlt,
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontSize: 14,
        fontWeight: 500,
        color: colors.textSecondary,
        minHeight: 44,
        ...style,
      }}
    >
      <span style={{ fontSize: 18 }}>{isDark ? '🌙' : '☀️'}</span>
      <span style={{ display: 'none', '@media (min-width: 600px)': { display: 'inline' } }}>
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;
