import React from "react";
import Reveal from "./Reveal";
import {greeting, contactInfo, heroStats, socialMediaLinks} from "../portfolio";

const SNIPPET = [
  ["kw", "class "],
  ["ty", "Minhal"],
  ["pl", " extends "],
  ["ty", "Engineer"],
  ["pl", " {"]
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal className="status">
            <span className="pulse" aria-hidden="true" />
            {contactInfo.subtitle}
          </Reveal>
          <Reveal as="h1" delay={80} className="hero-title">
            {greeting.headline}
          </Reveal>
          <Reveal as="p" delay={160} className="lead">
            {greeting.subTitle}
          </Reveal>
          <Reveal delay={240} className="hero-cta">
            <a className="btn" href="#contact">
              Let’s talk <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#work">
              See my work
            </a>
          </Reveal>
          <Reveal delay={320} className="hero-stats">
            {heroStats.map(s => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual" aria-hidden="true">
          <div className="code-card">
            <div className="code-top">
              <i /> <i /> <i />
              <span>developer.dart</span>
            </div>
            <pre>
              <code>
                <span className="c-cm">{"// Clean Architecture + BLoC"}</span>
                {"\n"}
                {SNIPPET.map(([c, t], i) => (
                  <span key={i} className={`c-${c}`}>
                    {t}
                  </span>
                ))}
                {"\n  "}
                <span className="c-kw">final </span>
                <span className="c-pl">years = </span>
                <span className="c-nm">6</span>
                <span className="c-pl">;</span>
                {"\n  "}
                <span className="c-kw">final </span>
                <span className="c-pl">stores = [</span>
                <span className="c-st">'Play Store'</span>
                <span className="c-pl">, </span>
                <span className="c-st">'App Store'</span>
                <span className="c-pl">];</span>
                {"\n\n  "}
                <span className="c-ty">Future</span>
                <span className="c-pl">{"<void> "}</span>
                <span className="c-fn">ship</span>
                <span className="c-pl">() </span>
                <span className="c-kw">async </span>
                <span className="c-pl">{"{"}</span>
                {"\n    "}
                <span className="c-kw">await </span>
                <span className="c-fn">build</span>
                <span className="c-pl">(</span>
                <span className="c-st">'scalable'</span>
                <span className="c-pl">);</span>
                {"\n  "}
                <span className="c-pl">{"}"}</span>
                {"\n"}
                <span className="c-pl">{"}"}</span>
              </code>
            </pre>
          </div>
          <div className="float-chip chip-1">
            <i className="fas fa-mobile-alt" /> Flutter
          </div>
          <div className="float-chip chip-2">
            <i className="fas fa-robot" /> AI integrations
          </div>
          {socialMediaLinks.display && (
            <div className="float-chip chip-3">
              <i className="fas fa-check-circle" /> Shipped to production
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
