import React from "react";
import classes from './FloweredBorder.module.css';
import floweredBorderIcon from '../../assets/images/flowered_border.png'

const floweredBorder = (props) =>{

    let className = classes.FloweredBorder;

    if (props.reflected){
        className = classes.Reflected;
    }

    return (
        <li className={className}>
            <img src={floweredBorderIcon} alt='floweredBorder' />
        </li>
    )
};

export default floweredBorder;
