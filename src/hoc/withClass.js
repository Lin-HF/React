import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );
//function -> function
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* <WrappedComponent props={props}/> */}
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;