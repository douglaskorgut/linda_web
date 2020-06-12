import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const navigationItems = () => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/">Serviços</NavigationItem>
        <NavigationItem link="/">Sobre mim</NavigationItem>
        <Logo/>
        <NavigationItem link="/">Análise do comportamento</NavigationItem>
        <NavigationItem link="/">Posts</NavigationItem>
        <NavigationItem link="/">Contato</NavigationItem>
    </ul>
);

export default navigationItems;
