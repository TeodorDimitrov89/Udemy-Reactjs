import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';
const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/orders' >
      My orders
    </NavigationItem>
  </ul>
);

export default navigationItems;