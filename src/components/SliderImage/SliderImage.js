import React from 'react';
import classes from  './SliderImage.module.css';

const sliderImage = (props) => {

    const imgStyle = {
        width: 100  + "%",
        height: 'auto'
    };

    return (
        <img style={{imgStyle}} src={props.src} alt="slide-img"></img>
    )
};

export default sliderImage;