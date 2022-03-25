import React from 'react'
import './Description.css'
import img from '../images/staccato.jpg'

export default function Staccato(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Staccato</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href= "https://forms.gle/xpT8jfEnKHZv9xRi9">Apply</a>
            </div>
        </div>
    );

}