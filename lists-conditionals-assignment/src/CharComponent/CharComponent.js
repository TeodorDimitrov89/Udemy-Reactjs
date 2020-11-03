import React from 'react';

const charComponent = (props) => {
  let charStyle = {
    fontSize: '16px',
    border: '1px solid #eee',
    backgroundColor: '#ccc',
    padding: '10px',
    cursor: 'pointer',
    color: 'red'
  }

  if(props.charCount >=5 ) {
    charStyle.backgroundColor = '#eee';
    charStyle.color = 'green';
  }

  return <span style={charStyle} onClick={props.click}>{props.char}</span>

}

export default charComponent;