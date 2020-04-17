import React from 'react';

import classes from "./Backdrop.module.css";

const backdrop = (props) => (
    <div className={classes.Backdrop}
        onClick={props.closeNavigation}
        style={(props.show) ? {
            opacity: '1',
            visibility: 'visible'
        } : null}>
    </div>
)
 
export default backdrop;