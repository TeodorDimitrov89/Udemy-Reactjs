import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './OrderSummary.module.scss';
import Button from '../UI/Button/Button';


class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('Component Did Update')
  }
  render() {

    const ingredientsSummary = Object.keys(this.props.ingredients).map(ingrKey => {
      return (
        <li key={ingrKey}>
            <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}
        </li>
      )
    });
  
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <div className={classes.OrderSummaryList}>
          <ol>
            {ingredientsSummary}
          </ol>
          <strong>Total Price: {this.props.total.toFixed(2)} $</strong>
        </div>
  
        <div>
          <p>Continue to checkout?</p>
          <div className={classes.Buttons}>
            <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
          </div>
        </div>
      </Aux>
    )
  }
}

export default OrderSummary;