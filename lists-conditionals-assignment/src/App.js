import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    charCount: 0,
    chars: ''
  }


  changedTextLenHandler = (event) => {
    const charCount = event.target.value.length;
    this.setState({
      charCount,
      chars: event.target.value
    })
  }

  deleteCharHandler = (index) => {
      const charIndex = [...this.state.chars].findIndex((ch, indx) => {
        return indx === index;
      });
      let chars = [...this.state.chars];
      chars.splice(charIndex, 1);
      chars = chars.join('');
      this.setState({
        chars: chars,
        charCount: chars.length
      })
  }

  render() {
    let chars = null;
    if(this.state.charCount > 0) {
      chars = this.state.chars.split('').map((ch, index) => {
        return (
          <CharComponent 
            char={ch}
            charCount={this.state.charCount}
            key={'char' + index}
            click={() => this.deleteCharHandler(index)}
            />
        )
      })
    }


    return (
      <div className="App">
        <h2>Assignment: Time to Practice - Lists &amp; Conditionals</h2>
        <input type="text" onChange={this.changedTextLenHandler.bind(this)} value={this.state.chars}/>
        <h3>Text Lenght: </h3>
        <p>{this.state.charCount}</p>
        <ValidationComponent charCount={this.state.charCount} />
        {chars}
      </div>
    );
  }
}

export default App;
