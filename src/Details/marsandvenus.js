import React from 'react'
import './Description.css'
import img from '../images/mars.jpg'

export default function Marsandvenus(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Mars and Venus</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}