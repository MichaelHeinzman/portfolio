import TextLayoutHelper from "./TextLayoutHelper";
import "../css/Content.css";

export default function StackedPage({
  PageComponent,
  menuIsOpen,
  index,
  order,
  selected,
  hoveredIndex,
  onMouseEnter,
  onMouseLeave,
  onSelect,
  openMenu,
  label,
}) {
  const baseScale = 0.65;
  const translateStart = -50;
  const translateStep = 10;
  const slideOffset = 50; // how much to slide left on hover

  // compute the “fan” position
  const baseTranslate = translateStart + index * translateStep;

  // if menu is open and someone else is hovered *above* us, shift left
  const extraShift =
    menuIsOpen && hoveredIndex !== null && index < hoveredIndex
      ? -slideOffset
      : 0;

  // final transform
  const transform = menuIsOpen
    ? `scale(${baseScale}) translateX(${baseTranslate + extraShift}%)`
    : "scale(1) translateX(0)";

  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: order,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform,
    boxShadow: menuIsOpen ? "0 10px 20px rgba(0,0,0,0.3)" : "none",
    opacity: menuIsOpen || selected ? 1 : 0,
    pointerEvents: menuIsOpen || selected ? "auto" : "none",
  };

  return (
    <div
      className="content"
      style={style}
      onClick={menuIsOpen ? onSelect : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="header relative flex items-center justify-between px-4 py-2">
        <div className="title small">Michael.dev</div>

        <div className="menu-container">
          <TextLayoutHelper text={label} className="title page-title small" />
          <img
            src="/assets/svg/Menubutton.svg"
            className={`menu-button ${menuIsOpen ? "inactive" : ""}`}
            alt="menu button"
            onClick={openMenu}
          />
        </div>
      </div>

      <PageComponent />
    </div>
  );
}
