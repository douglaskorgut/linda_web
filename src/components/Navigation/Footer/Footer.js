import React from 'react';
import classes from './Footer.module.css';
import FooterItems from '../FooterItems/FooterItems';

const footer = () => {
    return (
        <footer className={classes.Footer}>
            <FooterItems/>
        </footer>
    );
};

export default footer;
