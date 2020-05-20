import React, { Component } from 'react'

import AuthForm from "../../components/Auth/AuthForm/AuthForm";
import Hero from "../../components/Auth/Hero/Hero";


import classes from "./Auth.module.css";

class Auth extends Component {
    state = {
        signInForm: {
            email: {
                elementType: 'auth-input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'nombre@correo.com',
                    class: 'AuthInput',
                    required: true,
                    label: "Email:"
                },
                value: ''
            },
            password: {
                elementType: 'auth-input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Mayor a 5 caracteres',
                    class: 'AuthInput',
                    required: true,
                    label: "Contraseña:"
                },
                value: ''
            }
        },
        signUpForm: {
            repeatPassword: {
                elementType: 'auth-input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Misma Contraseña',
                    class: 'AuthInput',
                    required: true,
                    label: "Repetir Contraseña:"
                },
                value: ''
            }
        },
        showForm: false,
        isSignIn: true
    }

    componentDidMount() {
        this.setState({
            isSignIn: this.props.match.url === "/signin"
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.url !== prevProps.match.url) {
            this.setState({
                isSignIn: this.props.match.url === "/signin"
            });
        }
    }

    showFormHandler = () => {
        this.setState(prevProps => {
            return {showForm: !prevProps.showForm}
        });
    }

    render() {
        let form = {...this.state.signInForm}
        if(!this.state.isSignIn) {
            form = {
                ...this.state.signInForm,
                ...this.state.signUpForm
            }
        }

        return (
            <div className={classes.Auth}>
                <Hero showForm={this.showFormHandler} isSignIn={this.state.isSignIn} />
                <AuthForm showForm={this.state.showForm} 
                hideForm={this.showFormHandler} 
                form={form} 
                isSignIn={this.state.isSignIn} />                
            </div>
        )
    }
}

export default Auth;