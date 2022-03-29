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
import Home from './home.js'
import ContactList from './contact/contact.js'
import Theme from './Theme.js'
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
    <Switch>
      <Route exact path='/theme'>
        <Theme/>
      </Route>
    </Switch>
    <Switch>
      <Route exact path='/teams'>
        <Teams/>
      </Route>
    </Switch>
    <Switch>
      <Route exact path='/contact'>
        <ContactList/>
      </Route>
    </Switch>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
    </Switch>
        <Pyroevent />
        <Udhvaban/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
