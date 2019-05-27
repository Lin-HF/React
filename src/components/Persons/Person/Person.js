import React from 'react'; //translate JSX
import classes from './Person.css';


const person = ( props ) => {
    // const rnd = Math.random();
    // if (rnd < 0.7) {
    //     throw new Error('Something went wrong');
    // }
    console.log("[Person.js] rederring...");
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;

