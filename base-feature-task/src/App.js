import React, {Component} from 'react';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'Fearless'
  }

  usernameChangeHandler(event) {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h2 >Base Feature Assignment - Task 1</h2>
        <UserInput
          username={this.state.username}
          change={this
          .usernameChangeHandler
          .bind(this)}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
