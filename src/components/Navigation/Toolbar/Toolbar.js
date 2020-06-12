import React from "react";
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css'
import FloweredBorder from '../../FloweredBorder/FloweredBorder';

const toolbar = (props) =>{
   return (
           <header className={classes.Toolbar}>
               <FloweredBorder reflected={false}/>
               <nav>
                   <NavigationItems/>
               </nav>
               <FloweredBorder reflected={true}/>
           </header>
   );
};

export default toolbar;


