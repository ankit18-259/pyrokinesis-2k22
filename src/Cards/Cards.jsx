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


class Cards extends Component {
    render(){
        return(
          <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                  <div className="col-md-3">
                      <Card imgsrc={img1} title="COS' AEC" connect="https://forms.gle/CZJLpjdWuzGDff2a9"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img2} title='FOOTBALL 5 ON 5'/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img3} title="BORDOISILA"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img4} title="STACCATO" connect="https://forms.gle/xpT8jfEnKHZv9xRi9"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img5} title="FUN & GAMES" connect="https://forms.gle/4dwYkggmF8uhGHV38"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img6} title="এৰা বাটৰ সুৰ" connect="https://docs.google.com/forms/d/1gMM5Xx0QYehtaVdUohGTG3O_DCssyKaiigZSr-Ktcvk/edit?usp=drivesdk"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="MARS & VENUS"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img8} title="AEC Trial" connect="https://forms.gle/RrLAM843cJWChxAT8"/>
                  </div>
                  <div className="col-md-3">
                      <Card imgsrc={img9} title="AEC GRAND SLAM" connect="https://forms.gle/b993FaFjpZztBv8z9"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="Electrofest" connect="https://docs.google.com/forms/d/e/1FAIpQLScYZoN62AGjhJksRQ1_U-JyVidh3-ZSQHlLN3eyXtUFjG9vQA/viewform"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="SKOAR" />
                  </div>
                  <div className="col-md-3">
                      <Card title="SHATRANJ" connect="https://forms.gle/eLz1xCWDGPxDqzyi8"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="NATRAJ" description="classical dance"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="BATTLE OF BANDS"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="VIS-A-VIS"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="IRON MAN"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="STREET BEATZ"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="CRICKET 6 ON 6"/>
                  </div>
                  <div className="col-md-3">
                      <Card title="BEACH VOLLEYBALL 3 ON 3"/>
                  </div>
                   <div className="col-md-3">
                      <Card title="BASKET BALL"/>
                  </div>
                </div>
          </div>
        );
    }
}

export default Cards;