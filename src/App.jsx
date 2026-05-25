import { useEffect } from "react";
import "./styles/global.css";

import Cursor   from "./components/Cursor";
import Nav      from "./components/Nav";
import Hero     from "./components/Hero";
import Marquee  from "./components/Marquee";
import About    from "./components/About";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  // Scroll-reveal for all .rv elements
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Smooth-scroll helper — passed as prop to Nav & Hero
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Cursor />
      <Nav scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Marquee />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
