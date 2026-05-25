const css = `
  footer {
    padding: 32px 64px; border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    z-index: 1; position: relative;
  }
  .fl { font-size: 11px; color: var(--muted); }
  .fl span { color: var(--accent); }
  .btop {
    font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--muted); background: none; border: none; cursor: none;
    font-family: var(--fm); transition: color 0.2s;
    display: flex; align-items: center; gap: 8px;
  }
  .btop::before { content: ''; width: 24px; height: 1px; background: currentColor; }
  .btop:hover { color: var(--accent); }

  @media (max-width: 900px) {
    footer { padding: 24px 28px; flex-direction: column; gap: 16px; text-align: center; }
  }
`;

export default function Footer() {
  return (
    <>
      <style>{css}</style>
      <footer>
        <p className="fl">
          © 2026 Ankit Singh — BCA Graduate · Prayagraj <span>✦</span> Built with React
        </p>
        <button
          className="btop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </button>
      </footer>
    </>
  );
}