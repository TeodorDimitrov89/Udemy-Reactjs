import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './OrderSummary.module.scss';
import Button from '../UI/Button/Button';


const orderSummary = (props) => {

  const ingredientsSummary = Object.keys(props.ingredients).map(ingrKey => {
    return (
      <li key={ingrKey}>
          <span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {props.ingredients[ingrKey]}
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
        <strong>Total Price: {props.total.toFixed(2)} $</strong>
      </div>

      <div>
        <p>Continue to checkout?</p>
        <div className={classes.Buttons}>
          <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
          <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </div>
      </div>
    </Aux>
  )
}

export default orderSummary;