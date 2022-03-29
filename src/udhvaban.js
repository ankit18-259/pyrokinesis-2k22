import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from './Cards/Cards_Ud';
import UdHome from './ud_home/UdHome.jsx'

import Backdoor from './Details_Ud/Backdoor';
import Build_Extra from './Details_Ud/Build_Extra';
import Aerotech from './Details_Ud/Aerotech';
import Beat_The from './Details_Ud/Beat_The';
import Chem_Quiz from './Details_Ud/Chem_Quiz';
import Code_Stellation from './Details_Ud/Code_Stellation';
import Constellate from './Details_Ud/Constellate';
import Echoes from './Details_Ud/Echoes';
import Escoventure from './Details_Ud/Escoventure';
import Grey_Matter from './Details_Ud/Grey_Matter';
import IPL_Auction from './Details_Ud/IPL_Auction';
import Line_Follower from './Details_Ud/Line_Follower';
import Robo_Soccer from './Details_Ud/Robo_Soccer';
import Robo_Sumo from './Details_Ud/Robo_Sumo';
import Shape_The from './Details_Ud/Shape_The';
import Stock_Warz from './Details_Ud/Stock_Warz';
import Tech_Talk from './Details_Ud/Tech_Talk';
import The_Discussion from './Details_Ud/The_Discussion';
import Decode_Stack from './Details_Ud/Decode_Stack';
import Headshot from './Details_Ud/Headshot';

function Udhvaban(){
    return(
        <Switch>
        <Route path = "/udbhavanams">
          <UdHome />
          <Cards />
        </Route>
        <Route path ='/udbhavanam/Backdoor'>
          <Backdoor />
        </Route>
        <Route path ='/udbhavanam/Build_Extra'>
          <Build_Extra />
        </Route>        
        <Route path ='/udbhavanam/Aerotech'>
          <Aerotech />
        </Route> 
        <Route path ='/udbhavanam/Beat_The'>
          <Beat_The />
        </Route> 
        <Route path ='/udbhavanam/Chem_Quiz'>
          <Chem_Quiz />
        </Route> 
        <Route path ='/udbhavanam/Code_Stellation'>
          <Code_Stellation />
        </Route> 
        <Route path ='/udbhavanam/Decode_Stack'>
          <Decode_Stack />
        </Route> 
        <Route path ='/udbhavanam/Constellate'>
          <Constellate />
        </Route> 
        <Route path ='/udbhavanam/Echoes'>
          <Echoes />
        </Route> 
        <Route path ='/udbhavanam/Escoventure'>
          <Escoventure />
        </Route> 
        <Route path ='/udbhavanam/Grey_Matter'>
          <Grey_Matter />
        </Route> 
        <Route path ='/udbhavanam/IPL_Auction'>
          <IPL_Auction />
        </Route> 
        <Route path ='/udbhavanam/Line_Follower'>
          <Line_Follower />
        </Route>    
        <Route path ='/udbhavanam/Robo_Soccer'>
          <Robo_Soccer />
        </Route>       
        <Route path ='/udbhavanam/Robo_Sumo'>
          <Robo_Sumo />
        </Route> 
        <Route path ='/udbhavanam/Shape_The'>
          <Shape_The />
        </Route> 
          <Route path ='/udbhavanam/Stock_Warz'>
          <Stock_Warz />
        </Route> 
        <Route path ='/udbhavanam/Tech_Talk'>
          <Tech_Talk />
        </Route> 
        <Route path ='/udbhavanam/The_Discussion'>
          <The_Discussion />
        </Route> 
        <Route path ='/udbhavanam/Headshot'>
          <Headshot />
        </Route> 
      </Switch>

    );
}
export default Udhvaban;