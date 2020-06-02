import React from 'react';
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";

import classes from "./ActionBtn.module.css";

const actionBtn = (props) => {
    console.log("hello");
    let buttonElement = <Button clicked={props.btnClicked} type="submit" btnType="Add">Iniciar Sesión</Button>;
    let paragraphElement = <p className={classes.Paragraph}>¿No tenés una cuenta? <Link to="/signup">Creá tu Cuenta</Link></p>;
    
    if (!props.isSignIn) {
        buttonElement = <Button clicked={props.btnClicked} type="submit" btnType="Add">Crear Cuenta</Button>;
        paragraphElement = <p className={classes.Paragraph}>¿Ya tenés tu propia cuenta? <Link to="/signin">Iniciá Sesión</Link></p>
    }

    return (
        <div className={classes[props.elementClass]}>
           {buttonElement}
           {paragraphElement}
        </div>
    )
};

export default actionBtn;