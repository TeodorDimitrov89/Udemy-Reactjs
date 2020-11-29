import React, {Component} from 'react';
import classes from './ContactData.module.scss';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
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
        valid: false
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
        valid: false
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
        valid: false
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
        valid: false
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
        valid: false
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
        value: ''
      }
    },
    loading: false
  }

  checkValidity(value, rules) {
    let isValid = true;
    if(rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    
    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for(let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price.toFixed(2),
      orderData: formData
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error=> {
        console.log(error)
        this.setState({loading: false});
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    this.setState(prevState => {
      const updatedOrderFormElement = {...prevState.orderForm};
      
      const updatedOrderElement = {...updatedOrderFormElement[inputIdentifier]}



      updatedOrderElement.value = event.target.value;
      updatedOrderElement.valid = this.checkValidity(updatedOrderElement.value,updatedOrderElement.validation);
      updatedOrderFormElement[inputIdentifier] = updatedOrderElement;
      console.log(updatedOrderElement)
      return {
          orderForm: updatedOrderFormElement
      }
    });

    // const updatedOrderForm = {...this.state.orderForm};
    // const updatedOrderElement = {
    //   ...updatedOrderForm[inputIdentifier]
    // };
    // updatedOrderElement.value = event.target.value;
    // updatedOrderForm[inputIdentifier] = updatedOrderElement;
    // this.setState({orderForm: updatedOrderForm})
  }

  render() {
    let inputs = Object.keys(this.state.orderForm).map((inputName, index) => {
      return (
        <Input 
         key={index + inputName}
         elementType={this.state.orderForm[inputName].elementType}
         elementConfig={this.state.orderForm[inputName].elementConfig}
         value={this.state.orderForm[inputName].value}
         changed={(event) => this.inputChangedHandler(event, inputName)}  
        />
      )
    });
    let form = (
      <form onSubmit={this.orderHandler}>
          {inputs}
          <Button btnType="Success">ORDER</Button>
        </form>
    );
    if(this.state.loading) {
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

export default ContactData;