import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from "./Icon.module.css";

const icon = (props) => (
    <FontAwesomeIcon icon={props.type} className={[classes.Icon, classes[props.class]].join(' ')} />
)
 
export default icon;