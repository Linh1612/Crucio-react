import React, { useState, useEffect } from "react";

export default function BodyContent9() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY >= 5023) {
        setStart(true);
      }
    };
    window.addEventListener("scroll", handleScoll);
  });
  return (
    <div className="body-content9">
      {start && (
        <>
          <h3 className="topToBottom">Subscribe To Our Newsletter</h3>
          <form action="#">
            <input
              className="input-text leftToCenter"
              type="text"
              placeholder="Enter your email..."
              name="gmail"
            />
            <br />
            <input
              className="input-submit bottomToTop"
              type="submit"
              name="Subscribe"
              value="SUBSCRIBE"
            />
          </form>
        </>
      )}
    </div>
  );
}
