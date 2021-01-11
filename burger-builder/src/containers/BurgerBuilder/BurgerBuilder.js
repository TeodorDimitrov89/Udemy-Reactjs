import React, { Component } from "react";
import axios from '../../axios-orders';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


import {connect} from 'react-redux';
import * as actions from '../../store/actions';


class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  
  }
  componentDidMount() {
    this.props.initIngredients();
  }

  updatePurchasable() {
      const ingredientsValues = Object.values(this.props.ings);
      const sum = ingredientsValues.reduce((sum, currentValue) => sum + currentValue, 0);
      return sum > 0;
  }

  purchasingHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  }


  render() {
    const disabledInfo = {
      ...this.props.ings
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

  
    let orderSummary = null;
    
   
    let burger = this.props.error ? <p>Ingredients can't be loaded!</p>: <Spinner />

    if(this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls 
            incrIngredient={this.props.addIngredient}
            decrIngredient={this.props.removeIngredient}
            price={this.props.totalPrice}
            disabled={disabledInfo}
            purchasable={this.updatePurchasable()}
            ordered={this.purchasingHandler} />
        </Aux>
      )


      orderSummary = <OrderSummary 
        ingredients={this.props.ings}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        total={this.props.totalPrice} />
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


const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addIngredient: (name) => dispatch(actions.addIngredient(name)),
    removeIngredient: (name) => dispatch(actions.removeIngredient(name)),
    initIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  }
}

// export default withErrorHandler(BurgerBuilder, axios);
// export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

