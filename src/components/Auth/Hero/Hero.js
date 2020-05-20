import React from 'react'

import ActionBtn from "../ActionBtn/ActionBtn";
import Icon from "../../../components/UI/Icon/Icon";
import logo from "../../../assets/logo.png";

import classes from "./Hero.module.css";

const hero = (props) => (
    <div className={classes.Hero}>
        <div className={classes.Logo}>
            <img src={logo} alt="Word Keeper Logo" />
        </div>
        <ul>
            <li>
                <Icon type={["far", "check-circle"]} class="Feature" />
                <span>Guardá</span>&nbsp;tus palabras
            </li>
            <li>
                <Icon type={["far", "check-circle"]} class="Feature" />
                <span>Organizalas </span>&nbsp;como quieras
            </li>
            <li>
                <Icon type={["far", "check-circle"]} class="Feature" />
                <span>Expandí </span>&nbsp;tu vocabulario
            </li>
        </ul>
        
        <div className={classes.ActionBtn}>
            <ActionBtn isSignIn={props.isSignIn} btnClicked={props.showForm} />
        </div>
    </div>
);

export default hero;