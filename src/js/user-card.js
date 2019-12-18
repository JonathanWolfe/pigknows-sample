import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import UserPropTypes from './types/user-propType';
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
 * @param {import('./types/user-propType').User} {user} The User object
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

  return [
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
    </Card>,

    <UserModal user={user} open={open} handleClose={handleClose} />,
  ];
}

UserCard.propTypes = { user: UserPropTypes };

export default UserCard;
