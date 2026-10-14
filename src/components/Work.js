import React from "react";
import Reveal, {trackPointer} from "./Reveal";
import {SectionHead} from "./Skills";
import {bigProjects} from "../portfolio";

export default function Work() {
  if (!bigProjects.display) return null;
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead
          kicker="Selected work"
          title={bigProjects.title}
          sub="Production apps across healthcare, fintech, social and self-improvement."
        />
        <div className="work-grid">
          {bigProjects.projects.map((p, i) => (
            <Reveal key={p.projectName} delay={i * 90}>
              <article className="card project spot" onMouseMove={trackPointer}>
                <div className="app-icon">
                  {p.image ? (
                    <img src={p.image} alt={`${p.projectName} icon`} loading="lazy" />
                  ) : (
                    <span className="app-icon-fallback" aria-hidden="true">
                      {p.projectName.charAt(0)}
                    </span>
                  )}
                </div>
                <h3>{p.projectName}</h3>
                <p>{p.projectDesc}</p>
                {p.footerLink.length > 0 && (
                <div className="project-links">
                  {p.footerLink.map(l => (
                    <a key={l.url} className="btn btn-ghost btn-small" href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.name} <i className="fas fa-external-link-alt" aria-hidden="true" />
                    </a>
                  ))}
                </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
