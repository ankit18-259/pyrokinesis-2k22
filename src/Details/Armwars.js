import React from 'react'
import img from '../images/armwars.jpg'
import './Description.css'

export default function Armwars(){
    return(
        <div className="description">
             <img src={img} />
            <h1>Arm Wars</h1>
            <div className="stylish">
            <p>Greetings everyone!!

The wait is finally over and ‘TEAM ARM WARS’ invite all the arm-wrestlers 
to participate in our event, ‘ARM WARS’,2022 

ARM-WARS is an arm-wrestling competition which is going to be
held after a long gap of 7 years in PYROKINESIS i.e., the annual 
techno-cultural fest of Assam Engineering College, Guwahati; and this year
 we, the organizers, hope for a great success.

Prize- Rs 20000 worth

Registration fees- Rs 100</p>
            <h4>Date: </h4>
            <h6>31st March</h6>
            <a  className='btn btn-outline-dark' href="https://bit.ly/3Jwf3Mk">Apply</a>
            </div>
        </div>
    );

}