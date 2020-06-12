import React from "react";
import classes from './SocialNetworksItem.module.css';
import FooterHeader from '../../../UI/FooterHeader/FooterHeader';
import facebookItem from '../../../../assets/images/facebook_item.png';
import instagramItem from '../../../../assets/images/instagram_icon.png';
import whatsItem from '../../../../assets/images/whats_icon.png';
import linkedinItem from '../../../../assets/images/linkedin_icon.png';

const socialNetworksItem = (props) => {

    const HEADER = 'Social';

    return (
        <div className={classes.SocialNetworksItem}>
            <FooterHeader caller="social">{HEADER}</FooterHeader>
               <img  className={classes.GlassButtonImage} src={facebookItem} alt='facebookItem'/>
               <img  className={classes.GlassButtonImage} src={instagramItem} alt='instagramItem'/>
               <img  className={classes.GlassButtonImage} src={whatsItem} alt='whatsItem'/>
               <img  className={classes.GlassButtonImage} src={linkedinItem} alt='linkdinItem'/>
        </div>
    )
};

export default socialNetworksItem;
