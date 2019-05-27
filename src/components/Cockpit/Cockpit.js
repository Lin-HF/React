import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //Http
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect'); // after (first) render cycle and before main useEffect
    }
  }, []); //[] empty array for the inital run

  useEffect(()=>{
    console.log('[Persons.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up in 2nd useEffect');
    }
  });

  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        // style={style}
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>

  );
};

export default React.memo(cockpit);