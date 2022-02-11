import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up" className="aos-init aos-animate">Assimilate Technologies Pune</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">Assimilate technologies is a best #IT training institude in pune</h2>
                            <div data-aos="fade-up" data-aos-delay="600" className="aos-init aos-animate">
                                <div className="text-center text-lg-start">
                                    <Link to="/about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Get Started</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/logo2.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default Home;