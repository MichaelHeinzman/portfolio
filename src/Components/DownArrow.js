import "../CSS/DownArrow.css";

const DownArrow = ({ page, activeSelection, nextPage }) => {
  const tabClicked = (link, event) => {
    event.preventDefault();
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
    window.history.pushState(null, null, link);
  };

  console.log(activeSelection, page);
  return (
    activeSelection === page && (
      <img
        src="/downArrow.svg"
        alt="down arrow"
        className="down-arrow"
        onClick={(e) => tabClicked(nextPage, e)}
      />
    )
  );
};

export default DownArrow;
