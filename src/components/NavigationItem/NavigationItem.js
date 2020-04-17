import React from 'react';
import { NavLink } from "react-router-dom";

import Icon from "../UI/Icon/Icon";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
    <div>
        <NavLink to={props.route} exact activeClassName={classes.ItemActive} className={classes.Item}>
            <Icon type={props.icon} class="WordType" />
            <p className={classes.Paragraph}>{props.content}</p>
        </NavLink>
    </div>
)

export default navigationItem;