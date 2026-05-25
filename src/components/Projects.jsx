import { PROJECTS } from "../data";

const css = `
  .ph { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; }
  .ph .stitle { margin-bottom: 0; }
  .pcnt { font-size: 11px; color: var(--muted); }
  .pgrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; }
  .pcard {
    padding: 48px 44px; background: var(--surface); border: 1px solid var(--border);
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
    transition: background 0.3s, border-color 0.3s;
  }
  .pcard.ft { grid-column: span 2; }
  .pcard::after {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    transform: scaleX(0); transition: transform 0.5s ease;
  }
  .pcard:hover { background: var(--surface2); }
  .pcard:hover::after { transform: scaleX(1); }
  .pcard:hover .parr { transform: translate(5px, -5px); color: var(--accent); }
  .ptop { display: flex; justify-content: space-between; margin-bottom: 40px; }
  .pidx { font-size: 10px; letter-spacing: 0.2em; color: var(--muted); }
  .parr { font-size: 22px; color: var(--border); transition: transform 0.35s, color 0.35s; }
  .ptitle { font-family: var(--fd); font-size: 26px; font-weight: 800; letter-spacing: -0.8px; margin-bottom: 16px; }
  .pcard.ft .ptitle { font-size: 34px; }
  .pdesc { font-size: 13px; line-height: 1.8; color: var(--muted); flex: 1; margin-bottom: 36px; }
  .ptags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 36px; }
  .ptag {
    font-size: 9px; padding: 4px 11px; border: 1px solid var(--border);
    color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase;
  }
  .plrow { display: flex; gap: 20px; }
  .plnk { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); text-decoration: none; }
  .plnk.gh { color: var(--muted); }
  .plnk:hover { text-decoration: underline; }

  @media (max-width: 900px) {
    .pgrid { grid-template-columns: 1fr; }
    .pcard.ft { grid-column: span 1; }
  }
`;

export default function Projects() {
  return (
    <>
      <style>{css}</style>
      <section id="projects">
        <div className="ph rv">
          <div>
            <p className="eye" style={{ marginBottom: "14px" }}>projects</p>
            <h2 className="stitle">Selected<br />work.</h2>
          </div>
          <div className="pcnt">03 projects</div>
        </div>

        <div className="pgrid">
          {PROJECTS.map((p, i) => (
            <div key={p.num} className={`pcard ${p.ft ? "ft" : ""} rv r${Math.min(i + 1, 4)}`}>
              <div className="ptop">
                <div className="pidx">{p.num} —</div>
                <span className="parr">↗</span>
              </div>
              <h3 className="ptitle">{p.title}</h3>
              <p className="pdesc">{p.desc}</p>
              <div className="ptags">
                {p.tags.map((t) => <span key={t} className="ptag">{t}</span>)}
              </div>
              <div className="plrow">
                <a href={p.live} className="plnk">Live Demo →</a>
                <a href={p.code} className="plnk gh">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}