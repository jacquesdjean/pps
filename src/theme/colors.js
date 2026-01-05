// Prometheus Power Solutions - Brand Color Palette
// Updated to match logo: Electric blue, Chrome silver, Deep blue

export const lightColors = {
  // Primary brand colors
  electricBlue: '#0EA5E9',
  chromeSilver: '#C0C0C0',
  deepBlue: '#1E40AF',

  // Accent colors
  orange: '#E8762D',
  orangeLight: '#FEF3EB',

  // Backgrounds
  background: '#FFFFFF',
  backgroundAlt: '#F9FAFB',
  backgroundAccent: '#E0F2FE', // Light electric blue

  // Text colors
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textLight: '#94A3B8',

  // UI elements
  border: '#E2E8F0',
  cardBg: '#FFFFFF',
  cardBorder: '#E2E8F0',

  // Status colors
  success: '#059669',
  successLight: '#ECFDF5',
  error: '#DC2626',
  errorLight: '#FEF2F2',
  warning: '#F59E0B',
  warningLight: '#FFFBEB',
};

export const darkColors = {
  // Primary brand colors (slightly adjusted for dark mode)
  electricBlue: '#38BDF8', // Lighter for better contrast
  chromeSilver: '#E5E7EB',
  deepBlue: '#3B82F6',

  // Accent colors
  orange: '#FB923C', // Slightly lighter orange
  orangeLight: '#431407',

  // Backgrounds
  background: '#0F172A', // Dark slate
  backgroundAlt: '#1E293B', // Slightly lighter slate
  backgroundAccent: '#1E3A5F', // Dark blue accent

  // Text colors
  textPrimary: '#F1F5F9',
  textSecondary: '#CBD5E1',
  textLight: '#94A3B8',

  // UI elements
  border: '#334155',
  cardBg: '#1E293B',
  cardBorder: '#334155',

  // Status colors
  success: '#10B981',
  successLight: '#022C22',
  error: '#EF4444',
  errorLight: '#2D0A0A',
  warning: '#FBBF24',
  warningLight: '#2D1F0A',
};

// Helper function to get theme colors
export const getColors = (isDark) => isDark ? darkColors : lightColors;

// Gradient helpers
export const gradients = {
  primary: (isDark) =>
    isDark
      ? 'linear-gradient(180deg, #FB923C 0%, #F97316 100%)'
      : 'linear-gradient(180deg, #E8862D 0%, #E8762D 100%)',
  blue: (isDark) =>
    isDark
      ? 'linear-gradient(180deg, #38BDF8 0%, #0EA5E9 100%)'
      : 'linear-gradient(180deg, #0EA5E9 0%, #0284C7 100%)',
  hero: (isDark) =>
    isDark
      ? 'linear-gradient(180deg, #1E3A5F 0%, #0F172A 100%)'
      : 'linear-gradient(180deg, #E0F2FE 0%, #FFFFFF 100%)',
};

export default { lightColors, darkColors, getColors, gradients };
