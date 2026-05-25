import { useState, useEffect } from "react";

const css = `
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 500;
    display: flex; justify-content: space-between; align-items: center;
    padding: 24px 64px;
    border-bottom: 1px solid transparent;
    transition: background 0.5s, border-color 0.5s;
  }
  .nav.sc {
    background: rgba(6,6,6,0.9);
    backdrop-filter: blur(14px);
    border-color: var(--border);
  }
  .nav-logo { font-family: var(--fd); font-size: 17px; font-weight: 800; color: var(--text); }
  .nav-logo em { color: var(--accent); font-style: normal; }
  .nav-links { display: flex; gap: 40px; list-style: none; }
  .nav-links a {
    font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--muted); text-decoration: none;
    position: relative; padding-bottom: 3px;
    transition: color 0.2s;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 100%;
    height: 1px; background: var(--accent); transition: right 0.3s;
  }
  .nav-links a:hover { color: var(--text); }
  .nav-links a:hover::after { right: 0; }

  @media (max-width: 900px) { .nav { padding: 18px 28px; } }
`;

export default function Nav({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{css}</style>
      <nav className={`nav ${scrolled ? "sc" : ""}`}>
        <div className="nav-logo">ANKIT<em>.</em></div>
        <ul className="nav-links">
          {["about", "projects", "contact"].map((s) => (
            <li key={s}><a href={`#${s}`} onClick={scrollTo(s)}>{s}</a></li>
          ))}
        </ul>
      </nav>
    </>
  );
}