import React from "react";
import "./index.scss";

const Contact = () => {
  const mail = "ulrik@palmstrom.dev";
  const linkedIn = "https://www.linkedin.com";
  const facebook = "https://www.facebook.com";

  return (
    <footer>
      <h2>
        Contact me at{" "}
        <b>
          <a href={"mailto:" + mail}>{mail}</a>
        </b>
      </h2>
      <div className="social">
        <a href={linkedIn} rel="noopener noreferrer" target="_blank">
          LinkedIn
        </a>
        <a href={facebook} rel="noopener noreferrer" target="_blank">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Contact;
