import React from "react";
import "../css/LayoutHelper.css";
import { useInView } from "react-intersection-observer";

const LayoutHelper = ({
  id,
  background,
  children,
  width,
  fullView,
  height,
  centerOfPage,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.01, // Set intersection threshold for triggering animation
  });
  return (
    <section
      id={id}
      className={[
        "layout-helper",
        background ? "backgroundOne" : "backgroundTwo",
        centerOfPage ? "center-page" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        minHeight: fullView ? "100vh" : height || "auto",
      }}
      ref={ref}
    >
      <div
        className="layout-inner"
        style={{
          // width prop maps columns out of 12 → percentage
          width: width ? `${(width / 12) * 100}%` : "66.666%",
        }}
      >
        {inView && children}
      </div>
    </section>
  );
};

export default LayoutHelper;
