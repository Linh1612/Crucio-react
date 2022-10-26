import React, { useState, useEffect } from "react";

export default function BodyContent11() {
  const data = [
    {
      id: 0,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "- Jim P. -",
    },
    {
      id: 1,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "- John K. -",
    },
    {
      id: 2,
      value:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "- Morgan F. -",
    },
  ];

  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="body-content11">
      <div className="text-center">
        <h3>TESTIMONIALS</h3>
        <hr />
        <section className="section">
          <div className="section-center">
            {people.map((item, indexPeople) => {
              const { id, value, name } = item;
              let position = "nextSlide";
              if (indexPeople === index) {
                position = "activeSlide";
              }
              if (
                indexPeople === index - 1 ||
                (index === 0 && indexPeople === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={position} key={id}>
                  <p className="title">{value}</p>
                  <h4>
                    <i>{name}</i>
                  </h4>
                </article>
              );
            })}
          </div>
        </section>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          <i>-Jim P.-</i>
        </p> */}
      </div>
    </div>
  );
}
