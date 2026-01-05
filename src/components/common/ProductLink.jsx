import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ProductLink = ({ href, children, external = true }) => {
  const [hovered, setHovered] = useState(false);
  const { colors } = useTheme();

  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: colors.electricBlue,
        fontWeight: 600,
        fontSize: 13,
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: hovered ? 8 : 4,
        transition: 'gap 0.2s',
      }}
    >
      {children} <span>→</span>
    </a>
  );
};

export default ProductLink;
