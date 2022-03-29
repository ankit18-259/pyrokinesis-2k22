import React from 'react'
import Ud_style from './Ud_Details.css'
import img from '../images/Echoes poster jpg (1) - atrayee bharadwaj.jpg' 


export default function Echoes(){
    return(
        <div className="description">
            <img src={img} />
            <h1>Echoes</h1>
            <div className="stylish">
            <p>The ECHOES:

Freedom of speech is hammered out on the Anvil of discussion, dissent and debate. It is paramount to the working of a democracy. And hence, _debates are essential_, to present and to defend, to learn and to unlearn, to discuss and analyse the reverberating  visualization of the varied perspectives of an individual through a rhetorical battle of opinions.

Keeping this in mind, we are immensely elated to present "Echoes- a bilingual Coventional debate, under the technical fest, Udbhavanam 9.0 of PYROKINESIS 2022 before you.

Our topic for the debate is:
সদনৰ মতে :  নিযুক্তিৰ ক্ষেত্ৰত জাতি-বিহীন সংৰক্ষণ নীতি, ভাৰতীয় সমাজৰ যুৱসকলৰ মাজত নিবনুৱা সমস্যা নিৰ্মূল কৰিবলৈ অপৰিহাৰ্য ।

In the opinion of the House: Caste-less reservation policy in employment is essential to eradicate the problem of unemployment amongst the youth of the Indian Society. </p>
            <h4>Date: </h4>
            <h6>1st April 2022</h6>
            <a  className='btn btn-outline-dark' href="https://forms.gle/f1mwJvoozHxNdzD39">Apply</a>
            </div>
        </div>
    );

}