import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.scss";
import "./transition.scss";

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

  return (
    <div className="Portfolio-container">
      <div className={"backlink " + (exiting ? "exiting" : null)}>
        <button
          onClick={() => {
            setExiting(true);
            setTimeout(() => history.push("/"), 400);
          }}
        >
          Go back
        </button>
      </div>
      <main
        className={"Portfolio " + (exiting ? "exiting" : "")}
        style={{ background: color ? color : "" }}
      >
        <section className="portfolio-title-container">
          <h1>{title}</h1>
        </section>
        <section className="portfolio-content">
          <TransitionGroup>
            <CSSTransition classNames="portfolio" key={data} timeout={500}>
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
            </CSSTransition>
          </TransitionGroup>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
