import React, { Component } from "react";

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }
  componentDidMount() {
    axios.get('/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data})
      })
      .catch(error => {
        this.setState({error: true})
      })
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
    // alert('Success!')
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Teo Dimitrov',
        address: {
          street: 'Test street 123',
          zipCode: '45332',
          country: 'Bulgaria'
        },
        email: 'test@test.bg'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        console.log(response)
        this.setState({loading: false, purchasing: false});
      })
      .catch(error=> {
        console.log(error)
        this.setState({loading: false, purchasing: false});
      })
  }


  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;
    
   
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p>: <Spinner />

    if(this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls 
            incrIngredient={this.incrementIngredientHandler}
            decrIngredient={this.decrementIngredientHandler}
            price={this.state.totalPrice}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchasingHandler} />
        </Aux>
      )


      orderSummary = <OrderSummary 
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        total={this.state.totalPrice} />
    }

    if(this.state.loading) {
      orderSummary = <Spinner /> 
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}


export default withErrorHandler(BurgerBuilder, axios);