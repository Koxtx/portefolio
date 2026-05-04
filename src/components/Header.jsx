import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#timeline", label: "Parcours" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ];

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: scrolled ? "var(--header-bg)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    transition: "all 0.3s ease",
  };

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>

          {/* Logo */}
          <a href="#" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", textDecoration: "none", letterSpacing: "-0.02em" }}>
            CL<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.2s", cursor: "pointer" }}
                onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
                onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button onClick={toggleTheme} title="Changer le thème" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              {theme === "dark" ? (
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              )}
            </button>

            <a href="mailto:corentin.lavarde@gmail.com" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
              Me contacter
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="show-mobile" style={{ gap: "0.75rem", alignItems: "center" }}>
            <button onClick={toggleTheme} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)" }}>
              {theme === "dark" ? (
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu" style={{ background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", padding: "8px", display: "flex" }}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "1rem 1.5rem" }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}
              style={{ display: "block", color: "var(--text-secondary)", textDecoration: "none", padding: "0.75rem 0", borderBottom: "1px solid var(--border)", fontSize: "0.9rem", fontWeight: 500 }}>
              {link.label}
            </a>
          ))}
          <div style={{ paddingTop: "1rem" }}>
            <a href="mailto:corentin.lavarde@gmail.com" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}>
              Me contacter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;