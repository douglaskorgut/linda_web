import React from "react";
import classes from './FooterHeader.module.css';
import contactIcon from '../../../assets/images/contact_image.png';
import psiIcon from '../../../assets/images/icon.png';

const footerHeader = (props) =>{

    let icon;

    switch (props.caller) {
        case "risolia":
            icon = psiIcon;
            break;
        case "contact":
            icon = contactIcon;
            break;
        default:
            icon = psiIcon;
    }

    return (
        <div className={classes.FooterHeader}>
            <h2>{props.children}</h2>
            <img src={icon} alt="headerIcon"/>
        </div>
    )
};

export default footerHeader;
