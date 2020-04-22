import React from 'react';

import Heading from "../../UI/Heading/Heading";

import classes from "./WordSummary.module.css";

const wordSummary = (props) => {
    let amount = null;
    if (props.reqFinished) {
        amount = (
            <p className={classes.WordsAmount}>
                <span>{props.amount}</span> palabras
            </p>
        )
    }

    return (
        <div className={classes.Summary}>
            <Heading type="h1">Tus Palabras</Heading>
            {amount}
        </div>
    );
}

export default wordSummary;