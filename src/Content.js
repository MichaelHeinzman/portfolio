import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import { Grid } from "@mui/material";

const Content = ({ menuIsOpen, openMenu, closeMenu }) => {
  return (
    <Grid
      container
      className={`content ${menuIsOpen ? "scaled" : ""}`}
      onClick={() => menuIsOpen && closeMenu()}
      justifyContent="center"
      alignItems="center"
    >
      {/* Header */}
      <Grid className="header">
        <Grid item container xs={6} className="title small">
          Michael.dev
        </Grid>
        <Grid item container xs={6} justifyContent="flex-end">
          <img
            src="/Menubutton.svg"
            className={`menu-button ${menuIsOpen ? "inactive" : ""}`}
            alt="menu button"
            onClick={openMenu}
          />
        </Grid>
      </Grid>

      {/* Home */}
      <Home />
      {/* About Me */}
      <AboutMe />
      {/* Portfolio */}
      <Portfolio />
      {/* Contact */}
      <Contact />
    </Grid>
  );
};

export default Content;
