import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from "./Icon.module.css";

const icon = (props) => (
    <FontAwesomeIcon icon={props.type} 
        onClick={props.clicked}
        className={[classes.Icon, classes[props.iconClass]].join(' ')} />
)
 
export default icon;