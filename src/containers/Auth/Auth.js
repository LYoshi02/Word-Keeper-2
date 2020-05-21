import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import AuthForm from "../../components/Auth/AuthForm/AuthForm";
import Hero from "../../components/Auth/Hero/Hero";

import classes from "./Auth.module.css";

class Auth extends Component {
    state = {
        authForm: {
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
            // repeatPassword: {
            //     elementType: 'auth-input',
            //     elementConfig: {
            //         type: 'password',
            //         placeholder: 'Misma Contraseña',
            //         class: 'AuthInput',
            //         required: true,
            //         label: "Repetir Contraseña:"
            //     },
            //     value: ''
            // }
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
        if (this.props.match.url !== prevProps.match.url) {
            const updatedAuthForm = this.restartInputValues();
            
            this.setState({
                isSignIn: this.props.match.url === "/signin",
                authForm: updatedAuthForm
            });
        }
    }

    restartInputValues = () => {
        let updatedAuthForm = { ...this.state.authForm };
        let updatedAuthElement = null;
        for (let key in updatedAuthForm) {
            updatedAuthElement = { ...this.state.authForm[key] };
            updatedAuthElement.value = "";
            updatedAuthForm[key] = updatedAuthElement;
        }

        return updatedAuthForm;
    }

    showFormHandler = () => {
        this.setState(prevProps => {
            return { showForm: !prevProps.showForm }
        });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAuthForm = { ...this.state.authForm };
        const updatedAuthElement = { ...this.state.authForm[inputIdentifier] };
        updatedAuthElement.value = event.target.value;
        updatedAuthForm[inputIdentifier] = updatedAuthElement;
        this.setState({ authForm: updatedAuthForm });
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.authForm.email.value, 
            this.state.authForm.password.value, this.state.isSignIn);
    }

    render() {
        let form = { ...this.state.authForm }
        if (this.state.isSignIn) {
            form = {};
            for (let key in this.state.authForm) {
                if (key !== "repeatPassword") {
                    Object.assign(form, { [key]: this.state.authForm[key] });
                }
            }
        }

        let authRedirect = null;
        if(this.props.isAuth) {
            authRedirect = <Redirect to="/palabras" />
        }

        return (
            <div className={classes.Auth}>
                <Hero showForm={this.showFormHandler} isSignIn={this.state.isSignIn} />
                <AuthForm showForm={this.state.showForm}
                    hideForm={this.showFormHandler}
                    form={form}
                    isSignIn={this.state.isSignIn}
                    changeInputValue={this.inputChangedHandler}
                    submitAuthForm={this.submitFormHandler}
                />
                {authRedirect}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);