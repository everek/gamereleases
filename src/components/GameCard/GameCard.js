import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  systems: {
    display: "flex",
    alignItems: "left",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  cover: {
    width: 150,
    height: 200,
    marginLeft: "auto",
  },
}));

export default function GameCard({ title, cover, releaseDate, systems }) {
  const classes = useStyles();
  const theme = useTheme();

  const ReleaseDate = () => {
    if (releaseDate) {
      return (
        <Typography variant="subtitle1" color="textSecondary">
          {dayjs(releaseDate).format("DD. MMMM YYYY")}
        </Typography>
      );
    } else {
      return (
        <Typography variant="subtitle1" color="textSecondary">
          No Release Date
        </Typography>
      );
    }
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <ReleaseDate />
        </CardContent>
        <div className={classes.systems}>
          {systems.map((system) => {
            return (
              <Chip
                className={classes.chip}
                key={system.system.uid}
                size="small"
                label={system.system.title}
              />
            );
          })}
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={cover}
        title="Live from space album cover"
      />
    </Card>
  );
}
