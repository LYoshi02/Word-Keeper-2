import React from 'react'

import FormElement from "./FormElement/FormElement";

import ActionBtn from "../ActionBtn/ActionBtn";
import Backdrop from "../../UI/Backdrop/Backrop";
import Heading from "../../../components/UI/Heading/Heading";

import classes from "./AuthForm.module.css";

const authForm = (props) => {
    let formClasses = [classes.Form];
    if (props.showForm) {
        formClasses.push(classes.ShowFormMobile);
    }

    const formElementsArray = [];
    for (let key in props.form) {
        formElementsArray.push({
            id: key,
            data: props.form[key]
        });
    }

    return (
        <React.Fragment>
            <Backdrop show={props.showForm} type="Navigation" clicked={props.hideForm} />
            <div className={formClasses.join(' ')}>
                <Heading type="h3">{(props.isSignIn) ? "Ingresá a tu cuenta" : "Creá tu cuenta"}</Heading>

                <form onSubmit={props.submitAuthForm}>
                    {formElementsArray.map(element => (
                        <FormElement key={element.id}
                            elementType={element.data.elementType}
                            elementConfig={element.data.elementConfig}
                            value={element.data.value}
                            inputChanged={(event) => props.changeInputValue(event, element.id)}
                        />
                    ))}
                    <ActionBtn isSignIn={props.isSignIn} />
                </form>

            </div>
        </React.Fragment>
    );
}

export default authForm;