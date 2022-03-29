import React from 'react'
import './Description.css'
import img from '../images/Bordoisila.jpg'

export default function Bordoisila(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Bordoisila</h1>
            <div className="stylish">
            <p>Assam Engineering College is one of the premiere Engineering Colleges of North Eastern India. Established in 1955,it is the oldest technical college of NE India. 

"Pyrokinesis" is the flagship event of the college and is also one of the biggest cultural festivals of NE India.It has been hosted to some some of the biggest names in the field of music of INDIA.

"BORDOISILA" is a flagship event held under the banner of PYROKINESIS. 
       What is Bordoisila actually? As it sounds , it is  native Assamese word that is a thunderstorm that marks the starting of a new year and our beloved ' Bohag Bihu '.
          So taking this name we have an event organised at pyrokinesis every year. Basically it is a state level 'Bihu Husori' competition' which is  the result of the integrated efforts of the dancers , musicians , singers etc. 
         Teams from different parts basically comes with sheer enthusiasm to be a part of this joyous event. A beautiful sum of money is awarded to the team which is able to give the best and also eye catching performance interms of perfection as well as discipline. Along with this many others awards are also given to the participants.
Here the best among the participants are handpicked by the globally recognised Judges. 
         So , at end we will like to invite everyone to this glorious event where we will sing , dance , and rejoice the beautiful culture Assam is enriched with.

This year the event is scheduled to be held in the 30th of March,2022</p>
            <h4>Date: </h4>
            <h6>30th March</h6>
            </div>
        </div>
    );

}