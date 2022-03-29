import React from 'react'
import './Description.css'
import img from '../images/skoar.jpg'

export default function Skoar(){
    return(
       <div className="description">
           <img src={img} />
            <h1>SKOAR</h1>
            <div className="stylish">
            <p>SKOAR - Gaming Contest has grown to become one of North-East major college eSports event. Today we continue to help our players to improve their skills which further boosts their strategic thinking, teamwork, communication, leadership, performance skills and confidence building.

For more than ten years , TEAM SKOAR has been organizing this event. The Gaming sector is taking leaps with advancements in technology. With artificial intelligence, augmented reality, and mobile technology – games are getting some major upgrades . This is where our Gaming event can help you. We help you stand out from your competitors and better connect with your target audience.
SKOAR is the ultimate Gaming platform you cant miss to showcase your eSports gaming talent. Providing a wide range of games, SKOAR gives you the opportunity to compete against the best of the best. The exciting events comprises of highly competitive Games like Valorant, FIFA, MLBB and BGMI. With BGMI offering Squad, Duo and TDM modes with different maps. Come join us to claim your glory among the best. The eSports scenario is changing. An exciting prize pool awaits you!</p>
            <h4>Date: </h4>
            <h6>30th March, 31st March and 1st April</h6>
            <a  className='btn btn-outline-dark' href="https://linktr.ee/skoar.2k22   ">Apply</a>

            </div>
        </div>
    );

}