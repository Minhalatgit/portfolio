import {useCallback, useEffect, useState} from "react";

const KEY = "theme";

const initialTheme = () => {
  try {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)");
  return mq && mq.matches ? "light" : "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0a10" : "#f7f7fa");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(t => {
      const next = t === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(KEY, next);
      } catch (e) {}
      return next;
    });
  }, []);

  return [theme, toggle];
};
