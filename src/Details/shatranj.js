import React from 'react'
import './Description.css'
import img from '../images/shatranj.jpg'

export default function Shatranj(){
    return(
        <div className="description">
              <img src={img} />
            <h1>Shatranj</h1>
            <div className="stylish">
            <p>SHATRANJ is an annual Open Prize Money Chess Tournament organized under the banner of Pyrokinesis: The annual Cultural fest of Assam Engineering College. This annual jamboree is all about furnishing a platform to the extraordinary chess minds in our country and signifying the ritual of salvation with the deployment of successful strategies, abiding by the constraining rules in the space-time substrate that is the chessboard!! 
The first three editions of SHATRANJ (i.e. 1.0, 2.0 & 3.0) were a grand success. A humungous number of players from renowned associates such as the Brahmaputra Chess Club, Assam Chess Club, Guwahati Town Club, and many other colleges and schools gathered to showcase their liking of the sport. Shatranj 4.0 would be organized on 2nd April at Assam Engineering College premise. </p>
            <h4>Date: </h4>
            <h6>2nd April</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/eLz1xCWDGPxDqzyi8">Apply</a>
            </div>
        </div>
    );

}