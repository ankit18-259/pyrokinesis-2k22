import React from 'react'
import Ud_Style from './Ud_Details.css'
import img from '../images/beat-the.jpg'


export default function Beat_The(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Beat The Circuitry</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}