import React from 'react'
import './Description.css'
import img from '../images/iron.jpg'

export default function Ironman(){
    return(
        <div className="description">
              <img src={img} />
            <h1>Iron Man</h1>
            <div className="stylish">
            <p>"You must see it. You must believe it.  And then your must never stop working to make it happen."
~ Arnold Schwarzenegger

Greetings Folks,
The wait is finally over, presenting before you the Annual Bodybuilding Competition called "IRONMAN" under the banner of Pyrokinesis, 2022.
IRONMAN is a Bodybuilding and Physics Competition for all the emerging bodybuilders out there.

About IRONMAN
Iron man is a bodybuilding and fitness competition under the banner of Pyrokinesis 
where the participants compete to show their best physique and fitness as a result of their 
hard work and determination. It is an integral part of this annual event. It has been organized 
year after year and its popularity among the body building enthusiasts has grown in the recent years. 
It attracts Body Builders from across the different states of North East thus adding to its popularity. 
It also attracts a large number of crowds in addition to the students of the college.
So buckle up and start pushing through your limits. Exciting Prizes awaits for the winner along with goodies !
So, hurry up and participate !!
For further details or any queries,
Contact : 8638107616/ 8753816306

Stay tuned for more updates !</p>
            <h4>Date: </h4>
            <h6>31st March</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLScdXr7LxXFtfNvJf-ZxfgSvQCR0UiBr2ltGe2NiDEHDOT39ZA/viewform?usp=sf_link">Apply</a>
            </div>
        </div>
    );

}