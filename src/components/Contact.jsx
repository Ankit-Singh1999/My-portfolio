import { SOCIALS } from "../data";

const css = `
  .ct-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 100px; }
  .ct-big {
    font-family: var(--fd); font-size: clamp(26px, 3.8vw, 54px);
    font-weight: 800; letter-spacing: -1.5px; line-height: 1.05;
    color: var(--text); text-decoration: none; display: block;
    margin-bottom: 44px; padding-bottom: 28px;
    border-bottom: 1px solid var(--border);
    transition: color 0.2s;
  }
  .ct-big:hover { color: var(--accent); }
  .ct-note { font-size: 14px; line-height: 1.85; color: var(--muted); margin-bottom: 40px; }
  .ct-acts { display: flex; gap: 12px; flex-wrap: wrap; }
  .soc-col { display: flex; flex-direction: column; }
  .soc-col a {
    display: flex; justify-content: space-between; align-items: center;
    padding: 20px 0; border-bottom: 1px solid var(--border);
    color: var(--muted); text-decoration: none; font-size: 13px;
    transition: color 0.2s;
  }
  .soc-col a:first-child { border-top: 1px solid var(--border); }
  .soc-col a:hover { color: var(--text); }
  .soc-col a:hover .sarr { color: var(--accent); transform: translate(4px, -4px); }
  .soc-nm { display: flex; align-items: center; gap: 10px; }
  .soc-h  { font-size: 11px; color: var(--muted); }
  .sarr   { font-size: 18px; transition: transform 0.25s, color 0.25s; color: var(--muted); }

  @media (max-width: 900px) { .ct-grid { grid-template-columns: 1fr; gap: 56px; } }
`;

export default function Contact() {
  return (
    <>
      <style>{css}</style>
      <section id="contact">
        <p className="eye rv">contact</p>
        <h2 className="stitle rv r1">Let's build<br />something.</h2>

        <div className="ct-grid">
          <div className="rv r2">
            <p className="ct-note">
              I'm actively looking for my first job as a frontend developer. If you
              have an opportunity, an internship, or just want to say hi — I'd love
              to hear from you!
            </p>
            <a href="mailto:ankitsingh2017dec@gmail.com" className="ct-big">
              ankitsingh2017dec@gmail.com
            </a>
            <div className="ct-acts">
              <a className="btn-p" href="mailto:ankitsingh2017dec@gmail.com">Send Message →</a>
              <a className="btn-g" href="#">Download CV</a>
            </div>
          </div>

          <div className="soc-col rv r3">
            {SOCIALS.map(([name, handle, url]) => (
              <a key={name} href={`https://${url}`} target="_blank" rel="noopener noreferrer">
                <div className="soc-nm">
                  <span>{name}</span>
                  <span className="soc-h">{handle}</span>
                </div>
                <span className="sarr">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}