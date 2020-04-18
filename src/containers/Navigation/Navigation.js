import React, { Component } from 'react';

import Backdrop from "../../components/UI/Backdrop/Backrop";
import NavigationItem from "../../components/NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

class Navigation extends Component {
    state = {
        items: [
            { content: 'Todos', route: '/palabras', icon: 'folder-open' },
            { content: 'Sustantivos', route: '/palabras/sustantivos', icon: 'user' },
            { content: 'Verbos', route: '/palabras/verbos', icon: 'running' },
            { content: 'Adjetivos', route: '/palabras/adjetivos', icon: 'grin-wink' },
            { content: 'Otros', route: '/palabras/otros', icon: 'boxes' }
        ]
    }

    render() {
        const navClasses = [classes.Navigation];
        if (this.props.navigationOpened) {
            navClasses.push(classes.Opened);
        }

        let navigation = null;
        navigation = (
            <nav className={navClasses.join(' ')}>
                <div className={classes.MobileTop}>
                    <div className={classes.MobileClose} onClick={this.props.clicked}>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {this.state.items.map(item => (
                    <NavigationItem key={item.content}
                        icon={item.icon}
                        route={item.route}
                        content={item.content} />
                ))}
            </nav>
        );

        return (
            <React.Fragment>
                {navigation}
                <Backdrop show={this.props.navigationOpened} 
                    closeNavigation={this.props.clicked} />
            </React.Fragment >
        );
    }
}

export default Navigation;