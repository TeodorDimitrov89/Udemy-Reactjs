import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.module.scss';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  // useEffect(() => {
  //   toggleBtnRef.current.click();

  // });
  

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // setTimeout(() => {
    //   alert('data saved!')
    // }, 1000);
    toggleBtnRef.current.click();
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
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>Toggle Persons
        </button>
        <button onClick={props.login}>Login</button>
    </div>
  )
}

export default React.memo(Cockpit);