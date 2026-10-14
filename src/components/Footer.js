import React from "react";
import {greeting} from "../portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>
          © {new Date().getFullYear()} {greeting.username}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
