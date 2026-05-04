import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
          CL<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>© {new Date().getFullYear()} Corentin Lavarde — Développeur Web </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[{ href: "https://github.com/Koxtx", l: "GitHub" }, { href: "https://www.linkedin.com/in/lavarde", l: "LinkedIn" }, { href: "mailto:corentin.lavarde@gmail.com", l: "Email" }].map(({ href, l }) => (
            <a key={l} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
              onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}