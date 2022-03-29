import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/constellate.jpeg' 

export default function Constellate(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Constellate</h1>
            <div className="stylish">
            <p>CONSTELLATE 3.0-

The one-of-it’s-kind event challenges both an engineers’ genius and petrol-heads’ nerves as budding college students are compelled to design and race their own RC cars but Wait!  Wait!  Wait!

There’s a catch; though the teams will be given the chassis, they'll have to develop the bodywork to survive the given track.

We need motorsport lovers to take up this sport and spread awareness. There is a great level of learning and excitement in this sport. Also this is a team sport. 

So, come join this exciting event of CONSTELLATE 3.0 under the banner of Udbhavanam - the annual tech fest of Assam Engineering College (Guwahati) and explore the technical aspect of one’s mind filled with innovative ideas.

DAY 1-
SEMINAR-
Seminar and workshop by a renowned resource person and a chance to witness the dismantling of an engine with in-hand experience. 

DAY 2-
RC KIT ASSEMBLING AND RACE COMPETITION-

RULES FOR THE PARTICIPANTS-
1)        A team of two members is allowed to participate in building the RC kit.
2)        The winners will be selected depending upon their final score( rules will be disclosed later ) 
3)        A race between the RC cars will be organized among the teams.
4)        Registration fees- ₹150 (₹75 for each member).
5)        Exciting prizes will be distributed among the top teams and participation certificates for all the teams.

</p>
            <h4>Date: </h4>
            <h6>30th and 31st March</h6>
            <a  className='btn btn-outline-dark' href="https://docs.google.com/forms/d/e/1FAIpQLScgWf2PXsMU51nKJ8vDAAEjqb64CRFtvvYReDSCjFx0VruRSg/viewform?usp=sf_link">Apply</a>
            </div>
        </div>
    );

}