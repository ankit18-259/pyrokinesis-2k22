import React from 'react'
import Ud_Style from './Ud_Details.css'
import img from '../images/backdoor.png'

export default function Backdoor(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Backdoor Scientist</h1>
            <div className="stylish">
            <p>ASSAM ENGINEERING COLLEGE 
UDBHAVANAM 2k22 V9.0 presents

BACKDOOR SCIENTIST

ABOUT THE EVENT:

Model making competition

The competition comprises two rounds;
First, is the model making round,
and the Second, is the quiz round.

TEAM SPECIFICATION: Each team can have a maximum of three participants.
Registration fee- Rs. 100/- per team. 

**Further change in rules, if any, will be notified to the registered teams.

Venue: Assam Engineering College Building

Prizes worth upto Rs. 10000/- to be won!

Last date for Registration-29/03/22</p>
            <h4>Date: </h4>
            <h6>30th March</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLSeJeBdUqXWaQqVd1YCLGaycrnpcKYh2AhAcBGwhiLhi6UdhaQ/viewform?usp=sf_link">Apply</a>
            </div>
        </div>
    );

}