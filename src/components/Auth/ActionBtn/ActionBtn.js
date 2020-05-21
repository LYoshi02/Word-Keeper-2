import React from 'react';
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";

import classes from "./ActionBtn.module.css";

const actionBtn = (props) => {
    let element = (
        <React.Fragment>
            <Button clicked={props.btnClicked} type="submit" btnType="Add">Iniciar Sesión</Button>
            <p className={classes.Paragraph}>¿No tenés una cuenta? <Link to="/signup">Haz click aquí</Link></p>
        </React.Fragment>
    );
    if (!props.isSignIn) {
        element = (
            <React.Fragment>
                <Button clicked={props.btnClicked} type="submit" btnType="Add">Crear Cuenta</Button>
                <p className={classes.Paragraph}>¿Ya tenés tu propia cuenta? <Link to="/signin">Haz click aquí</Link></p>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
           {element}
        </React.Fragment>
    )
};

export default actionBtn;