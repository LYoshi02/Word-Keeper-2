import React from 'react';

import Icon from "../../UI/Icon/Icon";

import classes from "./WordActions.module.css";

const wordActions = (props) => {
    return (
        <div className={classes.Details}>
            <p className={[classes.Type, classes[props.tipo]].join(' ')}>{props.tipo}</p>
            <div className={classes.Actions}>
                <Icon type="trash" class="Delete" clicked={props.deleteAction} />
                <Icon type="pen" class="Edit" clicked={props.editAction} />
            </div>
        </div>
    );
}

export default wordActions;