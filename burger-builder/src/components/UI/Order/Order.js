import React from 'react';
import classes from './Order.module.scss';

const order = (props) => {
  const ingredients = [];
  
  for(let ing in props.ingredients) {
    ingredients.push({
      name: ing,
      amount: props.ingredients[ing]
    })
  }
  const ingredientsOutput = ingredients.map(ingr => {
    return (
      // <span key={ingr.get('name')}>{ingr.get('name')} ({ingr.get('amount')})</span>
      <span
        style={{display: 'inline-block', border: '1px solid #ccc', padding: '10px', margin: '0 10px'}}
        key={ingr.name}>{ingr.name} ({ingr.amount})</span>
    )
  })
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price: <strong>{props.price} $</strong></p>
      <span onClick={props.deleteOrder} className={classes.Delete}>X</span>
    </div>
  )
}

export default order;
