import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import classes from "./Layout.module.css";

class Layout extends Component {
    state = {
        isNavOpen: false,
        isInputFocus: false,
        navItems: [
            { content: 'Todos', route: '/palabras', icon: 'folder-open', type: '' },
            { content: 'Sustantivos', route: '/palabras?type=sustantivo', icon: 'user', type: 'sustantivo' },
            { content: 'Verbos', route: '/palabras?type=verbo', icon: 'running', type: 'verbo' },
            { content: 'Adjetivos', route: '/palabras?type=adjetivo', icon: 'grin-wink', type: 'adjetivo' },
            { content: 'Otros', route: '/palabras?type=otro', icon: 'boxes', type: 'otro' }
        ]
    }

    inputStatusHandler = () => {
        this.setState(prevState => {
            return { isInputFocus: !prevState.isInputFocus }
        })
    }

    navigationStatusHandler = () => {
        this.setState(prevState => {
            return {
                isNavOpen: !prevState.isNavOpen
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <Header 
                    clicked={this.navigationStatusHandler}
                    isInputFocus={this.state.isInputFocus}
                    changeInputStatus={this.inputStatusHandler}
                    inputValue={this.props.inputValue}
                    inputChanged={(inputValue) => this.props.onInputChanged(inputValue)}
                />
                <Navigation changeNavStatus={this.navigationStatusHandler} 
                    isNavigationOpen={this.state.isNavOpen}
                    items={this.state.navItems} 
                    logOut={this.props.onAuthLogOut} />
                    
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.header.searchedWord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthLogOut: () => dispatch(actions.authLogout()),
        onInputChanged: (value) => dispatch(actions.searchedWordChanged(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);