import React from "react";
import "./index.scss";

import Header from "../../components/Header/index";
import Contact from "../../components/Contact";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Pagesection from "../../components/PageSection";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});

const Frontpage = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container className={classes.root}>
        <Pagesection
          {...{
            text: "UX Designer",
            backgroundColor: "#FFA400",
            id: "uxdesign",
          }}
        />
        <Pagesection
          {...{
            text: "Developer",
            backgroundColor: "#3D5A80",
            id: "developer",
          }}
        />
        <Pagesection
          {...{
            text: "Cyber security student",
            backgroundColor: "#2C423F",
            id: "infosec",
          }}
        />
      </Grid>
      <Contact />
    </>
  );
};

export default Frontpage;
