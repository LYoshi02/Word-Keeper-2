import React from 'react';
import { withRouter } from "react-router-dom";

import Button from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";
import NavToggle from "./NavToggle/NavToggle";

import classes from "./Header.module.css";


const header = (props) => {

    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <NavToggle openNavigation={props.clicked} />

                <div className={classes.Search}>
                    <Icon type="search" class="Search" />
                    <input type="text" placeholder="Buscar una palabra..."
                        className={classes.Input} />
                    <button className={classes.Delete} type="button">&times;</button>
                </div>

                <Button clicked={() => props.history.push(props.match.url + "/agregar")} 
                    btnType="Add Header">Agregar Palabra</Button>
            </div>
        </header>
    )
}

export default withRouter(header);