import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as orderActions from '../../../store/actions';
import classes from './ContactData.module.scss';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Steet'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true,
          minLength: 3
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value:'fastest', displayValue: 'Fastest',
            },
            {
              value:'cheapest', displayValue: 'Cheapest'
            }]
        },
        validation: {},
        valid: true,
        value: 'fastest'
      }
    },
    formIsValid: false
  }

  checkValidity(value, rules) {
    let isValid = true;
    if(rules && rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if(rules && rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    
    if(rules && rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for(let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    const order = {
      ingredients: this.props.ingr,
      price: this.props.totalPrice.toFixed(2),
      orderData: formData
    };
    this.props.onOrderHandler(order);
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState(prevState => {
      const updatedOrderFormElement = {...prevState.orderForm};
      const updatedOrderElement = {...updatedOrderFormElement[inputIdentifier]}

      updatedOrderElement.value = event.target.value;
      updatedOrderElement.touched = true;
      updatedOrderElement.valid = this.checkValidity(updatedOrderElement.value,updatedOrderElement.validation);
      updatedOrderFormElement[inputIdentifier] = updatedOrderElement;

      let formIsValid = true;

      for(let key in updatedOrderFormElement) {
        if( updatedOrderFormElement[key].hasOwnProperty('valid')) {
          formIsValid = updatedOrderFormElement[key].valid && formIsValid;
        }
        
      }
      
      return { orderForm: updatedOrderFormElement, formIsValid: formIsValid }
    });
  }

  render() {
    let inputs = Object.keys(this.state.orderForm).map((inputName, index) => {
      return (
        <Input 
          key={index + inputName}
          elementType={this.state.orderForm[inputName].elementType}
          elementConfig={this.state.orderForm[inputName].elementConfig}
          value={this.state.orderForm[inputName].value}
          invalid={!this.state.orderForm[inputName].valid}
          shouldValidate={this.state.orderForm[inputName].validation}
          touched={this.state.orderForm[inputName].touched}
          changed={(event) => this.inputChangedHandler(event, inputName)}
        />
      )
    });
    let form = (
      <form onSubmit={this.orderHandler}>
          {inputs}
          <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        </form>
    );
    if(this.props.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your data</h4>
        {form}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    ingr: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderHandler: (orderData) => dispatch(orderActions.purchaseBurger(orderData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));