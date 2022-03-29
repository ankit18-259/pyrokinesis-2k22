import React from 'react'
import './Description.css'
import img from '../images/Strret.png'

export default function Streetbeatz(){
    return(
        <div className="description">
            <img src={img}  />
            <h1>Street Beatz</h1>
            <div className="stylish">
            <p>Our event "Street Beatz" is the centerpiece of the fest. It is an Underground dance battle performed under Pyrokinesis. Street Beatz is a street battle or a dance face off event divided into two major categories [1 on 1 and crew vs crew). Participants from various states (e.g Meghalaya, Manipur, Mizoram, West Bengal, Arunachal Pradesh etc) comes to join this contest. There are four particular dance styles for 1 on 1-All-style, popping, breaking and hip-hop. For crew vs crew individuals should use the sub categorized dance styles of hip hop such as popping, locking, breaking, tutting. krumping, digiting, etc. Over the years, this event has proved to be a grand success attracting thousands of people into our college.</p>
            <h4>Date: </h4>
            <h6>30th March</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/1Y-L9k4QzcQB4tE7uDL5M4dtBzAYCv3mQmXqunRe-4z0">Apply</a>
            </div>
        </div>
    );

}