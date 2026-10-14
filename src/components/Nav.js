import React, {useEffect, useState} from "react";
import {greeting} from "../portfolio";

const LINKS = [
  {id: "skills", label: "Skills"},
  {id: "experience", label: "Experience"},
  {id: "work", label: "Work"},
  {id: "contact", label: "Contact"}
];

export default function Nav({theme, onToggleTheme, scrolled}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      {rootMargin: "-45% 0px -50% 0px"}
    );
    LINKS.forEach(l => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav" aria-label="Primary">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="brand-mark">M</span>
          <span className="brand-name">{greeting.username.split(" ")[1]}</span>
        </a>
        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? "active" : ""}
                aria-current={active === l.id ? "true" : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"} aria-hidden="true" />
          </button>
          {greeting.resumeLink && (
            <a className="btn btn-small" href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
