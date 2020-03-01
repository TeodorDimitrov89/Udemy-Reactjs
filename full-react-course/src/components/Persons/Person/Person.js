import React, {Component} from 'react';

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>I am {this.props.name}
           and age: {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" 
          onChange={this.props.changed}
          value={this.props.name} />
      </div>
    )
  }
}

export default Person;