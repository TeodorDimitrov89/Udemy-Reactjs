import React from 'react';
import classes from './Input.module.scss';


const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case 'input':
      inputElement = <input
       className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
      if(props.hasPasswordToggle) {
        inputElement = (<div style={{position: 'relative'}}>
           <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed} />
            <div 
              className={props.elementConfig.type === 'password' ? classes.VisibilityOff: classes.Visibility}
              onClick={props.togglePasswordVisibility}>
            </div>
        </div>)
      }
      break;
    case 'textarea':
      inputElement = <textarea 
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
      break;
    case 'select':
      const options = props.elementConfig.options.map((option, key) => (<option key={key} value={option.value}>{option.displayValue}</option>));
    inputElement = (
        <select onChange={props.changed} className={inputClasses.join(' ')} value={props.value}>
          {options}
        </select>
      )
      break;
    default:
      inputElement = <input 
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}/>
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
