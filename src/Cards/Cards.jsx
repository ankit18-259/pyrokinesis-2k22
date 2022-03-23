import React, { Component } from 'react';
import Card from './CardUI';

import img1 from '../images/cosplay.jpg'
import img2 from '../images/football.jpg'
import img3 from '../images/Bordoisila.jpg'
import img4 from '../images/staccato.jpg'
import img5 from '../images/fun_and_games.jpg'
import img6 from '../images/এৰা_বাটৰ_সুৰ.jpg'
import img8 from '../images/intracity_ride.jpg'
import img9 from '../images/Aec_grand_slam.jpg'



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
                      <Card imgsrc={img4} title="STACCATO" detail='/event/staccato' connect="https://forms.gle/xpT8jfEnKHZv9xRi9"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img5} title="FUN & GAMES" detail='/event/funandgames' connect="https://forms.gle/4dwYkggmF8uhGHV38"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img6} title="এৰা বাটৰ সুৰ" detail="/event/erapatorhur" connect="https://docs.google.com/forms/d/1gMM5Xx0QYehtaVdUohGTG3O_DCssyKaiigZSr-Ktcvk/edit?usp=drivesdk"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="MARS & VENUS" detail='/event/marsandvenus'/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img8}  detail='/event/aectrial'title="AEC Trial" connect="https://forms.gle/RrLAM843cJWChxAT8"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img9} detail='/event/aecgrandslam' title="AEC GRAND SLAM" connect="https://forms.gle/b993FaFjpZztBv8z9"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="Electrofest" detail='/event/electrofest' connect="https://docs.google.com/forms/d/e/1FAIpQLScYZoN62AGjhJksRQ1_U-JyVidh3-ZSQHlLN3eyXtUFjG9vQA/viewform"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="SKOAR" detail='/event/skoar' />
                  </div>
                  <div className="col-md-3">
                      <Card title="SHATRANJ" detail='/event/shatranj' connect="https://forms.gle/eLz1xCWDGPxDqzyi8"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="NATRAJ" detail='/event/natraj' description="classical dance"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="BATTLE OF BANDS" detail='/event/battleofbands'/>
                  </div>
                  <div className="col-md-3">
                      <Card title="VIS-A-VIS" detail='/event/visavis'/>
                  </div>
                  <div className="col-md-3">
                      <Card title="IRON MAN" detail='/event/ironman'/>
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