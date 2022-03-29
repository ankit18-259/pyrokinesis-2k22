import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/Grey Matters 2022 poster - Nilim Shekhar Bordoloi.jpg'

export default function Grey_Matter(){
    return(
        <div className="description">
            <img src={img}  />
            <h1>Grey Matter</h1>
            <div className="stylish">
            <p>"Grey Matters" is the most awaited Mega Quiz of the North-East.
We have invited Mr. Abhinav Dhar to be our Quizmaster for Grey Matters 2022.
There are cash prizes for winners along with refreshments, goodies and merchandize for the participants. There will be special prizes for school students. 
"Grey Matters 2022" is an open quiz so anybody can participate in it.
</p>
            <h4>Date: </h4>
            <h6>2nd April</h6>
            <a  className='btn btn-outline-dark' href="https://tinyurl.com/GreymattersDetails">Apply</a>
            </div>
        </div>
    );

}