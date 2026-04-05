import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      {/* Desktop navbar — exactly as before, hidden on mobile */}
      <div className="hidden md:flex" style={{
        position: 'fixed',
        top: scrolled ? '1rem' : '0',
        left: 0,
        right: 0,
        zIndex: 9999,
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

      {/* Mobile navbar — only visible on mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[9999]" style={glassStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          <span style={{ color: '#ef4141', fontWeight: 700, fontSize: '1.1rem' }}>IMRAN</span>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {menuOpen
              ? <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
        {menuOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0 1.5rem 1rem', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[['#home','Home'],['#about','About'],['#contact','Contact'],['#reviews','Reviews'],['#projects','Projects']].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                style={{ ...linkStyle, padding: '10px 0', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ef4141'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}
              >{label}</a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;