import React from 'react';
const userOutput = (props) => {
  const userOutputStyle = {
    color: '#000',
    fontSize: '16px',
    opacity: '.7'
  }
  return (
    <div style={userOutputStyle}>
      <p>User Output 1 and username: {props.username}</p>
      <p>User Output 2</p>
    </div>
  )
}

export default userOutput;