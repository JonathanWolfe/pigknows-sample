import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';

import UserPropTypes from './types/user-propType';

/**
 * Creates a card display for a User
 *
 * @param {Object} props
 * @param {import('./types/user-propType').User} props.user The User object
 * @returns
 */
function UserCard({ user }) {
  const fullName = `${user.name.title}. ${user.name.first} ${user.name.last}`;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="user">
            <img src={user.picture.thumbnail} alt="User thumbnail" />
          </Avatar>
        }
        title={fullName}
        subheader={user.email}
      />
    </Card>
  );
}

UserCard.propTypes = { user: UserPropTypes };

export default UserCard;
