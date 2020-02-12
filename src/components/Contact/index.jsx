import React from "react";
import "./index.scss";

const Contact = () => {
  const mail = "ulrik@palmstrom.dev";
  return (
    <footer>
      <h2>
        Contact me at{" "}
        <b>
          <a href={"mailto:" + mail}>{mail}</a>
        </b>
      </h2>
      <div className="social">
        <a href="www.linkedin.com">LinkedIn</a>
        <a href="www.facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Contact;
