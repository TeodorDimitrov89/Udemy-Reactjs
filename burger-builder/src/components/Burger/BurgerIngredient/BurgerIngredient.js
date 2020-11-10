import React, {Component} from 'react';

import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.scss';


class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>);
        break;
      case('meat'):
        ingredient = <div className="Meat"></div>;
        break;
      case('cheese'):
        ingredient = <div className="Cheese"></div>;
        break;
      case('salad'):
        ingredient = <div className="Salad"></div>;
        break;
      case('bacon'):
        ingredient = <div className="Bacon"></div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;