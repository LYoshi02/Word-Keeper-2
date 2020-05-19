import React from 'react';

import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";

import classes from "./FormItem.module.css";

const formItem = (props) => {

    return (
        <div className={classes.Item}>
            <span>
                <li>
                    <Input elementType={props.elementType} 
                    value={props.value}
                    changed={props.changed}
                    {...props.elementConfig} />
                </li>
            </span>

            <Button clicked={props.deleteClicked} 
            btnType="DeleteItem">&times;</Button>
        </div>
    )
}

export default formItem;