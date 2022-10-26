import React, { useState, useEffect } from "react";

export default function BodyContent6() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY >= 2960) {
        setStart(true);
      }
    };
    window.addEventListener("scroll", handleScoll);
  });

  return (
    <div id="team" className="body-content6">
      <div className="text-center">
        <h2>OUR TEAM</h2>
        <hr />
      </div>
      <div className="team">
        {start &&
          content6Items.map((item) => (
            <Content6Items
              key={item.id}
              parent={item.parent}
              father={item.father}
              name={item.name}
              role={item.role}
              children={item.children}
              icon1={item.icon1}
              icon2={item.icon2}
              icon3={item.icon3}
              icon4={item.icon4}
            />
          ))}
      </div>
    </div>
  );
}

function Content6Items(props) {
  return (
    <div className={props.parent}>
      <div className={props.father}>
        <h2 className="topToBottom">{props.name}</h2>
        <p className="bottomToTop">{props.role}</p>
        <div className={props.children}>
          <ul>
            <li>
              <iconify-icon icon={props.icon1}></iconify-icon>
            </li>
            <li>
              <iconify-icon icon={props.icon2}></iconify-icon>
            </li>
            <li>
              <iconify-icon icon={props.icon3}></iconify-icon>
            </li>
            <li>
              <iconify-icon icon={props.icon4}></iconify-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const content6Items = [
  {
    id: 61,
    parent: "bg-1 leftToCenter",
    father: "person-info",
    name: "SAMANTA L.",
    role: "Architect",
    children: "info",
    icon1: "bxl:facebook-square",
    icon2: "akar-icons:twitter-fill",
    icon3: "akar-icons:instagram-fill",
    icon4: "akar-icons:linkedin-box-fill",
  },
  {
    id: 62,
    parent: "bg-2 topToBottom",
    father: "person-info",
    name: "PAMELA K.",
    role: "Designer",
    children: "info",
    icon1: "bxl:facebook-square",
    icon2: "akar-icons:twitter-fill",
    icon3: "akar-icons:instagram-fill",
    icon4: "akar-icons:linkedin-box-fill",
  },
  {
    id: 63,
    parent: "bg-3 rightToCenter",
    father: "person-info",
    name: "MICHEAL J.",
    role: "Planner",
    children: "info",
    icon1: "bxl:facebook-square",
    icon2: "akar-icons:twitter-fill",
    icon3: "akar-icons:instagram-fill",
    icon4: "akar-icons:linkedin-box-fill",
  },
];
