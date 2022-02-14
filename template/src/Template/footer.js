import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <p>Assimilate Technologies was founded by technophile with the objective of developing customer business centric software. </p>
                            </div>
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <a href="index.html" className="logo d-flex align-items-center">
                                    <img src="assets/img/logo1.png" alt="" style={{height:"40px", wigth:'50px'}} />
                                    <span>Assimilate Tech</span>
                                </a>
                                <p>Assimilate Technologies was founded by technophile with the objective of developing customer business centric software. The focus is to integrate technologies for building rich “User Experience” software and Products.</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="fa fa-twitter" style={{ fontSize:"25px", color:'DodgerBlue'}}></i></a>
                                    <a href="#" className="facebook"><i className="fa fa-facebook" style={{ fontSize:"25px", color:'blue'}}></i></a>
                                    <a href="#" className="instagram"><i className="fa fa-instagram" style={{ fontSize:"25px", color:'Tomato'}}></i></a>
                                    <a href="#" className="linkedin"><i className="fa fa-linkedin" style={{ fontSize:"25px", color:'SlateBlue'}}></i></a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Use Ful Links</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link to="/services">Services</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                Off. No. 13/16, 5th Floor,<br />
                                 Luvkush Apartment, Aundh,<br></br>
                                 Pune 411007. <br></br>
                                    <strong><img src="assets/img/india.png" alt="" style={{height:"25px", wigth:"30px"}} /> Phone:</strong>+91 88888 99151<br />
                                    <strong> <img src="assets/img/email.png" alt="" style={{height:"25px", wigth:"30px"}} />Email:</strong> info@assimilatetechnologies.com<br />
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        © Copyright <strong><span>Assimilate Technologies</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;