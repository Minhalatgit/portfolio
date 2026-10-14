import React from "react";
import Reveal, {trackPointer} from "./Reveal";
import {skillsSection} from "../portfolio";

export function SectionHead({kicker, title, sub}) {
  return (
    <Reveal className="section-head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

const CARD_ICONS = [
  "fas fa-layer-group",
  "fas fa-plug",
  "fas fa-robot",
  "fas fa-rocket"
];

export default function Skills() {
  if (!skillsSection.display) return null;
  const {skillGroups, aiWorkflow} = skillsSection;
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead
          kicker="Expertise"
          title={skillsSection.title}
          sub={skillsSection.subTitle}
        />

        <Reveal className="expertise spot" onMouseMove={trackPointer}>
          <div className="exp-col">
            <h3 className="exp-title">What I do</h3>
            <ul className="do-list">
              {skillsSection.skills.map((s, i) => (
                <li key={s}>
                  <span className="card-icon" aria-hidden="true">
                    <i className={CARD_ICONS[i % CARD_ICONS.length]} />
                  </span>
                  <p>{s}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="exp-col">
            <h3 className="exp-title">Toolbox</h3>
            <dl className="toolbox">
              {skillGroups.map(g => (
                <div className="tool-row" key={g.title}>
                  <dt>
                    <i className={g.icon} aria-hidden="true" /> {g.title}
                  </dt>
                  <dd>
                    <ul>
                      {g.items.map(item => (
                        <li key={item} className="chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {aiWorkflow && (
          <Reveal className="ai-card" onMouseMove={trackPointer}>
            <div className="ai-copy">
              <span className="kicker">
                <i className="fas fa-magic" aria-hidden="true" /> {aiWorkflow.kicker}
              </span>
              <h3>{aiWorkflow.title}</h3>
              <p>{aiWorkflow.desc}</p>
            </div>
            <ul className="ai-points">
              {aiWorkflow.points.map(p => (
                <li key={p.text}>
                  <i className={p.icon} aria-hidden="true" />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
