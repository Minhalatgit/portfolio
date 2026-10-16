import React from "react";
import Reveal, {trackPointer} from "./Reveal";
import {SectionHead} from "./Skills";
import {liveApps, liveAppsSection} from "../portfolio";

export default function LiveApps() {
  if (!liveAppsSection.display) return null;
  return (
    <section id="apps" className="section">
      <div className="container">
        <SectionHead
          kicker="Live apps"
          title={liveAppsSection.title}
          sub={liveAppsSection.subtitle}
        />
        <div className="apps-grid">
          {liveApps.map((app, i) => {
            const links = [
              {name: "App Store", url: app.ios},
              {name: "Play Store", url: app.android},
              {name: "Website", url: app.website}
            ].filter(l => l.url);
            return (
              <Reveal key={app.name} delay={(i % 3) * 90}>
                <article className="card app-card spot" onMouseMove={trackPointer}>
                  <div className="app-icon">
                    {app.image ? (
                      <img src={app.image} alt={`${app.name} icon`} loading="lazy" />
                    ) : (
                      <span className="app-icon-fallback" aria-hidden="true">
                        {app.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3>{app.name}</h3>
                  <div className="project-links">
                    {links.map(l => (
                      <a
                        key={l.name}
                        className="btn btn-ghost btn-small"
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.name} <i className="fas fa-external-link-alt" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
