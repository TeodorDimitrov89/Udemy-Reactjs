import React from 'react';
import classes from './Input.module.scss';
const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = <input
       className={classes.InputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        />
      break;
    case 'textarea':
      inputElement = <textarea 
        className={classes.InputElement} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        />
      break;
    case 'select':
      const options = props.elementConfig.options.map((option, key) => (<option key={key} value={option.value}>{option.displayValue}</option>));
    inputElement = (
        <select onChange={props.changed} className={classes.InputElement} value={props.value}>
          {options}
        </select>
      )
      break;
    default:
      inputElement = <input 
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          />
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
};

export default input;
