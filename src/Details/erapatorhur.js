import React from 'react'
import './Description.css'
import img from '../images/এৰা_বাটৰ_সুৰ.jpg'

export default function Erapatorhur(){
    return(
        <div className="description">
            <img src={img} />
            <h1>এৰা বাটৰ সুৰ</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/1gMM5Xx0QYehtaVdUohGTG3O_DCssyKaiigZSr-Ktcvk/edit?usp=drivesdk">Apply</a>
            </div>
        </div>
    );

}