import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = ( props ) => {
    const isAboutMeField = props.children.toUpperCase() === 'SOBRE MIM' ? true : false;

    let attachedClasses = [classes.NavigationItem];

    if (isAboutMeField) { attachedClasses.push(classes.AboutMe)}

    return (
    <li className={attachedClasses.join(' ')}>
        <a
            href={props.link}
            className={props.active ? classes.active : null}>{props.children.toUpperCase()}</a>
    </li>
    )

};
export default navigationItem;
