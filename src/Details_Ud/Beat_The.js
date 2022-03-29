import React from 'react'
import Ud_Style from './Ud_Details.css'
import img from '../images/beat-the.jpg'


export default function Beat_The(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Beat The Circuitry</h1>
            <div className="stylish">
            <p>Circuit building event. This is an event where a student needs to solve a given problem statement by making a circuit that will be made using the circuit elements provided by the organising body.
Also a round with mcqs that will be based on Network Theorems will be taken up first.</p>
            <h4>Date: </h4>
            <h6>30 March</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/ZoPzLeTWoroG6oFu8">Apply</a>
            </div>
        </div>
    );

}