import React from "react";

export default function BodyContent13() {
  return (
    <div id="contact" className="body-content13">
      <div className="text-center">
        <h2>CONTACT</h2>
        <hr />
      </div>
      <div className="contact">
        {content13Items.map((item) => (
          <Content13Items
            key={item.id}
            className={item.className}
            headline={item.headline}
            paragraph={item.paragraph}
          />
        ))}
        <div className="contact-info">
          <h2>EMAIL</h2>
          <p>
            <a href="#email">info@myemail.com</a>
          </p>
        </div>
      </div>
      <form action="#">
        <input type="text" name="name" placeholder="Name*" />
        <input type="text" name="email" placeholder="Email*" />
        <textarea placeholder="Message*"></textarea>
        <input className="send" type="submit" name="send" value="SEND" />
      </form>
    </div>
  );
}

function Content13Items(props) {
  return (
    <div className={props.className}>
      <h2>{props.headline}</h2>
      <p>{props.paragraph}</p>
    </div>
  );
}

const content13Items = [
  {
    id: 131,
    className: "contact-info",
    headline: "ADDRESS",
    paragraph: "123 Street, New York (USA)",
  },
  {
    id: 132,
    className: "contact-info",
    headline: "PHONE",
    paragraph: "+123 456 789",
  },
];
