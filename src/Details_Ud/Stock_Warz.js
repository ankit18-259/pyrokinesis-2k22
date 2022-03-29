import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/Stock War.jpg'

export default function Stock_Warz(){
    return(
        <div className="description">
            <img src={img} /> 
            <h1>Stock Warz</h1>
            <div className="stylish">
            <p>Stockwarz in collaboration with EDC under the banner of Udbhavanam is a virtual stock trading competition wherein the participants exhibit their trading skills and experience in a stock market simulation.

In stockwarz, trade stocks in real time with virtual cash and maximize your portfolio against fellow traders. 
Analyze the market, strategize your investment and play safe by capitalizing on limited downside risk. 

Participate in stockwarz and showcase what it takes to be the next "Big Bull".</p>
            <h4>Date: </h4>
            <h6>30 and 31 March </h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/uGPFFxYDxFWWxZx49">Apply</a>
            </div>
        </div>
    );

}