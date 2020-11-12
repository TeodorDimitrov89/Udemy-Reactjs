import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

import OrderSummary from '../../components/OrderSummary/OrderSummary';


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
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchasable() {
    this.setState(prevState => {
      const ingredientsValues = Object.values(prevState.ingredients);
      const sum = ingredientsValues.reduce((sum, currentValue) => sum + currentValue, 0);
      return {
        purchasable: sum > 0
      }
    })
  }

  incrementIngredientHandler = (type) => {
    this.setState(prevState => {
      const updatedIngredients = {...prevState.ingredients};
      updatedIngredients[type]++;
      const newTotalPrice = prevState.totalPrice + INGREDIENT_PRICES[type];
      return {
        ingredients: updatedIngredients,
        totalPrice: newTotalPrice
      }
    },this.updatePurchasable);
  
  }
  decrementIngredientHandler = (type) => {
    this.setState(prevState => {
      const ingredients = {...prevState.ingredients};
      if(ingredients[type] > 0) {
        ingredients[type]--;
      }

      const newTotalPrice = prevState.totalPrice - INGREDIENT_PRICES[type];
      return {
        ingredients,
        totalPrice: newTotalPrice
      }
    },this.updatePurchasable);
  }

  purchasingHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert('Success!')
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
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            total={this.state.totalPrice}
            />
        </Modal>
       
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          incrIngredient={this.incrementIngredientHandler}
          decrIngredient={this.decrementIngredientHandler}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandler}
          />
      </Aux>
    )
  }
}


export default BurgerBuilder;