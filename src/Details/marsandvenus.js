import React from 'react'
import './Description.css'
import img from '../images/mars.jpg'

export default function Marsandvenus(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Mars and Venus</h1>
            <div className="stylish">
            <p>MARS & VENUS IS THE ANNUAL PAGEANT EVENT HELD BY ASSAM
ENGINEERING COLLEGE STUDENT UNION AS PART OF THE ANNUAL
COLLEGE FEST
AT THIS EVENT STUDENTS FROM VARIOUS UNIVERSITY PARTICIPATES
ACTIVELY TO SHOWCASE THEIR PAGEANTRY SKILLS. THE EVENT
INCLUDES 2 DAYS OF GROOMING SESSIONS AND A MAIN SHOWCASE.
THE MAIN SHOWCASE INCLUDES THE FOLLOWING ROUNDS:
1. INTRODUCTION/TRADITIONALROUND
2. TALENTROUND
3. FINAL/WESTERNROUND</p>
            <h4>Date: </h4>
            <h6>30th March</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLSfSmLdRGujBQyk0GtLperXPDJ9gf8B3M68m0Gm_phSjBKCUgA/viewform">Apply</a>
            </div>
        </div>
    );

}