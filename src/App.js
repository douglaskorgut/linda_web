import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import classes from './App.css'
import ApplicationManager from "./containers/ApplicationManager";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className={classes.App}>
              <Layout>
                  <ApplicationManager></ApplicationManager>
              </Layout>
          </div>
      </BrowserRouter>

  );
}

export default App;
