import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';
const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/' >
      Checkout
      {/* <ul>
        <NavigationItem link='/' nested>
          Nested Link
        </NavigationItem> 
      </ul> */}
    </NavigationItem>
  </ul>
);

export default navigationItems;