import React from "react";


export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

          {/* Left */}
          <div style={{textAlign:"center",}}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: "2.5rem" ,textAlign:"center", }} >
              <div style={{ width: "200px", height: "200px", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                <img src="https://zupimages.net/up/26/18/y3rt.jpg" alt="Corentin Lavarde" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-12px", right: "-12px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "100px", padding: "0.3rem 0.8rem", fontSize: "0.72rem", color: "#22c55e", display: "flex", alignItems: "center", gap: "0.4rem", whiteSpace: "nowrap" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                Disponible
              </div>
            </div>

           
          </div>

          {/* Right */}
          <div>
            <p className="section-label">À PROPOS</p>
            <h2 className="section-title">
              Développeur Full-Stack<br />
              <span style={{ color: "var(--text-secondary)" }}>passionné par le web</span>
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
              Diplômé Concepteur Développeur d&apos;Applications (niveau 6), j&apos;ai créé des applications
              full-stack incluant des API REST et des systèmes de gestion de bases de données MongoDB et SQL.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
              Admis en Mastère Ingénierie du Web à l&apos;ESGI Lille (rythme 1 semaine école / 3 semaines entreprise),
              je recherche une alternance pour contribuer à des projets concrets.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginBottom: "2rem" }}>
              {["📍 Lille", "🚗 Permis B"].map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {[
                { href: "https://github.com/Koxtx", label: "GitHub" },
                { href: "https://www.linkedin.com/in/lavarde", label: "LinkedIn" },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}