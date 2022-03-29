import React from 'react'
import Ud_Style from './Ud_Details.css'
import img from '../images/aerotech.jpg'

export default function Aerotech(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Aerotech</h1>
            <div className="stylish">
            <p>Aerotech, an event under Udbhavanam 9.0 , will be conducted under the flagship of ISTE( Indian Society for Technical Education), AEC Students' Chapter.

A perfect full package stop for aviation fanatics, Aerotech will be a 2 day event and will consist of an extensive worship on aerofoil design and how to make a remote controlled plane/glider from scratch which would be guided by our team and a veteran instructor of this field. Two exciting side perks of Aerotech would be the display of an RC Nitro engine and the demonstration of a Quadcopter. Also at the end, a competition related to the workshop would be held with attractive cash prizes.

This event will include hands-on training sessions, demonstrations and exhibitions related to Aviation and hence would be the perfect experience for anyone interested in this vast and intriguing field of science and technology.</p>
            <h4>Date: </h4>
            <h6>30th and 31st March</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLScVYIDKIaU220TvfoxL_3EfMYwfmu53IfBx5bPg-aJcF19suQ/viewform">Apply</a>
            </div>
        </div>
    );

}