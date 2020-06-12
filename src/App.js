import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import classes from './App.css'
import ApplicationManager from "./containers/ApplicationManager";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <ApplicationManager></ApplicationManager>
      </Layout>
    </div>
  );
}

export default App;
