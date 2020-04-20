import React from 'react';

import Heading from "../../UI/Heading/Heading";
import WordInfo from "../WordInfo/WordInfo";
import WordActions from "../WordActions/WordActions";

import classes from "./Word.module.css";

const word = (props) => {
    return (
        <div className={classes.Word}>
            <Heading type="h2">{props.name}</Heading>
            <span className="separator"></span>

            <WordInfo
                name="significado"
                // informacion={significados}
            />

            <WordInfo
                name="ejemplo"
                // informacion={ejemplos}
            />

            <WordActions 
                tipo="sustantivo"
            />
        </div>
    );
}

export default word;