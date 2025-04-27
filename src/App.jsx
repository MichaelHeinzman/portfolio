import { useCallback, useState } from "react";
import Menu from "./components/Menu";
import StackedPages from "./components/StackedPages";

import "./css/App.css";
import "./css/Styles.css";

function App() {
  const [menu, setMenu] = useState(false);
  const openAndCloseMenu = useCallback((open) => setMenu(open), []);

  return (
    <div className="App">
      <StackedPages
        menuIsOpen={menu}
        closeMenu={() => openAndCloseMenu(false)}
        openMenu={() => openAndCloseMenu(true)}
      />
      <Menu closeMenu={() => openAndCloseMenu(false)} menu={menu} />
    </div>
  );
}

export default App;
