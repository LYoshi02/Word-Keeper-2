import React from 'react'

import ActionBtn from "../ActionBtn/ActionBtn";
import ListItem from "./ListItem/ListItem";
import logo from "../../../assets/logo.png";

import classes from "./AuthHero.module.css";

const hero = (props) => (
    <div className={classes.Hero}>
        <div className={classes.BackgroundImage}></div>
        <div className={classes.Logo}>
            <img src={logo} alt="Word Keeper Logo" />
        </div>
        <ul>
            <ListItem bold="Guardá" text="tus palabras" />
            <ListItem bold="Organizalas" text="como quieras" />
            <ListItem bold="Expandí" text="tu vocabulario" />
        </ul>
        
        <div className={classes.ActionBtn}>
            <ActionBtn isSignIn={props.isSignIn} btnClicked={props.showForm} />
        </div>
    </div>
);

export default hero;