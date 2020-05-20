import React from 'react'

import Backdrop from "../../UI/Backdrop/Backrop";
import Button from "../../UI/Button/Button";
import Heading from "../../../components/UI/Heading/Heading";
import Input from "../../../components/UI/Input/Input";

import classes from "./AuthForm.module.css";

const authForm = (props) => {
    let formClasses = [classes.Form];
    let backdrop = null;
    if (props.showForm) {
        formClasses.push(classes.ShowFormMobile);
    }

    return (
        <React.Fragment>
            <Backdrop show={props.showForm} type="Navigation" clicked={props.hideForm} />
            <div className={formClasses.join(' ')}>
                <Heading type="h3">Creá tu cuenta</Heading>

                <div className={classes.FormGroup}>
                    <Input elementType="auth-input" />
                </div>

                <div className={classes.FormGroup}>
                    <Input elementType="auth-input" />
                </div>

                <div className={classes.FormGroup}>
                    <Input elementType="auth-input" />
                </div>

                <Button btnType="Add">Crear Cuenta</Button>
            </div>
        </React.Fragment>
    );
}

export default authForm;

{/* FORM PARA INICIAR SESION  */ }
{/* <div className={classes.Form}>
                    <Heading type="h3">Ingresá a tu cuenta</Heading>

                    <div className={classes.FormGroup}>
                        <Input elementType="auth-input" />
                    </div>

                    <div className={classes.FormGroup}>
                        <Input elementType="auth-input" />
                    </div>

                    <Button btnType="Add">Iniciar Sesión</Button>
                    <p className={classes.Paragraph}>¿No tenés una cuenta? <span>Haz click aquí</span></p>
                </div> */}