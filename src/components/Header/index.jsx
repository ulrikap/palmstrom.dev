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
      </div>
    </header>
  );
}

export default Header;
