import React from 'react';
import { Link } from "react-router-dom";

import Button from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";

import classes from "./Header.module.css";


const header = (props) => {

    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <div className={classes.Mobile} onClick={props.clicked}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={classes.Search}>
                    <Icon type="search" class="Search" />
                    <input type="text" placeholder="Buscar una palabra..."
                        className={classes.Input} />
                    <button className={classes.Delete} type="button">&times;</button>
                </div>

                <Button type="Add">Agregar Palabra</Button>
            </div>
        </header>
    )
}

export default header;