import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <h1>
          <Link to="/">Ulrik Palmstrøm</Link>
        </h1>
        {/*<h2>Click categories to see some work I've done</h2>*/}
      </div>
    </header>
  );
}

export default Header;
