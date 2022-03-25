import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types'

import Cards from './Cards/Cards';
import CosAec from './Details/CosAec';
import Football from './Details/football5on5';
import Skoar from './Details/skoar';
import Shatranj from './Details/shatranj';
import Natraj from './Details/natraj';
import Footloose from './Details/Footloose';
import Visavis from './Details/visavis';
import Ironman from './Details/ironman';
import Streetbeatz from './Details/streetbeatz';
import Cricket from './Details/cricket6on6';
import Volleyball from './Details/beachvolleyball';
import Basketball from './Details/basketball';
import Bordoisila from './Details/bordoisila';
import Erapatorhur from './Details/erapatorhur'
import Funandgames from './Details/funandgames'
import Marsandvenus from './Details/marsandvenus'
import Aectrial from './Details/aectrial'
import Aecgrandslam from './Details/aecgrandslam'
import Electrofest from './Details/electrofest'
import Staccato from './Details/staccato'


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Pyroevent(){
    return(
     <Switch>
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
        <Route path ='/event/footloose'>
          <Footloose />
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
      </Switch> 

    );
}

export default Pyroevent;