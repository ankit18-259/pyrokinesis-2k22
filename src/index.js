import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Udhvaban from './udhvaban.js'
import Pyroevent from './pyroevent.js'
import Navbar from './Navbar/navbar.jsx'
import lol from './home.js'
import Teams from './Team/Team.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
    <Switch>
      <Route exact path='/teams'>
        <Teams/>
      </Route>
    </Switch>
        <Pyroevent />
        <Udhvaban/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
