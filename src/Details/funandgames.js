import React from 'react'
import './Description.css'
import img from '../images/fun_and_games.jpg'

export default function Funandgames(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Fun and Games</h1>
            <div className="stylish">
            <p>Bored of a hectic schedule?Don't you wanna say "Let's have some fun!". 

We have all sorted out for you. From Treasure Hunt to smash the face, dart, archery and many more games to light up your fun spirit, only at Pyrokinesis 2022, a four day extravaganza: March 30,31 and April 1,2 at Assam Engineering College. Do join us and create a moment. 

Full of excitements to be unpacked soon ! Just stay connected.

Follow @funandgame2022 for more updates.</p>
            <h4>Date: </h4>
            <h6>30 March to 2 April</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/4dwYkggmF8uhGHV38">Apply</a>
            </div>
        </div>
    );

}