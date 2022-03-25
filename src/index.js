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

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
        <Pyroevent />
        <Udhvaban/>

      {/* <Switch>
        <Route path = "/events">
          <Cards />
        </Route>
        <Route path ='/event/CosAec'>
          <CosAec />
        </Route>
        <Route path ='/event/football5on5'>
          <Football />
        </Route>        
        <Route path ='/event/skoar'>
          <Skoar />
        </Route> 
        <Route path ='/event/shatranj'>
          <Shatranj />
        </Route> 
        <Route path ='/event/natraj'>
          <Natraj />
        </Route> 
        <Route path ='/event/battleofbands'>
          <Battleofbands />
        </Route> 
        <Route path ='/event/visavis'>
          <Visavis />
        </Route> 
        <Route path ='/event/ironman'>
          <Ironman />
        </Route> 
        <Route path ='/event/streetbeatz'>
          <Streetbeatz />
        </Route> 
        <Route path ='/event/cricket6on6'>
          <Cricket />
        </Route> 
        <Route path ='/event/beachvolleyball'>
          <Volleyball />
        </Route> 
        <Route path ='/event/basketball'>
          <Basketball />
        </Route>    
        <Route path ='/event/bordoisila'>
          <Bordoisila />
        </Route>       
        <Route path ='/event/erapatorhur'>
          <Erapatorhur />
        </Route> 
        <Route path ='/event/funandgames'>
          <Funandgames />
        </Route> 
          <Route path ='/event/marsandvenus'>
          <Marsandvenus />
        </Route> 
        <Route path ='/event/aectrial'>
          <Aectrial />
        </Route> 
        <Route path ='/event/aecgrandslam'>
          <Aecgrandslam />
        </Route> 
        <Route path ='/event/electrofest'>
          <Electrofest />
        </Route> 
        <Route path ='/event/staccato'>
          <Staccato />
        </Route>
      </Switch> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
