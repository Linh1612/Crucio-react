import React from "react";

export default function BodyContent4() {
  return (
    <div id="services" className="body-content4">
      <div className="text-center">
        <h2>SERVICES</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
          cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>
      <div className="text-logo">
        {content4Items1.map((item) => (
          <Content4Items1
            key={item.id}
            father={item.father}
            children={item.children}
            className={item.className}
            headline={item.headline}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="text-logo">
        {content4Items2.map((item) => (
          <Content4Items2
            key={item.id}
            father={item.father}
            children={item.children}
            className={item.className}
            headline={item.headline}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

function Content4Items1(props) {
  return (
    <div className={props.father}>
      <div className={props.children}>
        <iconify-icon icon={props.icon}></iconify-icon>
        <h4>{props.headline}</h4>
      </div>
    </div>
  );
}

function Content4Items2(props) {
  return (
    <div className={props.father}>
      <div className={props.children}>
        <iconify-icon icon={props.icon}></iconify-icon>
        <h4>{props.headline}</h4>
      </div>
    </div>
  );
}

const content4Items1 = [
  {
    id: 41,
    father: "text",
    children: "logo",
    icon: "ion:desktop-outline",
    headline: "WEB DESIGN",
  },
  {
    id: 42,
    father: "text",
    children: "logo",
    icon: "ion:albums",
    headline: "BRAND DESIGN",
  },
  {
    id: 43,
    father: "text",
    children: "logo",
    icon: "eva:keypad-fill",
    headline: "UI/UX DESIGN",
  },
  {
    id: 44,
    father: "text",
    children: "logo",
    icon: "ion:color-palette",
    headline: "GRAPHIC DESIGN",
  },
];

const content4Items2 = [
  {
    id: 41,
    father: "text",
    children: "logo",
    icon: "ant-design:camera-filled",
    headline: "PHOTOGRAPHY",
  },
  {
    id: 42,
    father: "text",
    children: "logo",
    icon: "ic:baseline-videocam",
    headline: "VIDEO EDITING",
  },
  {
    id: 43,
    father: "text",
    children: "logo",
    icon: "ion:pulse",
    headline: "DATA ANALYSIS",
  },
  {
    id: 44,
    father: "text",
    children: "logo",
    icon: "bi:person-fill",
    headline: "CLIENT ASSISTANCE",
  },
];
