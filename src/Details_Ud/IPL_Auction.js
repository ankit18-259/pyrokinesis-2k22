import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/ipl.png'

export default function IPL_Auction(){
    return(
        <div className="description">
            <img src={img}  />            
            <h1>IPL Auction</h1>
            <div className="stylish">
            <p>The biggest bidding war the  'IPL Auction'  allows participants to use their
cricketing minds in order to
build their 'dream team.'IPL
Auction' looks to cover
cricketing as well as the
analytical skils such as
predicting, managing budgets
and many more.
Some important points about the game
1.Each player have a rating with their base price.
2.After the auction, the total sum of ratings of the acquired players of each team will be calculated 
3.The team with the maximum rating will win the event.
4. The ratings of each player will be updated in the player list sheet given , as soon as the auction starts.</p>
            <h4>Date: </h4>
            <h6>30th and 31st March</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/rJqcGeLfvGqGvB1x8">Apply</a>
            </div>
        </div>
    );

}