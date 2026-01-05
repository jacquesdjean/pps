import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTheme } from '../../hooks/useTheme';
import { company } from '../../theme/constants';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const { colors } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colors.background,
        borderBottom: `1px solid ${colors.border}`,
        padding: isMobile ? '12px 20px' : '14px 32px',
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? 600 : isTablet ? 900 : 1140,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            textDecoration: 'none',
          }}
        >
          <img
            src="/logo.png"
            alt="Prometheus Power Solutions"
            style={{
              width: isMobile ? 44 : 52,
              height: isMobile ? 44 : 52,
              objectFit: 'contain',
            }}
          />
          {!isMobile && (
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: colors.textPrimary,
                  lineHeight: 1.2,
                }}
              >
                Prometheus Power
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: colors.textLight,
                  fontWeight: 500,
                }}
              >
                {company.location}
              </div>
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: isDesktop ? 32 : 24, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontSize: 15,
                  fontWeight: isActive(item.path) ? 600 : 500,
                  color: isActive(item.path) ? colors.electricBlue : colors.textSecondary,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  borderBottom: isActive(item.path) ? `2px solid ${colors.electricBlue}` : 'none',
                  paddingBottom: 4,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right side actions */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* Theme toggle - hide on mobile to save space */}
          {!isMobile && <ThemeToggle />}

          {/* Call button */}
          <a
            href={`tel:${company.phoneRaw}`}
            style={{
              background: colors.orange,
              color: '#FFFFFF',
              padding: isDesktop ? '10px 20px' : '10px 16px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              minHeight: 44,
              whiteSpace: 'nowrap',
            }}
          >
            📞 {isDesktop ? company.phone : 'Call'}
          </a>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: 24,
                color: colors.textPrimary,
                cursor: 'pointer',
                padding: 8,
                minHeight: 44,
                minWidth: 44,
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <nav
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: `1px solid ${colors.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: 16,
                fontWeight: isActive(item.path) ? 600 : 500,
                color: isActive(item.path) ? colors.electricBlue : colors.textSecondary,
                textDecoration: 'none',
                padding: '8px 0',
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ paddingTop: 8 }}>
            <ThemeToggle style={{ width: '100%' }} />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
