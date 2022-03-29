import React, { Component } from 'react';
import Card from './CardUI';

import img1 from '../images/backdoor.png'
import img2 from '../images/build_extra.jpeg'
import img3 from '../images/tech_talk.jpg'
import img4 from '../images/ipl.png'
import img5 from '../images/escoventure.png'
import img6 from '../images/Stock War.jpg'
import img7 from '../images/chem_quiz.jpg'
import img8 from '../images/beat-the.jpg'
import img9 from '../images/codestellation1.jpeg'
import img10 from '../images/decodestack.jpeg'
import img11 from '../images/robo_sumo.jpg'
import img12 from '../images/robo_soccer.jpg'
import img13 from '../images/line_follow.jpg'
import img14 from '../images/aerotech.jpg'
import img15 from '../images/Echoes poster jpg (1) - atrayee bharadwaj.jpg'
import img16 from '../images/Grey Matters 2022 poster - Nilim Shekhar Bordoloi.jpg'
import img17 from '../images/Shapethescrap Pyrokinesis2022.jpg'
import img18 from '../images/constellate.jpeg'
import img19 from '../images/the_discussion_isle.jpg'
import img20 from '../images/Headshoot.jpeg'



class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={img1} title="BACKDOOR SCIENTIST" detail='/udbhavanam/Backdoor'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img2} title="BUILD EXTRA" detail='/udbhavanam/Build_Extra'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img3} title="TECH TALK" detail='/udbhavanam/Tech_Talk'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img4} title="IPL AUCTION"  detail='/udbhavanam/IPL_Auction'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img5} title="ESCOVENTURE"  detail='/udbhavanam/Escoventure'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img6} title="STOCK WAR"  detail='/udbhavanam/Stock_Warz'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img7} title="CHEM QUIZ" detail='/udbhavanam/Chem_Quiz'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img8} title="BEAT THE CIRCUITRY"  detail='/udbhavanam/Beat_The'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img9} title="CODE STELLATION"  detail='/udbhavanam/Code_Stellation'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img10} title="DECODE STACK" detail='/udbhavanam/Decode_Stack'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img11} title="ROBO SUMO" detail='/udbhavanam/Robo_Sumo'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img12} title="ROBO SOCCER"  detail='/udbhavanam/Robo_Soccer'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img13} title="LINE FOLLOWER ROBOT" detail='/udbhavanam/Line_Follower'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img14} title="AEROTECH" detail='/udbhavanam/Aerotech'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img15} title="ECHOES" detail='/udbhavanam/Echoes'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img16} title="GREY MATTER" detail='/udbhavanam/Grey_Matter'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img17} title="SHAPE THE SCRAP" detail='/udbhavanam/Shape_The'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img18} title="CONSTELLATE" detail='/udbhavanam/Constellate'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img19} title="THE DISCUSSION ISLE" detail='/udbhavanam/The_Discussion'/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={img20} title="Headshot" detail='/udbhavanam/Headshot'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;