import React, {Component} from 'react';
import classes from "./Person.module.scss";

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
class Person extends Component {
  render() {
    return (
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name}&nbsp; and my age is {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
        
      // </div>
    )
  }
}


export default withClass(Person, classes.Person);