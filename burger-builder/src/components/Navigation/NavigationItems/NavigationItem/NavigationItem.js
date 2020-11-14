import React from 'react';
import classes from './NavigationItem.module.scss';

const navigationItem = (props) => (
// <li className={[classes.NavigationItem, props.nested ? classes.Nested: null].join(' ')}>
<li className={classes.NavigationItem}>
    <a 
      href={props.link}
      className={props.active ? classes.active: null}>{props.children}
    </a>
  </li>
);

export default navigationItem;