import React from 'react'
import img from '../images/cricket6on6.png'
export default function Cricket(){
    return(
        <div className="description" >
            <img src={img} />
            <h1>Cricket 6 On 6</h1>
            <div className="stylish">
            <p>Cricket Tournament with 6 members in each side.</p>
            <h4>Date: </h4>
            <h6>30th March to 1 April</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}