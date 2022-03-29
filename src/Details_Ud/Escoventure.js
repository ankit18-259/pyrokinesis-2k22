import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/escoventure.png'


export default function Escoventure(){
    return(
        <div className="description">
            <img src={img}  />
            <h1>Escoventure</h1>
            <div className="stylish">
            <p>With every passing day, we can see the emerging importance and benefits of entrepreneurship to
students who are not less than an asset for any country, but however since the last few years, India has
not seen an profitable rise in the no. of business enthusiasts among students.
Perhaps, according to recent statistics, the prediction announced the no. of business enthusiasts to reach a
peak from the year 2020- 2030.With an aim to create oppurtunities for students who are declined towards innovation, problem solving, creation, Escoventure is a pitch deck organised by Entrepreneurship Development Cell
of AEC where we provide a platform for proposing new business plans and
ideas to stimulate interests among students covering every aspects of the pitch
to potential investors.Our event provides a platform for students from all over India to showcase
their problem solving skills and escalate their innovative business ideas
infront of experienced and renowned panellist from various entrepreneurial
background. 
 1st round of the event is the online round where participants have to submit the abstract of their B-Plan. 2nd round will be the finale round where shortlisted students have to pitch in front of panel members. The winner will get cash worth of Rs. 50,000 followed by a number of exciting opportunities.</p>
            <h4>Date: </h4>
            <h6>1st round: Abstract Submission till 26th, Finale on 31st.</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/qTCkw6BzR6MZub8s9">Apply</a>
            </div>
        </div>
    );

}