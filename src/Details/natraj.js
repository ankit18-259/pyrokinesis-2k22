import React from 'react'
import './Description.css'
import img from '../images/Natraj.jpg'


export default function Natraj(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Natraj</h1>
            <div className="stylish">
            <p>Natraj is a hindu god. Natraj is the only classical cum semi classical dance competition in AEC and under the banner of pyrokinesis.

Participants can participate as solo or as a group.
</p>
            <h4>Date: </h4>
            <h6>30th March</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/uZVwwCKBpTwqB1Gb9">Apply</a>
            </div>
        </div>
    );

}