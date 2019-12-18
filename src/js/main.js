import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ReactDOM from 'react-dom';
import { useAsyncRun, useAsyncTask } from 'react-hooks-async';
import UserCard from './user-card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '2em',
  },
  userCard: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
  },
}));

function fetchUsers() {
  return fetch('https://randomuser.me/api?results=6').then(resp => resp.json());
}

function App() {
  const classes = useStyles();

  const task = useAsyncTask(fetchUsers);

  useAsyncRun(task);

  if (task.pending) {
    return (
      <Container>
        <CssBaseline />

        <div className={classes.root}>
          <Typography variant="subtitle1">Loading&hellip;</Typography>
          <Button variant="contained" color="secondary" onClick={task.abort}>
            Abort
          </Button>
        </div>
      </Container>
    );
  }

  if (task.error) {
    return (
      <Container>
        <CssBaseline />

        <div className={classes.root}>
          Error: {task.error.name} {task.error.message}
        </div>
      </Container>
    );
  }

  const cards = task.result.results.map((user, index) => (
    <Grid item xs={12} sm={4} key={index}>
      <UserCard className={classes.userCard} user={user} />
    </Grid>
  ));

  return (
    <Container>
      <CssBaseline />

      <div className={classes.root}>
        <Grid container spacing={3}>
          {cards}

          <Grid item>
            <Button variant="contained" color="primary" onClick={task.start}>
              Refresh
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
