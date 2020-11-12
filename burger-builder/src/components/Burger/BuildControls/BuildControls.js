import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.scss'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]


const buildControls = (props) => (
  <div className={classes.BuildControls}>
  <p className={classes.Price}>Current price: <strong>{props.price.toFixed(2)} $</strong></p>
    {
      controls.map(ctrl=> (
        <BuildControl 
          ingredientAdded={() => props.incrIngredient(ctrl.type)}
          ingredientRemoved={()=> props.decrIngredient(ctrl.type)}
          disabled = {props.disabled[ctrl.type]}
          key={ctrl.label}
          label={ctrl.label}/>
      ))
    }
    <button 
      disabled={!props.purchasable}
      className={classes.OrderButton}
      onClick={props.ordered}>
        ORDER NOW
    </button>
</div>
)

export default buildControls;