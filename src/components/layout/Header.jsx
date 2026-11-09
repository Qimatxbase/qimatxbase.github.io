import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile.js";

export function Header({ page = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const homeSection = (id) => page === 'home' ? `#${id}` : `./index.html#${id}`;

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <a className="identity" href={page === 'home' ? '#top' : './index.html'} onClick={closeMenu}>
          <span className="monogram" aria-hidden="true">kh.</span>
          <span className="identity-text">
            {profile.name}<span>DATA & ANALYTICS</span>
          </span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-controls="main-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 6h14M3 14h14" />
          </svg>
        </button>
        <nav
          id="main-nav"
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href={homeSection('experience')} onClick={closeMenu}>Experience</a>
          <a href="./projects.html" aria-current={page === 'projects' ? 'page' : undefined} onClick={closeMenu}>Projects</a>
          <a href={homeSection('about')} onClick={closeMenu}>About & skills</a>
          <a href={homeSection('contact')} className="nav-contact" onClick={closeMenu}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
