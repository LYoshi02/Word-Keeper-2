import React from 'react';

import Heading from "../../UI/Heading/Heading";

import classes from "./WordSummary.module.css";

const wordSummary = (props) => {
    return (
        <div className={classes.Summary}>
            <Heading type="h1">Tus Palabras</Heading>
            <p className={classes.WordsAmount}>
                <span>{props.amount}</span> palabras
            </p>
        </div>
    );
}

export default wordSummary;