import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Pagesection = ({
  title,
  photo,
  disabled,
  red,
  green,
  blue,
  link,
  onHover
}) => {
  const color =
    (red ? "red" : "") || (green ? "green" : "") || (blue ? "blue" : "");

  const layout = link ? (
    <Link
      className={(disabled ? "disabled " : "") + color}
      to={{ pathname: link }}
    >
      <h1>{title}</h1>
      <img src={photo} />
    </Link>
  ) : (
    <section
      className={(disabled ? "disabled " : "") + color}
      onMouseOver={onHover}
    >
      <h1>{title}</h1>
      <img src={photo} />
    </section>
  );

  return <div className="Pagesection">{layout}</div>;
};

export default Pagesection;
