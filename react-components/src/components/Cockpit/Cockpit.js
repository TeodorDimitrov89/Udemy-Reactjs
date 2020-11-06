import React, {useEffect} from 'react';
import classes from './Cockpit.module.scss';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // setTimeout(() => {
    //   alert('data saved!')
    // }, 1000);

    return () => {
      console.log('[Cockpit.js] Clearing')
    }

  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
  });



  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
    btnClass = classes.Red;
  }

  if(props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }

  if(props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Welcome to React</h1>
      <p  className={assignedClasses.join(' ')}>This is working</p>
        <button 
          className={btnClass}
          onClick={props.clicked}>Toggle Persons
        </button>
    </div>
  )
}

export default React.memo(Cockpit);