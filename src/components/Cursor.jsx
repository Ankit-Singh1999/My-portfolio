import { useState, useEffect, useRef } from "react";

const css = `
  .cdot {
    position: fixed; z-index: 9999; pointer-events: none;
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--accent); transform: translate(-50%, -50%);
    mix-blend-mode: difference;
  }
  .cring {
    position: fixed; z-index: 9998; pointer-events: none;
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid rgba(200,255,51,0.35);
    transform: translate(-50%, -50%);
    transition: width 0.25s, height 0.25s, border-color 0.25s;
  }
  .cring.h { width: 54px; height: 54px; border-color: var(--accent); }

  @media (max-width: 900px) { .cdot, .cring { display: none; } }
`;

export default function Cursor() {
  const [dot,  setDot]  = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hov,  setHov]  = useState(false);
  const target = useRef({ x: -100, y: -100 });
  const raf    = useRef(null);

  useEffect(() => {
    const mv = (e) => {
      setDot({ x: e.clientX, y: e.clientY });
      target.current = { x: e.clientX, y: e.clientY };
    };
    const hv = (e) =>
      setHov(!!e.target.closest("a,button,.pcard,.tag,.sbox,.exp-row"));

    window.addEventListener("mousemove", mv);
    window.addEventListener("mouseover", hv);

    const loop = () => {
      setRing((p) => ({
        x: p.x + (target.current.x - p.x) * 0.13,
        y: p.y + (target.current.y - p.y) * 0.13,
      }));
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("mouseover", hv);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="cdot" style={{ left: dot.x, top: dot.y }} />
      <div className={`cring ${hov ? "h" : ""}`} style={{ left: ring.x, top: ring.y }} />
    </>
  );
}