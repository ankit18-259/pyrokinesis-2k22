import React from 'react'
import img from '../images/intracity_ride.jpg'
import './Description.css'

export default function Aectrial(){
    return(
        <div className="description">
             <img src={img} />
            <h1>Real Trial</h1>
            <div className="stylish">
            <p>Event : Ride Trial
 Sub Events: Bike Rally, Circuit race, Slow race, Bike stunts
 Objectives:
1. To promote Pyrokinesis across Guwahati City through a Bike Rally.
2. To aware the spectators about the importance of road safety and safety gears through professional stuntmen and government officials (bike stunt).
3. To create a positive image of the motorcycle community to the public, which is often portrayed in a negative light.
4. To create a sense of camaraderie and brotherhood among the riders through the rally.</p>
            <h4>Date: </h4>
            <h6>30th March and 31st March</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/RrLAM843cJWChxAT8">Apply</a>
            </div>
        </div>
    );

}