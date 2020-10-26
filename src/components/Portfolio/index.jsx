import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./prepare.js";

import "./index.scss";

const BlockContent = require("@sanity/block-content-to-react");

const Portfolio = ({ color, title, onBack, data }) => {
  console.log("render");
  return (
    <div className="Portfolio-container">
      <div className={"backlink"}>
        <button onClick={onBack}>Go back</button>
      </div>
      <main className={"Portfolio"} style={{ background: color ? color : "" }}>
        <section className="portfolio-title-container">
          <h1>{title}</h1>
        </section>
        <section className="portfolio-content">
          <ul id="portfolio-list">
            {data &&
              data.map((elem) => {
                return (
                  <li>
                    <div className="list-item-wrapper">
                      <h1>{elem.title}</h1>
                      <h2>{elem.employer}</h2>
                      <BlockContent blocks={elem.body} />
                      <a
                        href={elem.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img src={elem.imageUrl} alt="nice pic yes" />
                      </a>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default connect(mapStateToProps)(Portfolio);
