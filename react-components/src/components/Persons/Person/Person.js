import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from "./Person.module.scss";

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import AuthContex from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContex;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context)
  }
  render() {
    return (
      // <div className={classes.Person}>
      <Aux>
        {/* <AuthContex.Consumer>
          {(context) => context.authenticated ? <p>Authenticated</p>: <p>Please Login!</p>}
        </AuthContex.Consumer> */}
        {this.context.authenticated ? <p>Authenticated</p>: <p>Please Login!</p>}
        
        <p onClick={this.props.click}>I'm {this.props.name}&nbsp; and my age is {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input 
          type="text"
          // ref={(inputEl)=> {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
        
      // </div>
    )
  }
}


Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}


export default withClass(Person, classes.Person);