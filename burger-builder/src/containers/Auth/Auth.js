import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './Auth.module.scss';
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
// import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        hasVisibility: false,
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        hasVisibility: true,
        valid: false,
        touched: false
      },
    },
    isSignup: true
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

  togglePasswordVisibilityHandler = (controlName) => {
    console.log(controlName)
      this.setState(prevState => {
        const updatedControls = {...prevState.controls};
        const updatedControl = {...updatedControls[controlName].elementConfig};
        const type = updatedControl.type === 'password' ? 'text': 'password';
        updatedControl.type  = type;
        const updatedElementConfig = {...updatedControl};
        return {
          controls: {
            ...prevState.controls,
              [controlName]: {
                ...prevState.controls[controlName],
              elementConfig: updatedElementConfig
            }
          }
        }
      })
  }

  inputChangedHandler = (event, controlName) => {
    this.setState(prevState => {
      const updatedAuthFormElement = {...prevState.controls};

      const updatedControls = {
        ...prevState.controls,
        [controlName]: {
            ...prevState.controls[controlName],
            value: event.target.value,
            touched: true,
            valid: this.checkValidity(event.target.value, prevState.controls[controlName].validation)
        }
      }

      let formIsValid = true;

      for(let key in updatedAuthFormElement) {
        if( updatedAuthFormElement[key].hasOwnProperty('valid')) {
          formIsValid = updatedAuthFormElement[key].valid && formIsValid;
        }
        
      }
      
      return { controls: updatedControls, formIsValid: formIsValid }
    });
  }
  authHandler = (event) => {
    event.preventDefault();
    const email = this.state.controls.email.value;
    const password = this.state.controls.password.value;
    this.props.onAuth(email, password, this.state.isSignup);
  }
  switchAuthModeHandler = () => {
    console.log('Swith Mode')
    this.setState(prevState => {
      return {
        ...prevState,
        isSignup: !prevState.isSignup
      }
    })
  }
  render() {
    let inputs = Object.keys(this.state.controls).map((inputName, index) => {
      return (
        <Input
          key={index + inputName}
          elementType={this.state.controls[inputName].elementType}
          elementConfig={this.state.controls[inputName].elementConfig}
          value={this.state.controls[inputName].value}
          invalid={!this.state.controls[inputName].valid}
          shouldValidate={this.state.controls[inputName].validation}
          touched={this.state.controls[inputName].touched}
          changed={(event) => this.inputChangedHandler(event, inputName)}
          hasPasswordToggle={this.state.controls[inputName].hasVisibility}
          togglePasswordVisibility={() => this.togglePasswordVisibilityHandler(inputName)}
        />
      )
    });
    let form = (
      <form onSubmit={this.authHandler}>
          {inputs}
          <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT</Button>
      </form>
    );

    return (
      <div className={classes.AuthData}>
        <h4>Authentication</h4>
        {form}
        <Button btnType="Danger" clicked={ this.switchAuthModeHandler}>SWITCH TO {this.state.isSignup? 'SIGNIN': 'SIGNUP'}</Button>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {

//   }
// };

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
   
  }
};



export default connect(null, mapDispatchToProps)(Auth);