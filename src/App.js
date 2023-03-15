import { useCallback, useState } from "react";
import "./CSS/App.css";
import Content from "./Content";
import Menu from "./Menu";
import "./CSS/Styles.css";
function App() {
  const [menu, setMenu] = useState(true);
  const openAndCloseMenu = useCallback((open) => {
    setMenu(open ? true : false);
  }, []);

  return (
    <div className="App">
      <Content
        menuIsOpen={menu}
        openMenu={() => openAndCloseMenu(true)}
        closeMenu={() => openAndCloseMenu(false)}
      />
      <Menu closeMenu={() => openAndCloseMenu(false)} menu={menu} />
      <div className={`content-depth ${menu ? "scaled" : ""}`}>
        <div className="content-depth-item"></div>
      </div>
    </div>
  );
}

export default App;
