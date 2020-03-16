import React from "react";
import "./index.scss";
import "./transition.scss";

const Footer = ({ show }) => {
  return (
    <>
      <div className={"footer-container " + (show ? "show" : null)}>
        <ul>
          <li>Test halla</li>
          <li>Test halla</li>
          <li>Test halla</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
