import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import UserModal from './user-modal';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(_ => ({
  card: {
    cursor: 'pointer',
    textTransform: 'capitalize',
  },
}));

/**
 * Creates a card display for a User
 *
 * @param {Object.<string,*>} {user} The User object
 * @returns
 */
function UserCard({ user }) {
  const classes = useStyles();

  const fullName = `${user.name.title}. ${user.name.first} ${user.name.last}`;

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Card onClick={handleOpen}>
        <CardHeader
          className={classes.card}
          avatar={
            <Avatar aria-label="user">
              <img src={user.picture.thumbnail} alt="User thumbnail" />
            </Avatar>
          }
          title={fullName}
          subheader={user.email}
        />
      </Card>

      <UserModal user={user} open={open} handleClose={handleClose} />
    </React.Fragment>
  );
}

UserCard.propTypes = { user: PropTypes.object };

export default UserCard;
