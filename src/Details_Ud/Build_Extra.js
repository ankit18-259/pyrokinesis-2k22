import React from 'react'
import Ud_Style from './Ud_Details.css'
import img from '../images/build_extra.jpeg'

export default function Build_Extra(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Build Extra</h1>
            <div className="stylish">
            <p>The prototype  is involved with the design, creation, testing, and modification of design. In many fields, there is great uncertainty as to whether a new design will actually do what is desired. In case of new bridge structural design also ,  It is very important to prototyping before performing the new design .

BUILDXTRA is an event  under which  a tech fest of bridge prototype making competition  is organised at Assam engineering college impowerd by "UDBHAVANAM ".  All requirements  for bridge prototype making are provided by  organisers. Participates come free hand to participate the competition in team  which must be consist of atmost 3 members .  On the first day of completion prototype are build and on the second day , prototypes are tested.  The winners would be judged on their bridge prototypes load carrying capacity and their strength or durability.</p>
            <h4>Date: </h4>
            <h6>30th and 31st march</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/ztGGhPUioTd7aMv9A">Apply</a>
            </div>
        </div>
    );

}