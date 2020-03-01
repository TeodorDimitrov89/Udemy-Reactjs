import React from 'react';

const Cockpit = (props) => {
  let cssClasses = [];
  const style = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    outline: 'none',
    border: '1px solid green',
    cursor: 'pointer'
  }

  if(props.showPersons) {
    style.backgroundColor = 'red';
    style.border = '1px solid red';
  }


  if (props.persons.length <= 2) {
    cssClasses.push('red');
  }

  if (props.persons.length <= 1) {
    cssClasses.push('bold');
  }


  return (
    <div>
      <h1>{props.title}</h1>
      <p className={cssClasses.join(' ')}>This is really working!</p>
      <button
        style={style}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default Cockpit;