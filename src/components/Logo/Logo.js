import React from "react";
import lindaLogo from '../../assets/images/logo.png'
import classes from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}} >
            <img src={lindaLogo} alt='lindaLogo'/>
        </div>
    )
};

export default logo;
