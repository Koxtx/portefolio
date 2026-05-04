import React from "react";

const contactLinks = [
  { label: "Email", value: "corentin.lavarde@gmail.com", href: "mailto:corentin.lavarde@gmail.com", icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  { label: "GitHub", value: "github.com/Koxtx", href: "https://github.com/Koxtx", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: "LinkedIn", value: "linkedin.com/in/lavarde", href: "https://www.linkedin.com/in/lavarde", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "Localisation", value: "Lille, France", href: null, icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p className="section-label">CONTACT</p>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "1000px", marginBottom: "3rem" }}>
          Je recherche une alternance en développement web. N&apos;hésitez pas à me contacter pour échanger.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {contactLinks.map(link => (
            <div key={link.label} className="card">
              <div style={{ color: "var(--accent)", marginBottom: "0.75rem" }}>{link.icon}</div>
              <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{link.label.toUpperCase()}</p>
              {link.href ? (
                <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.8rem", fontWeight: 500, transition: "color 0.2s", wordBreak: "break-all" }}
                  onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
                  onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
                >
                  {link.value}
                </a>
              ) : (
                <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>{link.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px", height: "400px", background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)", pointerEvents: "none" }} />
          <h3 style={{ fontFamily: "'Archivo', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>Prêt à collaborer ?</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>Envoyez-moi un email, je vous répondrai rapidement.</p>
          <a href="mailto:corentin.lavarde@gmail.com" className="btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Envoyer un email
          </a>
        </div>
      </div>
    </section>
  );
}