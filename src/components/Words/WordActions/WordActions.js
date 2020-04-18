import React from 'react';

import Icon from "../../UI/Icon/Icon";

import classes from "./WordActions.module.css";

const wordActions = (props) => {
    return (
        <div className={classes.Details}>
            <p className={classes.Type}>{props.tipo}</p>
            <div className={classes.Actions}>
                <Icon type="trash" class="Delete" />
                <Icon type="pen" class="Edit" />
            </div>
        </div>
    );
}

export default wordActions;