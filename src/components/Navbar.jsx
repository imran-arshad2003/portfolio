import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
  };

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#projects', label: 'Projects', isBtn: true },
  ];

  return (
    <>
      {/* ── Desktop Navbar ── */}
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
      }}
        className="hidden md:flex"
      >
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
          {links.map(({ href, label, isBtn }) =>
            isBtn ? (
              <a key={href} href={href}>
                <button
                  style={{
                    color: '#ef4141',
                    border: '1.5px solid #ef4141',
                    borderRadius: '999px',
                    padding: '4px 16px',
                    background: 'rgba(239, 65, 65, 0.08)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ef4141'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239, 65, 65, 0.08)'; e.currentTarget.style.color = '#ef4141'; }}
                >
                  {label}
                </button>
              </a>
            ) : (
              <a
                key={href}
                href={href}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ef4141'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}
              >
                {label}
              </a>
            )
          )}
        </nav>
      </div>

      {/* ── Mobile Navbar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[9999]" style={glassStyle}>
        <div className="flex items-center justify-between px-5 py-4">
          <span style={{ color: '#ef4141', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
            IMRAN
          </span>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} className="flex flex-col px-5 py-3 gap-3">
            {links.map(({ href, label, isBtn }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: isBtn ? '#ef4141' : 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: isBtn ? 600 : 400,
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;