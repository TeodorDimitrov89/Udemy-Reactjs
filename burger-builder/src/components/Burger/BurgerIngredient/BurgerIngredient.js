import React, {Component} from 'react';

import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.scss';


class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom} title='bread'></div>
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop} title='bread'>
          <div className={classes.Seeds1} title='seed'></div>
          <div className={classes.Seeds2} title='seed'></div>
        </div>);
        break;
      case('meat'):
        ingredient = <div className={classes.Meat} title='meat'></div>;
        break;
      case('cheese'):
        ingredient = <div className={classes.Cheese} title='cheese'></div>;
        break;
      case('salad'):
        ingredient = <div className={classes.Salad} title='salad'></div>;
        break;
      case('bacon'):
        ingredient = <div className={classes.Bacon} title='bacon'></div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;