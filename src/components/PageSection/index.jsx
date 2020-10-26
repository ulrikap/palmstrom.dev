import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, CircularProgress } from "@material-ui/core";
import { mapStateToProps } from "./prepare.js";
import { connect } from "react-redux";
import store from "../../redux/store";

const useStyles = makeStyles(() => ({
  item: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));

const Pagesection = ({
  text,
  backgroundColor,
  onclick,
  id,
  loading,
  selectedPage,
  ...rest
}) => {
  const classes = useStyles();
  const isSelected = selectedPage.page === id;
  const onClick = () => (isSelected ? null : store.dispatch(onclick(id)));
  return (
    <Grid
      item
      md={isSelected ? 12 : 6}
      xs={12}
      className={classes.item}
      style={{
        backgroundColor,
        height: isSelected ? "100%" : "50%",
        transition: "0.5s ease-in-out",
      }}
      onClick={onClick}
    >
      <Typography variant={"h3"}>{text}</Typography>
      <br />
      {loading && isSelected ? <CircularProgress /> : null}
    </Grid>
  );
};

export default connect(mapStateToProps)(Pagesection);
