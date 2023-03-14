import React, { useEffect, useRef, useState } from "react";
import "./CSS/Content.css";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

const Content = ({ menuIsOpen, openMenu, closeMenu }) => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = useRef([homeRef, aboutMeRef, portfolioRef, contactRef]);
  const [activeSelection, setActiveSelection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anchorLink = `#${entry.target.id}`;
            setActiveSelection(entry.target.id);
            window.history.pushState(null, null, anchorLink);
          }
        });
      },
      { threshold: 0.9 }
    );

    const sectionRefsCopy = sectionRefs.current.slice();
    sectionRefsCopy.forEach((sectionRef) => {
      observer.observe(sectionRef.current);
    });

    return () => {
      sectionRefsCopy.forEach((sectionRef) => {
        observer.unobserve(sectionRef.current);
      });
    };
  }, []);

  return (
    <div
      className={`content ${menuIsOpen ? "scaled" : ""}`}
      onClick={() => menuIsOpen && closeMenu()}
    >
      {/* Header */}
      <div className="header">
        <div className="title">Michael.dev</div>
        <img
          src="/Menubutton.svg"
          className={`menu-button ${menuIsOpen ? "inactive" : ""}`}
          alt="menu button"
          onClick={openMenu}
        />
      </div>

      {/* Home */}
      <Home homeRef={homeRef} activeSelection={activeSelection} />
      {/* About Me */}
      <AboutMe aboutMeRef={aboutMeRef} activeSelection={activeSelection} />
      {/* Portfolio */}
      <Portfolio
        portfolioRef={portfolioRef}
        activeSelection={activeSelection}
      />
      {/* Contact */}
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Content;
