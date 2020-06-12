import React from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Navigation/Footer/Footer';


class Layout extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Toolbar/>
                <div style={{width: '100%', marginTop:'-20px'}}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
};

export default Layout;
