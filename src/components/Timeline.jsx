import React, { useState } from "react";

const formations = [
  { title: "Mastère Ingénierie du Web en Alternance", org: "ESGI, Lille", period: "En septembre 2026", level: "Niveau 7 · Bac +5", desc: "Formation spécialisée en développement web full-stack. Rythme : 1 semaine école / 3 semaines entreprise.", accent: "#2563eb" },
  { title: "Titre Pro. Concepteur Développeur d'Application", org: "SOFIP Formation, Verquigneul", period: "Mars – Oct. 2025", level: "Niveau 6 · Bac +3/4", desc: "Conception et développement d'applications : analyse des besoins, programmation, bases de données, tests et déploiement.", accent: "#7c3aed" },
  { title: "Titre Pro. Développeur Web / Web Mobile", org: "SOFIP Formation, Verquigneul", period: "Fév. – Oct. 2024", level: "Niveau 5 · Bac +2", desc: "Développement front-end et back-end : HTML, CSS, JavaScript, ReactJS, Figma, Sass, SQL/NoSQL.", accent: "#0891b2" },
  { title: "Licence de Biologie", org: "Faculté des Sciences Jean Perrin, Lens", period: "Sept. 2021 – Juin 2023", accent: "#94a3b8" },
  { title: "Baccalauréat Scientifique", org: "Lycée Carnot, Bruay-la-Buissière", period: "Sept. 2019 – Juin 2020", accent: "#94a3b8" },
];

const stages = [
  { title: "Stage CDA – Waigéo", org: "Bruay-la-Buissière", period: "Août – Sept. 2025", desc: "Développement full-stack d'une application interne de configuration de menus. API REST avec Node.js/Express, gestion des données via MongoDB, interface React.", tags: ["Node.js", "Express", "MongoDB", "React"], accent: "#2563eb" },
  { title: "Stage Développeur Web – PPSCoaching", org: "Bruay-la-Buissière", period: "Août – Sept. 2024", desc: "Développement d'un site vitrine en HTML, CSS et JavaScript. Intégration de fonctionnalités interactives et optimisation des performances.", tags: ["HTML", "CSS", "JavaScript"], accent: "#7c3aed" },
];

function TimelineItem({ item, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ display: "flex", gap: "1.5rem", paddingBottom: isLast ? 0 : "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: item.accent, border: "2px solid var(--bg-primary)", boxShadow: `0 0 10px ${item.accent}80`, flexShrink: 0, marginTop: "5px" }} />
        {!isLast && <div style={{ width: "1px", flex: 1, background: "var(--border)", marginTop: "6px" }} />}
      </div>
      <div
        className="card"
        style={{ flex: 1, borderColor: hovered ? item.accent + "50" : "var(--border)", cursor: "default" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
          <h3 style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text-primary)" }}>{item.title}</h3>
          <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", whiteSpace: "nowrap", flexShrink: 0 }}>{item.period}</span>
        </div>
        <p style={{ fontSize: "0.8rem", color: item.accent, fontWeight: 500, marginBottom: (item.level || item.desc || item.tags) ? "0.4rem" : 0 }}>{item.org}</p>
        {item.level && <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: item.desc ? "0.4rem" : 0 }}>{item.level}</p>}
        {item.desc && <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: item.tags ? "0.75rem" : 0 }}>{item.desc}</p>}
        {item.tags && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const [tab, setTab] = useState("formations");
  const items = tab === "formations" ? formations : stages;

  return (
    <section id="timeline" className="section">
      <div className="container-sm">
        <p className="section-label">PARCOURS</p>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>Formations & Expériences</h2>

        {/* Tabs */}
        <div style={{ display: "inline-flex", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "10px", padding: "4px", marginBottom: "3rem", gap: "4px" }}>
          {["formations", "stages"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background: tab === t ? "var(--accent)" : "transparent", color: tab === t ? "white" : "var(--text-secondary)", border: "none", borderRadius: "7px", padding: "0.5rem 1.5rem", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div>
          {items.map((item, i) => <TimelineItem key={i} item={item} isLast={i === items.length - 1} />)}
        </div>
      </div>
    </section>
  );
}