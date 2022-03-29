import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/robo_sumo.jpg'

export default function Robo_Sumo(){
    return(
        <div className="description">
            <img src={img} /> 
            <h1>Robo Sumo</h1>
            <div className="stylish">
            <p>R-AEC is the organising committee of all the events belonging to the field of Robotics be it hardware or software, under the banner of Udbhawanam. This time the various competitions held by us are as follows:
Robo Sumo(where each of the two bots tries to push each other out of boundary)
Robo Soccer( where the bot scoring maximum goals wins)
Line follower( it's an autonomous event in which the bot has to detect the trajectory marked black and follow the path in shortest time possible)</p>
            <h4>Date: </h4>
            <h6>30th and 31st March</h6>
            <a  className='btn btn-outline-dark' href="https://linktr.ee/RAEC">Apply</a>
            </div>
        </div>
    );

}