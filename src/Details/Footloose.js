import React from 'react'
import './Description.css'
import img from '../images/footloose.jpg'

export default function Footloose(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Battle of Bands</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/DcBo7ECcy3hQqmAk6">Apply</a>
            </div>
        </div>
    );

}