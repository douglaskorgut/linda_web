import React from 'react';
import classes from './Slider.module.css';
import SliderImage from '../../components/SliderImage/SliderImage';
import firstImage from '../../assets/images/slider_image_1.jpg';
import secondImage from '../../assets/images/slider_image_2.jpg';

class Slider extends React.Component {

    state = {
        xPos: 0,
        sliderArr: [<SliderImage src={firstImage} />, <SliderImage src={secondImage} />]
    };

    goLeft = () => {
        if (this.state.xPos === 0) {
            this.setState({xPos: -100*(this.state.sliderArr.length - 1)})
        } else {
            this.setState({xPos: this.state.xPos + 100 });
        }
    };

    goRight = () => {
        if (this.state.xPos === -100*(this.state.sliderArr.length - 1)) {
            this.setState({xPos:0})
        } else {
            this.setState({xPos: this.state.xPos - 100 });
        }
    };

    render() {

        let tranformedSliderArr = this.state.sliderArr.map((item, index) => {
            return <div className={classes.Slide} style={{transform: `translateX(${this.state.xPos}%)`}} key={item + index}>{item}</div>
        }, []);

        return (
            <div className={classes.Slider}>
                {tranformedSliderArr}
                <button onClick={this.goLeft} style={{left: 0}}><i style={{color: 'white', fontSize: '30px'}} className="fa fa-arrow-left"></i></button>
                <button onClick={this.goRight} style={{right: 0}}><i style={{color: 'white', fontSize: '30px'}} className="fa fa-arrow-right"></i></button>
            </div>
        )
    }
}

export default Slider;