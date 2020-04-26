import React from 'react';

import classes from "./NotFound.module.css";

const notFound = (props) => {
    let elementClasses = [classes.NotFound];
    if(props.type === "error") {
        elementClasses.push(classes.Error);
    }

    return(
        <div className={elementClasses.join(' ')}>
            {props.children}
        </div>
    )
}
 
export default notFound;