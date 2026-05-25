import { SKILLS, STATS, EDU } from "../data";

const css = `
  .ab-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 96px; align-items: start; }
  .ab-text { font-size: 15px; line-height: 2; color: var(--muted); }
  .ab-text p + p { margin-top: 22px; }
  .ab-text strong { color: var(--text); font-weight: 400; }
  .tags-label {
    font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 16px; margin-top: 48px;
  }
  .tag-row { display: flex; flex-wrap: wrap; gap: 6px; }
  .tag {
    padding: 7px 14px; border: 1px solid var(--border);
    font-size: 11px; color: var(--muted);
    transition: all 0.2s; cursor: default;
  }
  .tag:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
  .stats-col { display: flex; flex-direction: column; gap: 2px; }
  .sbox {
    padding: 30px 28px; background: var(--surface); border: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: flex-end;
    transition: border-color 0.25s, background 0.25s;
  }
  .sbox:hover { border-color: var(--accent); background: var(--surface2); }
  .sn { font-family: var(--fd); font-size: 52px; font-weight: 800; color: var(--accent); line-height: 1; letter-spacing: -2px; }
  .sl { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
  .exp-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 24px 0; border-bottom: 1px solid var(--border);
    transition: padding-left 0.25s;
  }
  .exp-row:first-child { border-top: 1px solid var(--border); }
  .exp-row:hover { padding-left: 14px; }
  .exp-role { font-family: var(--fd); font-size: 18px; font-weight: 700; letter-spacing: -0.3px; }
  .exp-co   { font-size: 11px; color: var(--muted); margin-top: 4px; }
  .exp-yr   { font-size: 11px; color: var(--muted); letter-spacing: 0.08em; }

  @media (max-width: 900px) { .ab-grid { grid-template-columns: 1fr; gap: 56px; } }
`;

export default function About() {
  return (
    <>
      <style>{css}</style>
      <section id="about">
        <p className="eye rv">about</p>
        <h2 className="stitle rv r1">The person<br />behind the code.</h2>

        <div className="ab-grid">
          <div>
            <div className="ab-text rv r2">
              <p>
                I'm <strong>Ankit Singh</strong>, a freshly graduated BCA student from{" "}
                <strong>Prayagraj, India</strong>. I discovered my love for web
                development during my degree and haven't stopped building since.
              </p>
              <p>
                I enjoy turning ideas into real, working products — even simple projects
                like a calculator taught me to think like a developer. I'm currently
                deepening my skills in <strong>React and JavaScript</strong>, and
                actively looking for my first opportunity to contribute to a team.
              </p>
              <p>
                I'm a fast learner, not afraid to Google, and genuinely excited about
                writing clean, purposeful code.
              </p>
            </div>
            <div className="rv r3">
              <div className="tags-label">Tech Stack</div>
              <div className="tag-row">
                {SKILLS.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>

          <div className="stats-col rv r2">
            {STATS.map(([n, l]) => (
              <div key={l} className="sbox">
                <div className="sn">{n}</div>
                <div className="sl">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "96px" }}>
          <p className="eye rv" style={{ marginBottom: "32px" }}>education</p>
          <div className="rv r1">
            {EDU.map((e) => (
              <div key={e.deg} className="exp-row">
                <div>
                  <div className="exp-role">{e.deg}</div>
                  <div className="exp-co">{e.inst}</div>
                </div>
                <div className="exp-yr">{e.yr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}