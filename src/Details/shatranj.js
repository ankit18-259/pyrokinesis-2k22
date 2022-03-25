import React from 'react'
import './Description.css'
import img from '../images/shatranj.jpg'

export default function Shatranj(){
    return(
        <div className="description">
              <img src={img} />
            <h1>Shatranj</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/eLz1xCWDGPxDqzyi8">Apply</a>
            </div>
        </div>
    );

}