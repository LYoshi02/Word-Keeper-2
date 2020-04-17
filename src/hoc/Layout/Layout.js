import React, { Component } from 'react';

import Header from "../../components/Header/Header";
import Navigation from "../../containers/Navigation/Navigation";

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
                <Header clicked={this.navigationStatusHandler} />
                <Navigation clicked={this.navigationStatusHandler} 
                    navigationOpened={this.state.openNavigation} />
                    
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;