import React from "react";

const skillGroups = [
  { label: "Langages", skills: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { label: "Frameworks", skills: ["React", "Node.js", "Express", "React Native", "Sass"] },
  { label: "Bases de données", skills: ["MySQL", "MongoDB"] },
  { label: "Outils", skills: ["Git", "Figma", "Notion", "Trello"] },
];

const softSkills = ["Autonomie", "Travail en équipe", "Adaptabilité"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">COMPÉTENCES</p>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>Stack technique</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
          {skillGroups.map(group => (
            <div key={group.label} className="card">
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
                {group.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map(skill => (
                  <span key={skill} className="tag" style={{ cursor: "default", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.target.style.background = "var(--accent-light)"; e.target.style.color = "var(--accent-text)"; e.target.style.borderColor = "var(--accent-border)"; }}
                    onMouseLeave={e => { e.target.style.background = "var(--tag-bg)"; e.target.style.color = "var(--tag-text)"; e.target.style.borderColor = "var(--tag-border)"; }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>Soft skills</h3>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {softSkills.map(skill => (
              <span key={skill} style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent-text)", padding: "0.35rem 1rem", borderRadius: "100px", fontSize: "0.82rem", fontWeight: 500 }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}