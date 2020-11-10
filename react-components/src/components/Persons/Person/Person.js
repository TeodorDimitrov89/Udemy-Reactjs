import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from "./Person.module.scss";

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef()
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus()
  }
  render() {
    return (
      // <div className={classes.Person}>
      <Aux>
        {this.props.isAuth? <p>Authenticated</p>: <p>Please Login!</p>}
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