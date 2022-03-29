import React, { Component } from 'react';
import './udCss.css';

import imghome from '../images/Udbhavanam logo (4).png'

class UdHome extends Component {
    render() {
        return (
            <div>
                <div className="home_sec2" >
                    <div className="ud_home">
                        <div className="ud_logo"><img id="ud_img" src={imghome} alt="" /></div>
                        <div className="ud_home_title">
                            <div><h1 id="id2">Udbhavanam 2022</h1></div>
                        </div>
                    </div>
                </div>

                <div className="class1">Events</div>
                

                
            </div>

        );
    }
}
export default UdHome;