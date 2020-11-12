import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  incrementIngredientHandler = (type) => {
    this.setState(prevState => {
      const updatedIngredients = {...prevState.ingredients};
      updatedIngredients[type]++;
      const newTotalPrice = prevState.totalPrice + (updatedIngredients[type] * INGREDIENT_PRICES[type]);
      return {
        ingredients: updatedIngredients,
        totalPrice: newTotalPrice
      }
    })
  }
  decrementIngredientHandler = (type) => {
    this.setState(prevState => {
      const ingredients = {...prevState.ingredients};
      if(ingredients[type] > 0) {
        ingredients[type]--;
      }

      const newTotalPrice = prevState.totalPrice - (ingredients[type] * INGREDIENT_PRICES[type]);
      return {
        ingredients,
        totalPrice: newTotalPrice
      }
    })
  }


  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          incrIngredient={this.incrementIngredientHandler}
          decrIngredient={this.decrementIngredientHandler}
          disabled={disabledInfo}
          />
      </Aux>
    )
  }
}


export default BurgerBuilder;