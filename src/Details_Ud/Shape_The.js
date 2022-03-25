import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/Shapethescrap Pyrokinesis2022.jpg'

export default function Shape_The(){
    return(
        <div className="description">
            <img src={img} /> 
            <h1>Shape The Scrap</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}