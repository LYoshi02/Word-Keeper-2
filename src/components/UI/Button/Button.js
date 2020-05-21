import React from 'react';
import classes from './Button.module.css';

// TODO: LET THE BUTTON HANDLE MORE BUTTON TYPES

const button = (props) => {
    const btnClassesString = props.btnType.split(' ');
    const btnClasses = [];
    for(let element of btnClassesString) {
        btnClasses.push(classes[element])
    }

    return(
        <button className={btnClasses.join(' ')}
        disabled={props.disabled}
        type={props.type}
        onClick={props.clicked}>{props.children}</button>
    );
}
 
export default button;