import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import UserPropTypes from './types/user-propType';
import DataList from './data-list';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(_ => ({
  capitalize: {
    textTransform: 'capitalize',
  },
}));

/**
 * Opens a modal displaying all user info
 *
 * @param {import('./types/user-propType').User} {user} - The User object
 * @param {bool} {open} - Is modal open or not
 * @param {Function} {handleClose} - Function to call on close event
 * @returns
 */
function ResponsiveDialog({ user, open, handleClose }) {
  const theme = useTheme();
  const classes = useStyles();

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const fullName = `${user.name.title}. ${user.name.first} ${user.name.last}`;

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      className={classes.capitalize}
    >
      <DialogTitle id="responsive-dialog-title">{fullName}</DialogTitle>

      <DialogContent>
        <DataList data={user} />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ResponsiveDialog.propTypes = {
  user: UserPropTypes,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ResponsiveDialog;
