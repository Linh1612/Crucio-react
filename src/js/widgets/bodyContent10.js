import React, { useState, useEffect } from "react";

export default function BodyContent10() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY >= 5379) {
        setStart(true);
      }
    };
    window.addEventListener("scroll", handleScoll);
  });
  return (
    <div className="body-content10">
      {start && (
        <div className="title-btn">
          <h2 className="leftToCenter">WANT TO DISCUSS YOUR NEW PROJECT?</h2>
          <button className="bottomToTop">CONTACT US</button>
        </div>
      )}
    </div>
  );
}
