import React from 'react'
import './Description.css'
import img from '../images/football.jpg'

export default function Football5on5(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Football 5 on 5</h1>
            <div className="stylish">
            <p>It is a 5 aside football match or a futsal </p>
            <h4>Date: </h4>
            <h6>30 March to 2 April</h6>
            </div>
        </div>
    );

}