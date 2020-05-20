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
    console.log(formElementsArray);

    let heading = <Heading type="h3">Ingresá a tu cuenta</Heading>
    if(!props.isSignIn) {
        heading = <Heading type="h3">Creá tu cuenta</Heading>
    }

    return (
        <React.Fragment>
            <Backdrop show={props.showForm} type="Navigation" clicked={props.hideForm} />
            <div className={formClasses.join(' ')}>
                {heading}

                <form>
                    {formElementsArray.map(element => (
                        <FormElement key={element.id}
                            elementType={element.data.elementType}
                            elementConfig={element.data.elementConfig}
                        />
                    ))}
                </form>

                <ActionBtn isSignIn={props.isSignIn} />
            </div>
        </React.Fragment>
    );
}

export default authForm;