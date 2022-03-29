import React from 'react'
import './Description.css'
import img from '../images/basketball.jpg'


export default function Basketball(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Basketball</h1>
            <div className="stylish">
            <p>“Talent wins games but teamwork and intelligence wins championships.” ~Michael Jordan        

An OPEN 5 vs 5 Basketball Tournament organised under "PYROKINESIS 2022”.
Teams of various clubs and institutes across the region come forward make this event a grand success.

NOTE:
Date- 30th March to 2nd April
Venue- AEC, Ghy-13 Basketball Court 

TOURNAMENT FORMAT:
* 5 Players + Maximum of 5 substitutes

* Full-court 5v5 knockouts.

* 4 quadrant match of 8 minute each.
 
* Final & Semi-finals will be full court 5v5 - 4 quadrants of 10 minutes each.

Register here- https://linktr.ee/IntoTheHoop_Pyro22

PS: 
* The format may change depending on number of participating teams.
* All the participating teams will be added to a whatsapp group where further information regarding the tournament will be provided.</p>
            <h4>Date: </h4>
            <h6>30th MArch</h6>
            <a  className='btn btn-outline-dark' href="https://linktr.ee/IntoTheHoop_Pyro22">Apply</a>
            </div>
        </div>
    );

}