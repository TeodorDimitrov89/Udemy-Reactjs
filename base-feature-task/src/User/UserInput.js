import React from 'react';
import "./UserInput.css";

const userInput = (props) => {
  return (
    <div className="UserInput">
      <label>
        User input:&nbsp;
        <input
          type="text"
          placeholder="username"
          onChange={props.change}
          value={props.username}/>
      </label>
    </div>
  )
}

export default userInput;