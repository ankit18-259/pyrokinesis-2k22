import React from 'react'
import './Description.css'
import img from '../images/staccato.jpg'

export default function Staccato(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Staccato</h1>
            <div className="stylish">
            <p>"Music is the universal language of mankind. Where words fail, music speaks"...

We cordially invite the melomaniacs to the grand battle of musical extravaganza STACCATO, 2022. 

We proudly announce renowned artist Mr. JP Das sir as our judge for the competition.

Cash prize worth Rs 50,000 awaits the winner.Along with goodies and golden opportunities and certificates for the participants. The show will be telecasted live through NK TV. So buckle up for the grand musical battle🔥🔥

STACCATO is a musical event based on
different genres of music which is being held every year in PYROKINESIS i.e. the annual techno cultural fest of Assam Engineering College, Guwahati. Staccato, a solo singing competition gives a platform to the singers
from all over North East to show the catchy riffs, melodies and extraordinary contagious energy in their voice in front of the huge
crowd.</p>
            <h4>Date: </h4>
            <h6>Final - 1st April</h6>
            <a  className='btn btn-outline-dark' href= "https://forms.gle/xpT8jfEnKHZv9xRi9">Apply</a>
            </div>
        </div>
    );

}