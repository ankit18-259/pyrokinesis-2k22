import React from 'react';
import PropTypes from 'prop-types'
import'./card-style.css';
import {Link} from 'react-router-dom'

const Card = (props)=>{
    return(
      <div className="card text-center shadow">
          <div className="overflow">
              <img src={props.imgsrc} alt="image 1" width='30%' height='40%' className='card-img-top' />
          </div>
          <div className="card-body text-dark">
              <h4 className="card-title">{props.title}</h4>
              {/* <p className="card-text text-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, placeat.
              </p> */}
                <Link  className='btn btn-outline-dark' to={props.detail}>Apply</Link>
          </div>
      </div>
    );

}

export default Card;