import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/chem_quiz.jpg'

export default function Chem_Quiz(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Chem Quiz</h1>
            <div className="stylish">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto possimus quas omnis sapiente quisquam aspernatur nulla asperiores placeat voluptates exercitationem, perferendis provident reprehenderit ut libero dolor distinctio corporis modi reiciendis neque ipsam ad molestias? Excepturi libero quos cum eaque deserunt nihil veritatis modi minus mollitia molestiae adipisci magnam commodi animi pariatur vitae nesciunt inventore tempora asperiores dolor, dolores facilis impedit ullam. Cumque sapiente alias totam, dolorem commodi sequi ullam animi voluptatibus architecto earum ab. </p>
            <h4>Date: </h4>
            <h6>Lorem, ipsum.</h6>
            <a  className='btn btn-outline-dark' href="">Apply</a>
            </div>
        </div>
    );

}