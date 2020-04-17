import React from 'react';
import classes from './Button.module.css';

// TODO: LET THE BUTTON HANDLE MORE BUTTON TYPES

const button = (props) => (
    <button className={classes[props.type]}>{props.children}</button>
)
 
export default button;