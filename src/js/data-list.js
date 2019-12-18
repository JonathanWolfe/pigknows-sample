import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textTransform: 'capitalize',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function isObject(input) {
  return (
    (typeof input === 'object' || typeof input === 'function') &&
    input !== null &&
    !Array.isArray(input)
  );
}

/**
 * Creates a potentially nested list item from a key and value
 *
 * @param {string} {primary} - Key to display for nested item
 * @param {string|Object} {secondary} - Value to display, or loop over for nested content
 * @param {bool} {isNested} - Flag for if we are in a nested scenario
 * @returns
 */
function NestedListItem({ primary, secondary, isNested = false }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (!isObject(secondary)) {
    return (
      <ListItem className={isNested ? classes.nested : ''}>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    );
  }

  const children = Object.entries(secondary).map(entry => (
    <NestedListItem primary={entry[0]} secondary={entry[1]} isNested />
  ));

  return [
    <ListItem
      button
      className={isNested ? classes.nested : ''}
      onClick={handleClick}
    >
      <ListItemText primary={primary} />
      {open ? '↓' : '↑'}
    </ListItem>,
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {children}
      </List>
    </Collapse>,
  ];
}

/**
 * Turns an object into a list, with keys that have objects for
 * values showing as nested, collapsible items
 *
 * @param {Object.<string,string|Object>} {data} - Data to display
 * @returns
 */
export default function DataList({ data }) {
  const classes = useStyles();

  const children = Object.entries(data).map(entry => (
    <NestedListItem primary={entry[0]} secondary={entry[1]} />
  ));

  return (
    <List component="nav" className={classes.root}>
      {children}
    </List>
  );
}

DataList.propTypes = { data: PropTypes.object };
