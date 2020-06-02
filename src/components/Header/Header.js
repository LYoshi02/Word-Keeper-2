import React from 'react';
import { withRouter } from "react-router-dom";

import Button from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";
import NavToggle from "../../components/Header/NavToggle/NavToggle";

import classes from "./Header.module.css";

const header = (props) => {
    const searchContainerClasses = [classes.Search];
    if (props.isInputFocus) {
        searchContainerClasses.push(classes.Focus);
    }

    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <NavToggle openNavigation={props.clicked} />

                <div className={searchContainerClasses.join(' ')}>
                    <Icon type="search" iconClass="Search" />
                    <input type="text" placeholder="Buscar una palabra..."
                        className={classes.Input}
                        value={props.inputValue}
                        onChange={(event) => props.inputChanged(event.target.value)}
                        onFocus={props.changeInputStatus}
                        onBlur={props.changeInputStatus}
                    />
                    <button className={classes.Delete}
                        onClick={() => props.inputChanged("")}
                        type="button">&times;</button>
                </div>

                <Button clicked={() => props.history.push(props.match.url + "/agregar")}
                    btnType="Add Header">Agregar Palabra</Button>
            </div>
        </header>
    )
}

export default withRouter(header);