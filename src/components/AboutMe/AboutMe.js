import React from 'react';
import classes from './AboutMe.module.css';
import lindaWeb from '../../assets/images/linda_web.png';

const aboutMe = (props) => {

    const aboutMeText = 'Vestibulum eu leo sed enim tincidunt finibus eget ut quam. Morbi convallis ipsum et turpis dignissim, et faucibus leo vestibulum. Sed pellentesque felis id turpis condimentum, vitae lacinia lectus pellentesque. Quisque in nisl quis mi porta scelerisque viverra ornare erat. Sed commodo venenatis turpis. Aliquam velit nisi, feugiat eu magna quis, pharetra accumsan diam. Mauris luctus blandit nunc et suscipit. Nunc cursus, mi sit amet convallis varius, lectus est facilisis massa, in iaculis orci purus ac neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris efficitur dictum nibh, sit amet mollis tortor tempor quis. Donec vel sapien non nisl laoreet tempor sed ac sapien. Vivamus commodo risus nunc, et gravida nulla congue quis. Duis in cursus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
    const aboutMeTextCont = 'Vestibulum eu leo sed enim tincidunt finibus eget ut quam. Morbi convallis ipsum et turpis dignissim, et faucibus leo vestibulum. Mauris efficitur dictum nibh, sit amet mollis tortor tempor quis. Donec vel sapien non nisl laoreet tempor sed ac sapien. Vivamus commodo risus nunc, et gravida nulla congue quis';
    const aboutMeTextFinal = 'Vestibulum eu leo sed enim tincidunt finibus eget ut quam. Morbi convallis ipsum et turpis dignissim, et faucibus leo vestibulum.';

    return (
        <div className={classes.AboutMe}>
            <div className={classes.Wrapper}>
                <img src={lindaWeb}/>
                <div className={classes.column}/>
                <div style={{display: 'flex', flexDirection:'column', width: '50%'}}>
                    <h1>Isabelle Risolía</h1>
                    <p>{aboutMeText}</p>
                    <p>{aboutMeTextCont}</p>
                    <p>{aboutMeTextFinal}</p>
                </div>
            </div>
        </div>
    )
};

export default aboutMe;
