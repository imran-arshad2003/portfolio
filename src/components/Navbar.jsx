import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    transition: 'color 0.2s ease',
  };

  const btnStyle = {
    color: '#ef4141',
    border: '1.5px solid #ef4141',
    borderRadius: '999px',
    padding: '4px 16px',
    background: 'rgba(239, 65, 65, 0.08)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  };

  return (
    <div style={{
      position: 'fixed',
      top: scrolled ? '1rem' : '0',
      left: 0,
      right: 0,
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      transition: 'top 0.4s ease',
    }}>
      <nav style={{
        ...glassStyle,
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: scrolled ? '0.6rem 2rem' : '1rem 2.5rem',
        width: scrolled ? 'max-content' : '100%',
        borderRadius: scrolled ? '999px' : '0px',
        whiteSpace: 'nowrap',
        transition: 'all 0.4s ease',
      }}>
        <a href="#home" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#ef4141'} onMouseLeave={e => e.currentTarget.style.color = 'white'}>Home</a>
        <a href="#about" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#ef4141'} onMouseLeave={e => e.currentTarget.style.color = 'white'}>About</a>
        <a href="#contact" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#ef4141'} onMouseLeave={e => e.currentTarget.style.color = 'white'}>Contact</a>
        <a href="#reviews" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#ef4141'} onMouseLeave={e => e.currentTarget.style.color = 'white'}>Reviews</a>
        <button
          style={btnStyle}
          onMouseEnter={e => { e.currentTarget.style.background = '#ef4141'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239, 65, 65, 0.08)'; e.currentTarget.style.color = '#ef4141'; }}
        >
          Projects
        </button>
      </nav>
    </div>
  );
};

export default Navbar;