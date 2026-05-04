import React, { useState, useEffect } from "react";

const username = "Koxtx";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", gap: "0.75rem", borderColor: hovered ? "var(--border-hover)" : "var(--border)", transform: hovered ? "translateY(-3px)" : "translateY(0)", boxShadow: hovered ? "var(--shadow-hover)" : "var(--shadow)", cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ background: "var(--bg-muted)", borderRadius: "8px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-muted)" }}>
            <svg width="11" height="11" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            {project.stars}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--text-muted)" }}>
            <svg width="11" height="11" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            {project.forks}
          </span>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{project.title}</h3>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{project.description}</p>
      </div>

      {project.technologies.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {project.technologies.slice(0, 4).map(t => <span key={t} className="tag" style={{ fontSize: "0.68rem", padding: "0.15rem 0.55rem" }}>{t}</span>)}
          {project.technologies.length > 4 && <span style={{ color: "var(--text-muted)", fontSize: "0.68rem", padding: "0.15rem 0.25rem" }}>+{project.technologies.length - 4}</span>}
        </div>
      )}

      <div style={{ display: "flex", gap: "0.5rem", paddingTop: "0.5rem", borderTop: "1px solid var(--border)" }}>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.75rem", fontWeight: 500, padding: "0.3rem 0.7rem", borderRadius: "6px", background: "var(--bg-muted)", transition: "all 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
        >
          <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Code
        </a>
        {project.demoLink && project.demoLink !== "#" && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none", fontSize: "0.75rem", fontWeight: 500, padding: "0.3rem 0.7rem", borderRadius: "6px", background: "var(--accent)", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--accent-hover)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--accent)"}
          >
            Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!res.ok) throw new Error("Erreur GitHub API");
        const repos = await res.json();
        const withLangs = await Promise.all(repos.map(async repo => {
          try {
            const lr = await fetch(repo.languages_url);
            return { ...repo, allLanguages: Object.keys(await lr.json()) };
          } catch { return { ...repo, allLanguages: repo.language ? [repo.language] : [] }; }
        }));
        setProjects(withLangs.map(r => ({ id: r.id, title: r.name, description: r.description || "Pas de description disponible.", technologies: r.allLanguages, githubLink: r.html_url, demoLink: r.homepage || "#", stars: r.stargazers_count, forks: r.forks_count })).sort((a, b) => b.stars - a.stars));
        setLoading(false);
      } catch (e) { setError(e.message); setLoading(false); }
    })();
  }, []);

  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <p className="section-label">PROJETS</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Mes projets GitHub</h2>
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
          >
            Voir tout sur GitHub →
          </a>
        </div>

        {loading && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", height: "190px", animation: "pulse 1.5s ease-in-out infinite" }} />
            ))}
          </div>
        )}

        {error && <div style={{ textAlign: "center", color: "var(--text-muted)", padding: "3rem" }}>Impossible de charger les projets : {error}</div>}

        {!loading && !error && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {projects.slice(0, displayCount).map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2.5rem" }}>
              {displayCount < projects.length && (
                <button onClick={() => setDisplayCount(c => c + 6)} className="btn-secondary">Afficher plus</button>
              )}
              {displayCount > 6 && (
                <button onClick={() => setDisplayCount(6)} style={{ background: "none", border: "none", color: "var(--text-muted)", fontSize: "0.85rem", cursor: "pointer", padding: "0.75rem 1rem" }}
                  onMouseEnter={e => e.target.style.color = "var(--text-secondary)"}
                  onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                >
                  Réduire
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}