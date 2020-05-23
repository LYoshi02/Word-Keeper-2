import React from 'react';
import { NavLink } from "react-router-dom";

import Icon from "../../UI/Icon/Icon";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
    <div onClick={props.closeNav}>
        <NavLink to={props.route} activeClassName={classes.ItemActive} className={classes.Item}
        isActive={(match, location) => {
            // It allows items in the navigation to have the active class
            const query = location.search.split('=');
            if(query.length > 1){
                return query[1] === props.type;
            }

            return props.type === "";
        }}>
            <Icon type={props.icon} iconClass="WordType" />
            <p className={classes.Paragraph}>{props.content}</p>
        </NavLink>
    </div>
)

export default navigationItem;