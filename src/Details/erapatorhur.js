import React from 'react'
import './Description.css'
import img from '../images/এৰা_বাটৰ_সুৰ.jpg'

export default function Erapatorhur(){
    return(
        <div className="description">
            <img src={img} />
            <h1>এৰা বাটৰ সুৰ</h1>
            <div className="stylish">
            <p>এৰা বাটৰ সুৰ organises various competitions including short film making competition, monoact competition and photography competition.
 Every year এৰা বাটৰ সুৰ invities renowned theatre and film personalities to Assam Engineering College and the audience can have a one to one interaction with the celebrities. 
এৰা বাটৰ সুৰ has one more engrossing event- a film screening event.</p>
            <h4>Date: </h4>
            <h6>30th March and 1 April</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/1gMM5Xx0QYehtaVdUohGTG3O_DCssyKaiigZSr-Ktcvk/edit?usp=drivesdk">Apply</a>
            </div>
        </div>
    );

}