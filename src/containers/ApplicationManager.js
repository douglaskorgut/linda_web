import React from 'react';
import classes from './ApplicationManager.module.css';
import Contact from '../components/Contact/Contact';
import AboutMe from '../components/AboutMe/AboutMe';
import Home from '../components/Home/Home';
import Aux from '../hoc/Aux';
import { Route } from 'react-router-dom';

class ApplicationManager extends React.Component {

    render() {
        return (
            <Aux className={classes.ApplicationManager}>
                <Route path="/" exact render={() => <Home></Home>}></Route>
                <Route path="/sobre-mim" exact render={()=><AboutMe />} ></Route>
                <Route path="/contato" exact render={()=><Contact/>} ></Route>
            </Aux>
        );
    };
}

export default ApplicationManager;
