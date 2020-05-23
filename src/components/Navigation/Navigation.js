import React from 'react';

import Backdrop from "../UI/Backdrop/Backrop";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationMobile from "./NavigationMobile/NavigationMobile";
import Icon from "../UI/Icon/Icon";

import classes from "./Navigation.module.css";

const navigation = (props) => {
    const navClasses = [classes.Navigation];
        if (props.navigationOpened) {
            navClasses.push(classes.Opened);
        }

        let navigation = null;
        navigation = (
            <nav className={navClasses.join(' ')}>
                <NavigationMobile clicked={props.closeNavigation} />

                {props.items.map(item => (
                    <NavigationItem key={item.content}
                        icon={item.icon}
                        route={item.route}
                        content={item.content} 
                        type={item.type} 
                        closeNav={props.closeNavigation} />
                ))}

                <Icon type="sign-out-alt" iconClass="SignOut" clicked={props.logOut} />
            </nav>
        );

        return (
            <React.Fragment>
                {navigation}
                <Backdrop show={props.navigationOpened} 
                    clicked={props.closeNavigation} 
                    type="Navigation" />
            </React.Fragment >
        );
}

export default navigation;