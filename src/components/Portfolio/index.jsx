import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

const BlockContent = require("@sanity/block-content-to-react");

const Portfolio = ({ color, client, title }) => {
  const [exiting, setExiting] = useState(false);
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

    const query = `*[_type == '${project()}']`;
    (async () => {
      const data = await client.fetch(query);
      setData(data);
    })();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="Portfolio-container">
      <main
        style={{ background: color ? color : "" }}
        className={"Portfolio " + (exiting ? "exiting" : "")}
      >
        <div className="backlink">
          <button
            onClick={() => {
              setExiting(true);
              setTimeout(() => history.push("/"), 400);
            }}
          >
            Go back
          </button>
        </div>
        <h1>{title}</h1>
        <section>
          <ul>
            {data &&
              data.map(elem => {
                console.log(elem);
                return (
                  <li>
                    <h1>{elem.title}</h1>
                    <h2>{elem.employer}</h2>
                    <BlockContent blocks={elem.body} />
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
