import React from 'react'
import './Description.css'
import img from '../images/fun_and_games.jpg'

export default function Funandgames(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Fun and Games</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/4dwYkggmF8uhGHV38">Apply</a>
            </div>
        </div>
    );

}