import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
  <div className={classes.BurgerLogo} style={{height: props.height}}>
    <img src={burgerLogo} alt="burger-logo"/>
  </div>
);

export default logo;
