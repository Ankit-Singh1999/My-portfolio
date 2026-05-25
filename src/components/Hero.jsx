const css = `
  .hero {
    min-height: 100vh; padding: 0 64px 100px;
    display: flex; flex-direction: column; justify-content: flex-end;
    position: relative; overflow: hidden;
  }
  .hero-top {
    position: absolute; top: 100px; left: 64px; right: 64px;
    display: flex; justify-content: space-between; align-items: flex-start;
  }
  .avail {
    display: flex; align-items: center; gap: 8px;
    font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--muted);
  }
  .adot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px rgba(200,255,51,0.2);
    animation: pulse 2.2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 3px rgba(200,255,51,0.2); }
    50%      { box-shadow: 0 0 0 8px rgba(200,255,51,0); }
  }
  .hero-loc { font-size: 10px; letter-spacing: 0.12em; color: var(--muted); }
  .hero-name {
    font-family: var(--fd); font-weight: 800;
    font-size: clamp(68px, 12vw, 158px);
    line-height: 0.86; letter-spacing: -5px;
    color: var(--text); margin-bottom: 52px;
    z-index: 1; position: relative;
  }
  .hero-name .l2 { color: transparent; -webkit-text-stroke: 1.5px var(--text); }
  .hero-name .la { -webkit-text-stroke: 1.5px var(--accent); }
  .hero-bot {
    display: flex; justify-content: space-between; align-items: flex-end;
    z-index: 1; position: relative;
  }
  .hero-desc { max-width: 420px; font-size: 14px; line-height: 1.9; color: var(--muted); }
  .hero-desc strong { color: var(--text); font-weight: 400; }
  .hero-r { display: flex; flex-direction: column; align-items: flex-end; gap: 14px; }
  .hero-role { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); }
  .hero-scroll {
    position: absolute; left: 64px; bottom: 100px;
    writing-mode: vertical-rl;
    font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--muted); display: flex; align-items: center; gap: 12px;
  }
  .stk { width: 1px; height: 44px; background: var(--border); }

  @media (max-width: 900px) {
    .hero           { padding: 0 28px 80px; }
    .hero-top       { left: 28px; right: 28px; top: 88px; }
    .hero-scroll    { left: 28px; bottom: 80px; }
    .hero-bot       { flex-direction: column; align-items: flex-start; gap: 36px; }
    .hero-r         { align-items: flex-start; }
  }
`;

export default function Hero({ scrollTo }) {
  return (
    <>
      <style>{css}</style>
      <section className="hero" id="home">
        <div className="hero-top">
          <div className="avail fu d1">
            <div className="adot" />
            Actively looking for first job
          </div>
          <div className="hero-loc fu d1">Prayagraj, India · 2026</div>
        </div>

        <h1 className="hero-name fu d2">
          Ankit<br />
          <span className="l2">Singh<span className="la">.</span></span>
        </h1>

        <div className="hero-bot fu d3">
          <p className="hero-desc">
            <strong>BCA Graduate &amp; Aspiring Developer</strong> passionate about
            building clean, user-friendly web experiences. I learn by doing — every
            project teaches me something new.
          </p>
          <div className="hero-r">
            <p className="hero-role">Frontend Developer · Open to Work</p>
            <a className="btn-p" href="#projects" onClick={scrollTo("projects")}>
              View Projects ↓
            </a>
            <a className="btn-g" href="#contact" onClick={scrollTo("contact")}>
              Hire Me
            </a>
          </div>
        </div>

        <div className="hero-scroll fu d4">
          <div className="stk" />Scroll
        </div>
      </section>
    </>
  );
}