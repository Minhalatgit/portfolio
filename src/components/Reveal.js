import React, {useEffect, useRef, useState} from "react";

// Fades children up once they scroll into view.
export default function Reveal({as: Tag = "div", delay = 0, className = "", children, ...rest}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      {threshold: 0.12, rootMargin: "0px 0px -40px 0px"}
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{transitionDelay: `${delay}ms`}}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Tracks the pointer so cards can paint a soft spotlight (see .spot in CSS).
export const trackPointer = e => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};
