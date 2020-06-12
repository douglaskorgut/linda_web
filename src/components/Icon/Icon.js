import React from "react";
import lindaIcon from "../../assets/images/icon.png";
import classes from '../Icon/Icon.module.css';

const icon = (props) =>{
    return (
        <div className={classes.Icon}>
            <img src={lindaIcon} alt='lindaIcon'/>
        </div>
    )
};

export default icon;
