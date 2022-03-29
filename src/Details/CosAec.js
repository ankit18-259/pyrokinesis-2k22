import React from 'react'
import './Description.css'
import img from '../images/cosplay.jpg'

export default function CosAec(){
    return(
        <div className="description">
             <img src={img} />
            <h1>Cos' Aec</h1>
            <div className="stylish">
            <p>Get star struck over your favourite TV, anime and films idols. Treat yourself to executive fandom gear and unique costumes.

So buckle up everyone! Cos'Aec is your event! Where you can experience the best in pop culture because no matter what fandom you're passionate about, we have it waiting here for you where you can feel unafraid to geek out.
Get ready for the biggest Comic Cosplay Convention.
REGISTER NOW!!</p>
            <h4>Date: </h4>
            <h6>1st April</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/CZJLpjdWuzGDff2a9">Apply</a>
            </div>
        </div>
    );

}