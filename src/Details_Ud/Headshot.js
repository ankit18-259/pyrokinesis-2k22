import React from 'react'
import Ud_Style from './Ud_Details.css'
import img from '../images/Headshoot.jpeg'

export default function Headshot(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Headshot</h1>
            <div className="stylish">
            <p>HEADSHOT is a best in class enthusiastic sport event. It involves tests of accuracy precision and speed of shooting. HEADSHOT is a competition based on AIR RIFLE SHOOTING(10m) and PISTOL SHOOTING (25m) which will be held under the name UDBHAVANAM. This event will be held at LAKSHYABHEDA SHOOTING RANGE, NEHRU STADIUM on  1&2 april, 2022 . Here participants will be personally guided and trained by coaches of international repute and after proper training is done, a competition will be held. Only around 35 participants are allowed to participate each day so only a total of 70 participants would be allowed to participate. Transportation facility and lunch will be provided. 
                Rs. 150/- for air rifle shooting (10m) 
                Fees :
                Rs. 150/- for pistol shooting (25m) 
                Rs. 250/- for both. 
                Awards:
                Participation certificate for all participants. 
                Prizes worth Rs. 10,000/- to be awarded to the winners. 
                And more exciting prizes.</p>
            <h4>Date: </h4>
            <h6>1st and  2nd April </h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/Ytw5vYnWScdmVuTC8">Apply</a>
            </div>
        </div>
    );

}