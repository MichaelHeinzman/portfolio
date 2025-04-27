// StackedPages.jsx
import React, { useState } from "react";
import StackedPage from "./StackedPage";

const DEFAULT_PAGES = [
  {
    key: "work-content",
    label: "Work",
    Component: React.lazy(() => import("../pages/WorkContent")),
  },
  {
    key: "stream-content",
    label: "Content Creation",
    Component: React.lazy(() => import("../pages/StreamContent")),
  },
  // {
  //   key: "life-content",
  //   label: "Life",
  //   Component: React.lazy(() => import("../pages/LifeContent")),
  // },
];

export default function StackedPages({
  pages = DEFAULT_PAGES,
  menuIsOpen,
  closeMenu,
  openMenu,
}) {
  const [orderedPages, setOrderedPages] = useState(pages);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSelect = (key) => {
    setOrderedPages((prev) => {
      const picked = prev.find((p) => p.key === key);
      const rest = prev.filter((p) => p.key !== key);
      return [picked, ...rest];
    });
    closeMenu();
  };

  return (
    <div
      className="stacked-pages"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      {orderedPages.map((page, idx) => (
        <StackedPage
          key={page.key}
          PageComponent={page.Component}
          label={page.label}
          menuIsOpen={menuIsOpen}
          openMenu={openMenu}
          index={idx}
          order={orderedPages.length - idx}
          selected={idx === 0}
          hoveredIndex={hoveredIndex}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onSelect={() => handleSelect(page.key)}
        />
      ))}
    </div>
  );
}
