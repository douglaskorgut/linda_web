import React from 'react';
import classes from './Home.module.css';
import Slider from '../../containers/Slider/Slider'

const home = (props) =>{
    return (
        <div className={classes.Home}>
            <Slider/>
        </div>
    )
};

export default home;