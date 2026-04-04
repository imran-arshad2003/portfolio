import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: scrolled ? 'center' : 'center',
    gap: '2rem',
    padding: scrolled ? '0.6rem 2rem' : '1rem 2.5rem',
    width: scrolled ? 'max-content' : '100%',
    borderRadius: scrolled ? '999px' : '0px',
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
    whiteSpace: 'nowrap',
    transition: 'all 0.4s ease',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    background: 'none',
    border: 'none',
    padding: 0,
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
    letterSpacing: '0.04em',
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
      <nav style={navStyle}>

        <button style={linkStyle}
          onClick={() => scrollTo('home')}
          onMouseEnter={e => e.currentTarget.style.color = '#ef4141'}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
        >Home</button>

        <button style={linkStyle}
          onClick={() => scrollTo('about')}
          onMouseEnter={e => e.currentTarget.style.color = '#ef4141'}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
        >About</button>

        <button style={linkStyle}
          onClick={() => scrollTo('contact')}
          onMouseEnter={e => e.currentTarget.style.color = '#ef4141'}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
        >Contact</button>

        <button style={linkStyle}
          onClick={() => scrollTo('reviews')}
          onMouseEnter={e => e.currentTarget.style.color = '#ef4141'}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
        >Reviews</button>

        <button
          style={btnStyle}
          onClick={() => scrollTo('projects')}
          onMouseEnter={e => { e.currentTarget.style.background = '#ef4141'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239, 65, 65, 0.08)'; e.currentTarget.style.color = '#ef4141'; }}
        >Projects</button>

      </nav>
    </div>
  );
};

export default Navbar;