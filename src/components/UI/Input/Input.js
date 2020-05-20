import React from 'react';

import classes from "./Input.module.css";

const input = (props) => {
    let element = null
    switch (props.elementType) {
        case 'input':
            element = (
                <input type={props.type} className={classes[props.class]}
                    placeholder={props.placeholder} 
                    onChange={props.changed}
                    value={props.value} 
                    required={props.required} />
            )
            break;
        case 'select':
            element = (
                <select className={classes[props.class]} value={props.value} onChange={props.changed}>
                    <option disabled>-- Selecciona un tipo --</option>
                    {props.options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                    ))}
                </select>
            )
            break;
        case 'auth-input':
            console.log(props);
            element = (
                <React.Fragment>
                    <label className={classes.AuthLabel}>{props.label}</label>
                    <input type={props.type} className={classes[props.class]} 
                    placeholder={props.placeholder} required={props.required}
                    value={props.value}/>
                </React.Fragment>
            )
            break;
        default:
            break;
    }
    
    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    )
}

export default input;