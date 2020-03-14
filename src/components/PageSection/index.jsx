import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

const Pagesection = ({ title, disabled, red, green, blue, link, onHover }) => {
  const history = useHistory();
  const color =
    (red ? "red" : "") || (green ? "green" : "") || (blue ? "blue" : "");

  const layout = link ? (
    <section className={disabled ? "disabled " : ""}>
      <h1 className={"titletext " + color} onClick={() => history.push(link)}>
        {title}
      </h1>
    </section>
  ) : (
    <section className={disabled ? "disabled " : ""} onMouseOver={onHover}>
      <h1 className={"titletext " + color}>{title}</h1>
    </section>
  );

  return <div className="Pagesection">{layout}</div>;
};

export default Pagesection;
