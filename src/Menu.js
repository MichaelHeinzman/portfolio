import React from "react";
import "./CSS/Menu.css";
const Menu = ({ closeMenu, menu }) => {
  const tabClicked = (link, event) => {
    event.preventDefault();
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
    closeMenu();
    window.history.pushState(null, null, link);
  };
  return (
    <div className="menu">
      {/* Close Button */}
      <div className="close-button-container">
        <div
          className={`close-button ${menu ? "" : "inactive"}`}
          onClick={closeMenu}
        >
          X
        </div>
      </div>
      {/* Tabs */}
      <div className="tab-container">
        <a
          href="#Home"
          className={`tab ${menu ? "" : "inactive"}`}
          onClick={(e) => tabClicked("#Home", e)}
        >
          Home
        </a>
        <a
          href="#AboutMe"
          className={`tab ${menu ? "" : "inactive"}`}
          onClick={(e) => tabClicked("#AboutMe", e)}
        >
          About Me
        </a>
        <a
          href="#Portfolio"
          className={`tab ${menu ? "" : "inactive"}`}
          onClick={(e) => tabClicked("#Portfolio", e)}
        >
          Portfolio
        </a>
        <a
          href="#Contact"
          className={`tab ${menu ? "" : "inactive"}`}
          onClick={(e) => tabClicked("#Contact", e)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
