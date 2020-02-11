import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

const Portfolio = ({ color, endpoint, title }) => {
  const [exiting, setExiting] = useState(false);
  const history = useHistory();

  useEffect(() => {
    //Fetch data from sanity
  }, []);

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
            {
              //Render list here
            }
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
