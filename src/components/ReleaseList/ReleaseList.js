import React from "react";
import { useQuery, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import GameCard from "../GameCard/GameCard";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";


const GET_GAMES = gql`
  query MyGames {
    game(order_by: { releaseDate: asc_nulls_last }) {
      id
      title
      cover
      releaseDate
      game_systems {
        system {
          uid
          title
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    flex: 1,
  },
}));

export default function ReleaseList() {
  const classes = useStyles();

  const GameListQuery = () => {
    const { loading, error, data } = useQuery(GET_GAMES);

    if (loading) {
      return <CircularProgress />;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }

    console.log(data.game);

    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {data.game.map((game) => {
              return (
                <Grid key={game.id} className={classes.item} item>
                  <GameCard
                    title={game.title}
                    cover={game.cover}
                    systems={game.game_systems}
                    releaseDate={game.releaseDate}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <GameListQuery />
    </div>
  );
}
