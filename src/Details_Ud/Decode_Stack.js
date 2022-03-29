import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/decodestack.jpeg'

export default function Decode_Stack(){
    return(
        <div className="description">
            <img src={img} /> 
            <h1>Decode Stack</h1>
            <div className="stylish">
            <p>Code war 3.0 is a 3-day event conducted by the AEC Coding Club which is to be held under the banner of Udbhavanam, the annual technical fest of Assam Engineering College. This extravagant three days of coding includes two competitions namely, Decode_stack and Codestallation, scheduled on 30th of March, 31st of March and 1st of April 2022. The winners of CODEWAR 3.0 shall be awarded with cash prizes of 70k, along with various perks like guaranteed job and internship opportunities. 
 
 
 Decode_Stack: - This is a brainstorming Competitive Programming contest which will be conducted on 30th of March. The competition comprises of two stages: the Debugging Round and the Final Coding round. We shall provide participation certificates to all the participating students, goodies to the winner of the debugging round and finally, the three winners of the competition shall get prizes and certificates.
  
  
 Codestallation: - This is a 24 hours Software based Hackathon which shall be conducted starting from introduction of problem statement to submission of the final software. Judges from different industries and different academic backgrounds will decide the winner and thereafter prizes and certificates will be provided.</p>
            <a href="https://codewar.pyrokinesis.in">CodeWar3.0 Website </a> 
            <h4>Date: </h4>
            <h6>30th, 31st March and 1st April </h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/EXy4UEZmGzRLjTnU8 ">Apply</a>
            </div>
        </div>
    );

}