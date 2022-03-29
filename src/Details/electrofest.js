import React from 'react'
import './Description.css'
import img from '../images/electrofest.jpg'

export default function Electrofest(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Electrofest</h1>
            <div className="stylish">
            <p>“Electrofest” is a main stage event organized under the banner of
Pyrokinesis. It is a band competition based on metal and rock
music and also a musical Extravaganza which provides a
platform to aspiring and emerging youth and the experienced
old to showcase their musical talents in front of a huge crowd. It
has been one of the main attractions of Pyrokinesis since its
inception.</p>
            <h4>Date: </h4>
            <h6>1st April</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLScYZoN62AGjhJksRQ1_U-JyVidh3-ZSQHlLN3eyXtUFjG9vQA/viewform">Apply</a>
            </div>
        </div>
    );

}