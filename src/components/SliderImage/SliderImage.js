import React from 'react';
import classes from  './SliderImage.module.css';

const sliderImage = (props) => {

    const imgStyle = {
        width: 100  + "%",
        height: 'auto'
    };

    return (
        // <img style={{imgStyle}} src={props.src} alt="slide-img"></img>
        <h2 style={{marginLeft: '35%', marginTop: '80px'}}>Aqui vai uma imagem a gosto da linda s2</h2>
    )
};

export default sliderImage;