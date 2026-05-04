import React, { useEffect, useState } from "react";

const roles = ["Développeur Web", "React & Node.js", "En recherche d'alternance"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (typing) {
      if (displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      else t = setTimeout(() => setTyping(false), 2000);
    } else {
      if (displayed.length > 0) t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      else { setRoleIndex(i => (i + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIndex]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "5rem 1.5rem", position: "relative", overflow: "hidden", background: "var(--bg-primary)" }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, var(--glow) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "860px", textAlign: "center", position: "relative", width: "100%" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "2.5rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }} />
          Disponible pour une alternance — ESGI Lille
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "'Archivo', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.25rem", color: "var(--text-primary)" }}>
          Corentin{" "}
          <span style={{ color: "var(--accent)" }}>Lavarde</span>
        </h1>

        {/* Typewriter */}
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "var(--text-muted)", fontWeight: 400, marginBottom: "2rem", minHeight: "2.25rem" }}>
          {displayed}
          <span style={{ color: "var(--accent)", animation: "blink 1s step-end infinite" }}>|</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "540px", margin: "0 auto 3rem" }}>
          Développeur web diplômé CDA niveau 6, spécialisé JavaScript, React et Node.js.
          Admis en Mastère Ingénierie du Web à l&apos;ESGI Lille.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn-secondary">Me contacter</a>
        </div>

        {/* Scroll */}
        <div style={{ marginTop: "5rem", color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.12em" }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, var(--border))", margin: "0 auto 0.5rem" }} />
          SCROLL
        </div>
      </div>
    </section>
  );
}