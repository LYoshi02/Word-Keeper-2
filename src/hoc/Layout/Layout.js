import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Header from "../../containers/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import classes from "./Layout.module.css";

class Layout extends Component {
    state = {
        openNavigation: false,
        navItems: [
            { content: 'Todos', route: '/palabras', icon: 'folder-open', type: '' },
            { content: 'Sustantivos', route: '/palabras?type=sustantivo', icon: 'user', type: 'sustantivo' },
            { content: 'Verbos', route: '/palabras?type=verbo', icon: 'running', type: 'verbo' },
            { content: 'Adjetivos', route: '/palabras?type=adjetivo', icon: 'grin-wink', type: 'adjetivo' },
            { content: 'Otros', route: '/palabras?type=otro', icon: 'boxes', type: 'otro' }
        ]
    }

    navigationStatusHandler = () => {
        this.setState(prevState => {
            return {
                openNavigation: !prevState.openNavigation
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <Header clicked={this.navigationStatusHandler}/>
                <Navigation closeNavigation={this.navigationStatusHandler} 
                    navigationOpened={this.state.openNavigation}
                    items={this.state.navItems} 
                    logOut={this.props.onAuthLogOut} />
                    
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthLogOut: () => dispatch(actions.authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Layout);