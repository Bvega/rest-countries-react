import React from 'react';
import { Link } from 'react-router-dom';

export default function BorderLink({ code }) {
  return (
    <Link
      to={`/country/${code}`}
      aria-label={`View details for border country ${code}`}
      style={{
        color: 'var(--text-color)',           // force link text to your theme color
        backgroundColor: 'var(--element-bg)', // match your card BG
        padding: '0.5rem 1rem',
        display: 'inline-block',
        borderRadius: '0.25rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        textDecoration: 'none',
        transition: 'text-decoration 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
    >
      {code}
    </Link>
  );
}
