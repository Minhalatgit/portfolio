import React from "react";
import Reveal, {trackPointer} from "./Reveal";
import {SectionHead} from "./Skills";
import {workExperiences, educationInfo} from "../portfolio";

export default function Experience() {
  if (!workExperiences.display) return null;
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          kicker="Journey"
          title="Where I’ve built things"
          sub="Six years across product teams and agencies — from Android roots to Flutter at scale."
        />
        <ol className="timeline">
          {workExperiences.experience.map((job, i) => (
            <Reveal as="li" key={job.company + job.date} delay={Math.min(i, 3) * 60} className="tl-item">
              <span className="tl-dot" aria-hidden="true" />
              <article className="card spot" onMouseMove={trackPointer}>
                <header className="job-head">
                  <div className="logo">
                    <img src={job.companylogo} alt="" loading="lazy" />
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <time className="date">{job.date}</time>
                </header>
                <p className="job-desc">{job.desc}</p>
                <ul className="bullets">
                  {job.descBullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>

        {educationInfo.display &&
          educationInfo.schools.map(s => (
            <Reveal key={s.schoolName} className="card edu spot" onMouseMove={trackPointer}>
              <div className="logo">
                <img src={s.logo} alt="" loading="lazy" />
              </div>
              <div>
                <span className="kicker">Education</span>
                <h3>{s.schoolName}</h3>
                <p className="company">
                  {s.subHeader} · {s.duration}
                </p>
                <p className="job-desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
      </div>
    </section>
  );
}
