import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/tech_talk.jpg'

export default function Tech_Talk(){
    return(
        <div className="description">
            <img src={img} /> 
            <h1>Tech Talk</h1>
            <div className="stylish">
            <p>Greetings everyone! 

Presenting before you the annual technical talk show - Tech Talks, organized under the banner of Udbhavanam - the annual technical fest of Assam Engineering College.

Tech-Talk is an inspirational, educational and motivational learning resource about technology and communications for non-techies and techies. It’s designed to help everyone at work feel like a hero.
We Arm Students, Patrons and Busy Professionals
With the Missing Technology (and Communications) Skills
they need to achieve excellence in the workplace.

Detailed information will be posted on our official event page. 

Follow us on Instagram -
https://instagram.com/techtalk_22?utm_medium=copy_link</p>
            <h4>Date: </h4>
            <h6>30th March </h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLSfA3C6DOX-vJMdiaRd3Lro6Lb-Zc1SOQyEhkWJfOqyx22QDjw/viewform?usp=pp_url">Apply</a>
            </div>
        </div>
    );

}