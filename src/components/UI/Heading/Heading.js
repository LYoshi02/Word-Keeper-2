import React from 'react';

import classes from "./Heading.module.css";

const heading = (props) => {
    let element = null;
    switch(props.type) {
        case 'h1':
            element = <h1 className={classes.HeadingPrimary}>{props.children}</h1>
            break;
        case 'h2':
            element = <h2 className={classes.HeadingSecondary}>{props.children}</h2>
            break;
        case 'h3':
            element = <h3 className={classes.HeadingTertiary}>{props.children}</h3>
            break;
        default:
            element = <h2 className={classes.HeadingSecondary}>{props.children}</h2>
            break;
    }

    return element;
}

export default heading;