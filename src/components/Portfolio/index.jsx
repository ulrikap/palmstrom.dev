import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";

import "./index.scss";

const BlockContent = require("@sanity/block-content-to-react");

const Portfolio = ({ color, client, title }) => {
  const [data, setData] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const location = history.location.pathname;
    const project = () => {
      switch (location) {
        case "/uxdesign":
          return "uxProject";
        case "/developer":
          return "developerProject";
        case "/infosec":
          return "infosecProject";
      }
    };

    const query = `*[_type == '${project()}']{
      ...,
      "imageUrl": mainImage.asset->url
    }`;
    (async () => {
      const data = await client.fetch(query);
      setData(data);
    })();
  }, []);

  return (
    <div className="Portfolio-container">
      <div className={"backlink"}>
        <button onClick={() => history.push("/")}>Go back</button>
      </div>
      <main className={"Portfolio"} style={{ background: color ? color : "" }}>
        <section className="portfolio-title-container">
          <h1>{title}</h1>
        </section>
        <section className="portfolio-content">
          <ul id="portfolio-list">
            {data &&
              data.map(elem => {
                return (
                  <li>
                    <div className="list-item-wrapper">
                      <h1>{elem.title}</h1>
                      <h2>{elem.employer}</h2>
                      <BlockContent blocks={elem.body} />
                      <a href={elem.url} target="_blank">
                        <img src={elem.imageUrl} />
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

export default Portfolio;
