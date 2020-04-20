import React from 'react';

import Heading from "../../UI/Heading/Heading";

import classes from "./WordInfo.module.css";

const wordInfo = (props) => {
    // const informacion = props.informacion;
    // if (informacion.length === 0) return null;

    return (
        <div>
            <Heading type="h3">{props.name}</Heading>

            <ul className={classes.List}>
                {props.items.map((item, indice) => (
                    <li className="palabra__item" key={item.id}>
                        <p><span className="u-text-bold">{indice += 1}. </span> {item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default wordInfo;