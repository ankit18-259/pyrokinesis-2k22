import React, { Component } from 'react';
import Card from './CardUI';

import img1 from '../images/cosplay.jpg'
import img2 from '../images/football.jpg'
import img3 from '../images/Bordoisila.jpg'
import img4 from '../images/staccato.jpg'
import img5 from '../images/fun_and_games.jpg'
import img6 from '../images/এৰা_বাটৰ_সুৰ.jpg'
import img7 from '../images/mars.jpg'
import img8 from '../images/intracity_ride.jpg'
import img9 from '../images/Aec_grand_slam.jpg'
import img10 from '../images/electrofest.jpg'
import img11 from '../images/skoar.jpg'
import img12 from '../images/shatranj.jpg'
import img15 from '../images/visavis.jpg'
import img16 from '../images/iron.jpg'


function Cards(props) {

    // let history = useHistory();

    // const cosaec = () => {
    //     history.push('/cosaec')
    // };

        return(
          <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                        <div  className="col-md-3">
                            <Card  title="COS' AEC" imgsrc={img1} detail="/event/CosAec"/>
                                                       
                        </div>
                  <div className="col-md-3">
                      <Card imgsrc={img2} title='FOOTBALL 5 ON 5' detail='/event/football5on5'/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img3} title="BORDOISILA" detail='/event/bordoisila'/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img4} title="STACCATO" detail='/event/staccato'/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img5} title="FUN & GAMES" detail='/event/funandgames' />
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img6} title="এৰা বাটৰ সুৰ" detail="/event/erapatorhur" />
                  </div>
                  <div className="col-md-3">
                      <Card title="MARS & VENUS" imgsrc={img7} detail='/event/marsandvenus'/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img8}  detail='/event/aectrial'title="REAL Trial" />
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img9} detail='/event/aecgrandslam' title="AEC GRAND SLAM" />
                  </div>
                  <div className="col-md-3">
                      <Card title="Electrofest" imgsrc={img10} detail='/event/electrofest' />
                  </div>
                  <div className="col-md-3">
                      <Card title="SKOAR" imgsrc={img11}  detail='/event/skoar' />
                  </div>
                  <div className="col-md-3">
                      <Card title="SHATRANJ" imgsrc={img12}detail='/event/shatranj' />
                  </div>
                  <div className="col-md-3">
                      <Card title="NATRAJ" detail='/event/natraj' description="classical dance"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="BATTLE OF BANDS" detail='/event/battleofbands'/>
                  </div>
                  <div className="col-md-3">
                      <Card title="VIS-A-VIS" imgsrc={img15}detail='/event/visavis'/>
                  </div>
                  <div className="col-md-3">
                      <Card title="IRON MAN" imgsrc={img16} detail='/event/ironman'/>
                  </div>
                  <div className="col-md-3">
                      <Card title="STREET BEATZ" detail='/event/streetbeatz'/>
                  </div>
                  <div className="col-md-3">
                      <Card title="CRICKET 6 ON 6" detail='/event/cricket6on6'/>
                  </div>
                  <div className="col-md-3">
                      <Card title="BEACH VOLLEYBALL 3 ON 3" detail='/event/beachvolleyball'/>
                  </div>
                   <div className="col-md-3">
                      <Card title="BASKET BALL" detail='/event/basketball'/>
                  </div>
                   
                </div>
          </div>
        );
}

export default Cards;