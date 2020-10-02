import React from "react";
import Container from "@material-ui/core/Container";
import Navigation from "../Navigation/Navigation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Container className={classes.root} maxWidth="xl">
        {children}
      </Container>
    </>
  );
}
