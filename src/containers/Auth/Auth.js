import React, { Component } from 'react'

import AuthForm from "../../components/Auth/AuthForm/AuthForm";
import Hero from "../../components/Auth/Hero/Hero";


import classes from "./Auth.module.css";

class Auth extends Component {
    state = {
        showForm: false
    }

    showFormHandler = () => {
        this.setState(prevProps => {
            return {showForm: !prevProps.showForm}
        });
    }

    render() {
        return (
            <div className={classes.Auth}>
                <Hero showForm={this.showFormHandler} />
                <AuthForm showForm={this.state.showForm} hideForm={this.showFormHandler} />                
            </div>
        )
    }
}

export default Auth;