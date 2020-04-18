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
                {/* {informacion.map((dato, indice) => (
                    <li className="palabra__item" key={dato.id}>
                        <p><span className="u-text-bold">{indice += 1}. </span> {dato.content}</p>
                    </li>
                ))} */}
                <li className={classes.List}>
                        <p><span style={{fontWeight: 'bold'}} >1.</span> Hola</p>
                </li>
            </ul>
        </div>
    );
}

export default wordInfo;