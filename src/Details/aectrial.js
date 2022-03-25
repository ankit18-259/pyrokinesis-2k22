import React from 'react'
import img from '../images/intracity_ride.jpg'
import './Description.css'

export default function Aectrial(){
    return(
        <div className="description">
             <img src={img} />
            <h1>Real Trial</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/RrLAM843cJWChxAT8">Apply</a>
            </div>
        </div>
    );

}