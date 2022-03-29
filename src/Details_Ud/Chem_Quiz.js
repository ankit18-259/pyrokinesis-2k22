import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/chem_quiz.jpg'

export default function Chem_Quiz(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Chem Quiz</h1>
            <div className="stylish">
            <p> "Chemistry begins in the stars, the stars are the source of chemical elements, which are the building blocks of matter and core of our subject"
This March-end the wait finally ends, the annual technical event 'Chemquiz' under the banner of Udbhavanam is here. 
Chemquiz is a Mega-State level quiz competition for all the chemistry enthusiast folks, to tackle some brain-racking yet interesting questions. Join in groups of two and get a chance to win the BIGGEST Chemistry quiz in town.</p>
            <h4>Date: </h4>
            <h6>31st March</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLSef8BblG8Yi-CKNAq9ONdAM0EkWkoEmSbDukkfwfoZmvbunrA/viewform?usp=sf_link">Apply</a>
            </div>
        </div>
    );

}