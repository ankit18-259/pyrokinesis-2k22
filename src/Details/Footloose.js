import React from 'react'
import './Description.css'
import img from '../images/footloose.jpg'

export default function Footloose(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Footloose</h1>
            <div className="stylish">
            <p>Footloose is one of the most anticipated events of Assam Engineering College's Annual cultural festival PYROKINESIS. Footloose is the part of Pyrokinesis since its advent.
It is a modern dance competition in which people can compete individually or in groups. It is a platform where youth can showcase their talents. It will be an afternoon full of varied dance performances from Latin to Hip Hop, great food and beverages, as well as exciting prices.
Footloose is an event focusing on the best aspects of dance competition - fun, talent, friendship, skills, support and achievement. Although not every dancer will go on to perform professionally, they all deserve to be honoured for their devotion to the art of dance. All That! Dancers, along with hundreds of other dancers from throughout the state, will take the stage to showcase what they have been working on throughout the year. It will be held on 31 March, 2022 at the Auditorium of ASSAM ENGINEERING COLLEGE.  </p>
            <h4>Date: </h4>
            <h6>31st March</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/DcBo7ECcy3hQqmAk6">Apply</a>
            </div>
        </div>
    );

}