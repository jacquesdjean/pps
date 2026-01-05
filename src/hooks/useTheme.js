import { useState, useEffect } from 'react';
import { getColors, gradients } from '../theme/colors';

// Hook for managing dark/light theme with localStorage persistence
export const useTheme = () => {
  // Default to dark mode
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;

    const stored = localStorage.getItem('pps-theme');
    if (stored !== null) {
      return stored === 'dark';
    }

    // Default to dark mode
    return true;
  });

  // Persist theme changes to localStorage
  useEffect(() => {
    localStorage.setItem('pps-theme', isDark ? 'dark' : 'light');

    // Update document class for potential CSS-based theme handling
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#0F172A' : '#FFFFFF');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = isDark ? '#0F172A' : '#FFFFFF';
      document.head.appendChild(meta);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const colors = getColors(isDark);

  return {
    isDark,
    setIsDark,
    toggleTheme,
    colors,
    gradients: {
      primary: gradients.primary(isDark),
      blue: gradients.blue(isDark),
      hero: gradients.hero(isDark),
    },
  };
};

export default useTheme;
