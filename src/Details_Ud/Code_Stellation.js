import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/codestellation1.jpeg' 

export default function Code_Stellation(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Code Stellation</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <a href="https://codewar.pyrokinesis.in">CodeWar3.0 Website </a> 
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}