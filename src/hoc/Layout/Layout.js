import React, { Component } from 'react';

import Header from "../../components/Header/Header";
import Navigation from "../../containers/Navigation/Navigation";

import classes from "./Layout.module.css";

class Layout extends Component {
    state = {
        openNavigation: false
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
                <Header clicked={this.navigationStatusHandler} changed={this.props.headerChanged} />
                <Navigation closeNavigation={this.navigationStatusHandler} 
                    navigationOpened={this.state.openNavigation} />
                    
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;