import React from 'react';
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";

import classes from "./ActionBtn.module.css";

const actionBtn = (props) => (
    <React.Fragment>
        <Button clicked={props.btnClicked} btnType="Add">Crear Cuenta</Button>
        <p className={classes.Paragraph}>¿Ya tenés tu propia cuenta? <Link to="/signup">Haz click aquí</Link></p>
    </React.Fragment>
);

export default actionBtn;