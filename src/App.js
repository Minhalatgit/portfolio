import React, {useEffect, useState} from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import LiveApps from "./components/LiveApps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useTheme} from "./hooks/useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggleTheme} scrolled={scrolled} />
      <main id="main">
        <Hero />
        <Skills />
        <Experience />
        <Work />
        <LiveApps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
