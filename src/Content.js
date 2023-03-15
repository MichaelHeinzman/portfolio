import "./CSS/Content.css";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

const Content = ({ menuIsOpen, openMenu, closeMenu }) => {
  return (
    <div
      className={`content ${menuIsOpen ? "scaled" : ""}`}
      onClick={() => menuIsOpen && closeMenu()}
    >
      {/* Header */}
      <div className="header">
        <div className="content-title">Michael.dev</div>
        <img
          src="/Menubutton.svg"
          className={`menu-button ${menuIsOpen ? "inactive" : ""}`}
          alt="menu button"
          onClick={openMenu}
        />
      </div>

      {/* Home */}
      <Home />
      {/* About Me */}
      <AboutMe />
      {/* Portfolio */}
      <Portfolio />
      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Content;
