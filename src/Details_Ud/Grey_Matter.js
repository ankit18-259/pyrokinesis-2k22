import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/Grey Matters 2022 poster - Nilim Shekhar Bordoloi.jpg'

export default function Grey_Matter(){
    return(
        <div className="description">
            <img src={img}  />
            <h1>Grey Matter</h1>
            <div className="stylish">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur?</p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}