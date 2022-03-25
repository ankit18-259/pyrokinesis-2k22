import React from 'react'
import './Description.css'
import img from '../images/football.jpg'

export default function Football5on5(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Football 5 on 5</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}