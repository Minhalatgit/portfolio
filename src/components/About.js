import React from "react";
import Reveal, {trackPointer} from "./Reveal";
import {SectionHead} from "./Skills";
import {greeting} from "../portfolio";

export default function About() {
  if (!greeting.about) return null;
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead kicker="About" title="Flutter, from native Android roots" />
        <Reveal className="card about spot" onMouseMove={trackPointer}>
          {greeting.about.map(p => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
