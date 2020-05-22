import React from 'react'
import Input from "../../../../components/UI/Input/Input";

import classes from "./FormElement.module.css";

const formElement = (props) => (
    <div className={classes.FormElement}>
        <Input elementType={props.elementType}
        {...props.elementConfig}
        value={props.value}
        changed={props.inputChanged} />
    </div>
);

export default formElement;