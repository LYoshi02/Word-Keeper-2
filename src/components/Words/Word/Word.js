import React from 'react';

import Heading from "../../UI/Heading/Heading";
import WordInfo from "../WordInfo/WordInfo";
import WordActions from "../WordActions/WordActions";

import classes from "./Word.module.css";

const word = (props) => {
    console.log(props.meaning);
    return (
        <div className={classes.Word}>
            <Heading type="h2">{props.nombre}</Heading>
            <span className="separator"></span>

            {(props.significado) ?
                <WordInfo
                    name="significado"
                    items={props.significado}
                /> : null}

            {(props.ejemplo) ?
                <WordInfo
                    name="ejemplo"
                    items={(props.ejemplo) ? props.ejemplo : null}
                /> : null}

            <WordActions
                tipo={props.tipo}
            />
        </div>
    );
}

export default word;