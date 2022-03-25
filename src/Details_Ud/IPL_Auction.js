import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/ipl.png'

export default function IPL_Auction(){
    return(
        <div className="description">
            <img src={img}  />            
            <h1>Backdoor Scientist</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}