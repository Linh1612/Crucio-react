import React, { useState, useEffect } from "react";

export default function BodyContent8() {
  const listTag = ["all", "graphicDesign", "webDesign", "webDevelopment"];
  const titleTag = ["All", "Graphic Design", "Web Design", "Web Development"];
  const [type, setType] = useState(listTag[0]);
  const [loadmore, setLoadmore] = useState(false);

  const [start, setStart] = useState(false);
  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY >= 4320) {
        setStart(true);
      }
    };
    window.addEventListener("scroll", handleScoll);
  });

  useEffect(() => {}, [type]);

  const moreImg = [8];
  const detailImg = {
    all: [0, 1, 2, 3, 4, 5, 6, 7],
    graphicDesign: [2, 5, 6, 7],
    webDesign: [0, 3, 4, 5, 6],
    webDevelopment: [1, 3],
  };

  return (
    <div id="portfolio" className="body-content8">
      <div className="text-center">
        <h2>OUR PORTFOLIO</h2>
        <hr />
      </div>
      <div className="taskbar">
        <ul>
          {listTag.map((item, index) => (
            <li key={item}>
              <a href={"#" + item} onClick={() => setType(item)}>
                {titleTag[index]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="works">
        {start &&
          detailImg[type].map((item, index) => (
            <Content8Items
              key={index}
              parent={content8Items[item].parent}
              father={content8Items[item].father}
              children={content8Items[item].children}
              headline={content8Items[item].headline}
              paragraph={content8Items[item].paragraph}
            />
          ))}
        {
          (type === "all" || type === "webDesign") && loadmore
            ? moreImg.map((item, index) => (
                <Content8Items
                  key={index}
                  parent={content8Items[item].parent}
                  father={content8Items[item].father}
                  children={content8Items[item].children}
                  headline={content8Items[item].headline}
                  paragraph={content8Items[item].paragraph}
                />
              ))
            : ""

          //       content8Items.map((item) =>
          //       <Content8Items key = {item.id}
          //       parent = {item.parent}
          //       father = {item.father}
          //       children = {item.children}
          //       headline = {item.headline}
          //       paragraph = {item.paragraph}
          //   />
          //   )
        }
      </div>
      {(type === "all" || type === "webDesign") && !loadmore ? (
        <div className="bg-btn">
          <button className="btn" onClick={() => setLoadmore(!loadmore)}>
            LOAD MORE
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function Content8Items(props) {
  return (
    <div className={props.parent}>
      <div className={props.father}>
        <div className={props.children}>
          <h2>{props.headline}</h2>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

const content8Items = [
  {
    id: 81,
    parent: "work-1 rightToCenter",
    father: "bg-1",
    children: "work-info",
    headline: "Project #1",
    paragraph: "Project Description",
  },
  {
    id: 82,
    parent: "work-2 rightToCenter",
    father: "bg-2",
    children: "work-info",
    headline: "Project #2",
    paragraph: "Project Description",
  },
  {
    id: 83,
    parent: "work-3 rightToCenter",
    father: "bg-3",
    children: "work-info",
    headline: "Project #3",
    paragraph: "Project Description",
  },
  {
    id: 84,
    parent: "work-4 rightToCenter",
    father: "bg-4",
    children: "work-info",
    headline: "Project #4",
    paragraph: "Project Description",
  },
  {
    id: 85,
    parent: "work-5 rightToCenter",
    father: "bg-5",
    children: "work-info",
    headline: "Project #5",
    paragraph: "Project Description",
  },
  {
    id: 86,
    parent: "work-6 rightToCenter",
    father: "bg-6",
    children: "work-info",
    headline: "Project #6",
    paragraph: "Project Description",
  },
  {
    id: 87,
    parent: "work-7 rightToCenter",
    father: "bg-7",
    children: "work-info",
    headline: "Project #7",
    paragraph: "Project Description",
  },
  {
    id: 88,
    parent: "work-8 rightToCenter",
    father: "bg-8",
    children: "work-info",
    headline: "Project #8",
    paragraph: "Project Description",
  },

  {
    id: 89,
    parent: "work-9 rightToCenter",
    father: "bg-9",
    children: "work-info",
    headline: "Project #9",
    paragraph: "Project Description",
  },
];
