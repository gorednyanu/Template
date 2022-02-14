import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header(){
    return(
        <div className="container">
            <header id="header" className="header fixed-top header-scrolled">
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                        <a href="index.html" className="logo d-flex align-items-center">
                            <img src="assets/img/logo1.png" alt="" />
                            <span>Assimilate Tech</span> 
                        </a>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><Link className="nav-link scrollto" to="/">Home</Link></li>
                                <li><Link className="nav-link scrollto" to="/about">About</Link></li>
                                <li><Link className="nav-link scrollto" to="/services">Services</Link></li>
                                <li className="getstart"><Link className="getstarted scrollto" to="/">Get Started</Link></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                    </div>
                </header>
        </div>
    )
}
export default Header;