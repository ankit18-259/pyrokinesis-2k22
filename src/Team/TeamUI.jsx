import React from 'react';
import'./team-style.css';

const Team = props=>{
    return(
      <div className="card text-center shadow">
          <div className="overflow">
              < img src={props.imgsrc} alt="image 1"  className='team-img-top' />
          </div>
          <div className="team-body text-dark">
              <h4 className="card-title">{props.title}</h4>
          </div>
          <div className="card-body text-dark">
              <h6 className="card-title">{props.position}</h6>
          </div>
      </div>
    );

}

export default Team;