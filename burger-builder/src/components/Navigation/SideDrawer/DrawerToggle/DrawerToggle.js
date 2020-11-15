import React from 'react';
import classes from './DrawerToggle.module.scss';

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);


export default drawerToggle;