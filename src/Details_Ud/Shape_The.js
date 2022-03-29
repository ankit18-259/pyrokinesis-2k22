import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/Shapethescrap Pyrokinesis2022.jpg'

export default function Shape_The(){
    return(
        <div className="description">
            <img src={img} /> 
            <h1>Shape The Scrap</h1>
            <div className="stylish">
            <p>In an initiative to generate the habit of using old things to create beautiful models/design, an event “SHAPE THE SCRAP” will be held under the Annual Technical Fest UDBHAVANAM 9.0 of Assam Engineering College, Guwahati to highlight the importance of 3 R’s i.e. REDUCE, REUSE & RECYCLE for a better future. 

The competition focusses on bringing an understanding among the students about preserving the environment by reusing and recycling waste material.
Fantabulous ideas will be demonstrated using material like newspaper, old CDs, used plastic bottles, ropes, ice cream sticks, bangles, shoe boxes etc. This will ignite one such craft among the undergrads which follows environmental friendly principle and at the same time creates useful objects out of waste products.</p>
            <h4>Date: </h4>
            <h6>30th March</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/ysqCCDUos8MtcAxG8">Apply</a>
            </div>
        </div>
    );

}