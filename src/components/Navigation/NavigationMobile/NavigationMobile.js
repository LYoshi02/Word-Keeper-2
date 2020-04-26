import React from 'react';

import classes from "./NavigationMobile.module.css";

const navigationMobile = (props) => (
    <div className={classes.MobileTop}>
        <div className={classes.MobileClose} onClick={props.clicked}>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default navigationMobile;