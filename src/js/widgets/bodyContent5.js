import React from "react";
import { useState, useEffect } from "react";

export default function BodyContent5() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY >= 2222) {
        setStart(true);
      }
    };
    window.addEventListener("scroll", handleScoll);
  });

  return (
    <div className="body-content5">
      {start && (
        <div className="title-btn">
          <h2 className="leftToCenter">
            WE CREATE <strong>AWESOME</strong> PROJECTS
          </h2>
          <button className="bottomToTop">GET STARTED</button>
        </div>
      )}
    </div>
  );
}
