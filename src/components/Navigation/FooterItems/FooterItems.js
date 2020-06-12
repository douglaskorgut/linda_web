import React from "react";
import classes from './FooterItems.module.css';
import ContactFooterItem from './ContactFooterItem/ContactFooterItem';
import RisoliaItem from './RisoliaItem/RisoliaItem';
import SocialNetworksItems from './SocialNetworksItem/SocialNetworksItem';
import MenuItem from '../../Navigation/FooterItems/MenuItem/MenuItem';

const footerItems = (props) => {
    return (
        <div className={classes.FooterItems}>
            <RisoliaItem/>
            <ContactFooterItem/>
            <SocialNetworksItems/>
            <MenuItem/>
        </div>

    )
};

export default footerItems;
