import React from 'react'
import './Description.css'
import img from '../images/visavis.jpg'

export default function Visavis(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Vis Av Vis</h1>
            <div className="stylish">
            <p>Vis-à-Vis is a major event under Pyrokinesis the annual cultural fest of Assam Engineering College which is an interactive campus talk show between various renowned personalities and audience which motivate the youth for better goals and socially responsibilities for the betterment of the society. The renowned personalities from the discipline of technology, entertainment, journalism, sports, etc who have lead the society and the country through their outstanding qualities and achievements are invited to interact with the youth, faculty member and the whole of society. It serves as an amazing platform for the students and youth to come and interact with the renowned personalities who have reached the pinnacle of success in their respective domain. Vis-à-Vis has been one of the integral part of the annual fest under Pyrokinesis. Over the years the event has proved to be a grand success. We at Assam Engineering College are proud to be the host in excess of 20000 each year.</p>
            <h4>Date: </h4>
            <h6>31st March</h6>
            </div>
        </div>
    );

}