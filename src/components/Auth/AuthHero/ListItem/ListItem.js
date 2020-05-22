import React from 'react'

import Icon from "../../../UI/Icon/Icon";

import classes from "./ListItem.module.css";

const listItem = (props) => (
    <li className={classes.ListItem}>
        <Icon type={["far", "check-circle"]} class="Feature" />
        <p><span>{props.bold}</span>&nbsp;{props.text}</p>
    </li>
);

export default listItem;