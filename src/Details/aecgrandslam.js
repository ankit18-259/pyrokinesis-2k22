import React from 'react'
import './Description.css'
import img from '../images/Aec_grand_slam.jpg'

export default function Aecgrandslam(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Aec Grand Slam</h1>
            <div className="stylish">
            <p>“I think luck falls on not just the brave but also the ones who believe they belong there.”
— Novak Djokovic

Greetings Everyone,
Is there a game more beautiful than tennis, we often ask ourselves. We fail to come up with any answer other than a resounding "No."
                                                                                                                                                              So, in an attempt to recreate and relive the evergreen moments of tennis and to boost the talent of young players, we bring to you "AEC GRAND SLAM" under the banner of "Pyrokinesis 2022". Come and join us in this voyage of tennis in ASSAM ENGINEERING COLLEGE and leave your mark on the court.                                                                                              PLAY WITH RESPECT, WIN WITH GRACE.

For queries contact 
Ravindran R Mahanta
9954610265
Navneet Dip Das
9101732844
Arup Dhar
8638768470</p>
            <h4>Date: </h4>
            <h6>30th March to 2nd April</h6>
            <a  className='btn btn-outline-secondary' href="https://forms.gle/b993FaFjpZztBv8z9">Apply</a>
            </div>
        </div>
    );

}