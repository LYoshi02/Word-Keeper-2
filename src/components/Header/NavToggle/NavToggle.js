import React from 'react';

import classes from "./NavToggle.module.css"

const navToggle = (props) => (
    <div className={classes.NavToggle} onClick={props.openNavigation}>
        <span></span>
        <span></span>
        <span></span>
    </div>
);

export default navToggle;