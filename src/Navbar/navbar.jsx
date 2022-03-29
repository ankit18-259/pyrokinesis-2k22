import React, { Component } from 'react';
import './navbar.css'
import {Helmet} from "react-helmet"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="d-flex w-30 order-0">
                    <a className="navbar-brand mr-1" href="/">Pyrokinesis.in</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/theme">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/udbhavanams">Udbhavanam</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/teams">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <Helmet>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</Helmet>
                
          
            </nav>                
            
                );
    };
}




export default Navbar;