import React, { Component } from 'react';

import Backdrop from "../../components/UI/Backdrop/Backrop";
import NavigationItem from "../../components/NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

class Navigation extends Component {
    state = {
        items: [
            { content: 'Todos', route: '/palabras', icon: 'folder-open', type: '' },
            { content: 'Sustantivos', route: '/palabras?type=sustantivo', icon: 'user', type: 'sustantivo' },
            { content: 'Verbos', route: '/palabras?type=verbo', icon: 'running', type: 'verbo' },
            { content: 'Adjetivos', route: '/palabras?type=adjetivo', icon: 'grin-wink', type: 'adjetivo' },
            { content: 'Otros', route: '/palabras?type=otro', icon: 'boxes', type: 'otro' }
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
                        content={item.content} 
                        type={item.type} />
                ))}
            </nav>
        );

        return (
            <React.Fragment>
                {navigation}
                <Backdrop show={this.props.navigationOpened} 
                    clicked={this.props.closeNavigation} 
                    type="Navigation" />
            </React.Fragment >
        );
    }
}

export default Navigation;