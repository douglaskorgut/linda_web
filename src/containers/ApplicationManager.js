import React from 'react';
import classes from './ApplicationManager.module.css';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import Aux from '../hoc/Aux';

class ApplicationManager extends React.Component {

    render() {
        return (
            <Aux className={classes.ApplicationManager}>
                {/*<Contact/>*/}
                <AboutMe/>
            </Aux>
        );
    };
}

export default ApplicationManager;
