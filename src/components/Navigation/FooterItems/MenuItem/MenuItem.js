import React from "react";
import classes from './MenuItem.module.css';
import FooterHeader from '../../../UI/FooterHeader/FooterHeader'

const menuItem = (props) => {

    return (
        <div className={classes.MenuItem}>
            <FooterHeader>Menu</FooterHeader>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Serviços</a></li>
                <li><a href='/'>Sobre mim</a></li>
                <li><a href='/'>Análise do comportamento</a></li>
                <li><a href='/'>Posts</a></li>
                <li><a href='/'>Contato</a></li>
            </ul>
        </div>
    );
};

export default menuItem;
