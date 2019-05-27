import React, { Component } from 'react'; //translate JSX
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    // const rnd = Math.random();
    // if (rnd < 0.7) {
    //     throw new Error('Something went wrong');
    // }
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    //static contextType = AuthContext;

    componentDidMount() {
        //document.querySelector('input').focus(); // but only the first
        this.inputElement.current.focus();
        //console.log(this.context.authenticated);
    }
    render(){
        console.log("[Person.js] rederring...");
    return (
        //<div className={classes.Person}>
        <Aux>
            <AuthContext.Consumer>
                {context => 
                    context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }
            </AuthContext.Consumer>

            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
                //ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElement}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
        </Aux>
        //</div>
    )
    }
    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);

