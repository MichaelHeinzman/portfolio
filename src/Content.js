import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
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
            src="/assets/svg/Menubutton.svg"
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
