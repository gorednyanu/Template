import React from "react";

function Header(){
    return(
        <div>
            <header id="header" className="header fixed-top header-scrolled">
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                        <a href="index.html" className="logo d-flex align-items-center">
                            <img src="assets/img/logo1.png" alt="" />
                            <span>Assimilate Tech</span> 
                        </a>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto" href="#hero">Home</a></li>
                                <li><a className="nav-link scrollto" href="#about">About</a></li>
                                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                                <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                    </div>
                </header>
        </div>
    )
}
export default Header;