import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useFetch } from 'react-hooks-async';

import UserCard from './user-card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  userCard: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
  },
}));

function App() {
  const classes = useStyles();

  const url = `https://randomuser.me/api?results=3`;
  const { pending, error, result, abort } = useFetch(url);

  if (pending) {
    return (
      <div>
        Loading...
        <button type="button" onClick={abort}>
          Abort
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error: {error.name} {error.message}
      </div>
    );
  }

  const cards = result.results.map((user, index) => (
    <Grid item xs key={index}>
      <UserCard className={classes.userCard} user={user} />
    </Grid>
  ));

  return (
    <Container>
      <CssBaseline />

      <div className={classes.root}>
        <Grid container spacing={3}>
          {cards}
        </Grid>
      </div>
    </Container>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
