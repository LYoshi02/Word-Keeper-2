import React from 'react';

import FormList from "../../../containers/FormList/FormList";
import Heading from "../../UI/Heading/Heading";
import Input from "../../UI/Input/Input";

import classes from "./FormElement.module.css";

const formElement = (props) => {
    let content = null;
    switch (props.formElementType) {
        case 'nombre':
            content = (
                <React.Fragment>
                    <Input elementType={props.formElementData.elementType}
                    value={props.formElementData.value}
                    changed={props.inputChangeHandler}
                    {...props.formElementData.elementConfig} />
                
                    <span className="separator"></span>
                </React.Fragment>
            )
            break;
        case 'seccion':
            content = (
                <FormList items={props.formElementData.value}
                elementConfig={props.formElementData.elementConfig} 
                elementType={props.formElementData.elementType} 
                sendItems={props.receiveNewItems} />
            )
            break;
        case 'tipo':
            content = (
                <Input elementType={props.formElementData.elementType}
                changed={props.inputChangeHandler}
                value={props.formElementData.value}
                {...props.formElementData.elementConfig} />
            )
            break;
        default:
            break;
    }

    let heading = null;
    if(props.formElementData.heading) {
        heading = <Heading type="h3">{props.formElementData.heading.text}</Heading>
    }

    return (
        <div className={classes[props.formElementData.class]}>
            {heading}
            {content}
        </div>
    )
}

export default formElement;