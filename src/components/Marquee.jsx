import { MQ_ITEMS } from "../data";

const css = `
  .mq {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    overflow: hidden; padding: 16px 0;
    background: var(--surface);
  }
  .mq-inner { display: flex; white-space: nowrap; animation: mq 24s linear infinite; }
  .mq-item {
    padding: 0 36px;
    font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--muted); display: inline-flex; align-items: center; gap: 36px;
  }
  .mq-sep { color: var(--accent); }
  @keyframes mq {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
`;

export default function Marquee() {
  const items = [...MQ_ITEMS, ...MQ_ITEMS]; // duplicate for seamless loop

  return (
    <>
      <style>{css}</style>
      <div className="mq">
        <div className="mq-inner">
          {items.map((item, i) => (
            <span key={i} className="mq-item">
              {item}<span className="mq-sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}