import React from "react";
import Reveal from "./Reveal";
import {contactInfo, socialMediaLinks, greeting} from "../portfolio";

const SOCIALS = [
  {key: "github", label: "GitHub", icon: "fab fa-github"},
  {key: "linkedin", label: "LinkedIn", icon: "fab fa-linkedin-in"},
  {key: "medium", label: "Medium", icon: "fab fa-medium-m"},
  {key: "stackoverflow", label: "Stack Overflow", icon: "fab fa-stack-overflow"}
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="cta">
          <div className="orb orb-c" aria-hidden="true" />
          <span className="kicker">Contact</span>
          <h2>Have a mobile product to build? Let’s make it great.</h2>
          <p>
            {contactInfo.subtitle} · {contactInfo.location}
          </p>
          <div className="hero-cta">
            <a className="btn" href={`mailto:${contactInfo.email_address}`}>
              <i className="fas fa-envelope" aria-hidden="true" /> {contactInfo.email_address}
            </a>
            {greeting.resumeLink && (
              <a className="btn btn-ghost" href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
                Download resume
              </a>
            )}
          </div>
          <ul className="socials">
            {SOCIALS.filter(s => socialMediaLinks[s.key]).map(s => (
              <li key={s.key}>
                <a href={socialMediaLinks[s.key]} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <i className={s.icon} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
