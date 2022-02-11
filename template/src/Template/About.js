import React from "react";
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <section id="about" className="about">

                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row gx-0">

                        <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="content">
                                <h3>About Us</h3>
                                <h2>Welcome to Assimilate Technologies! You are at the best company for web development, digital marketing, AI-ML business solutions, & certification training.</h2>
                                <p>
                                    Assimilate Technologies was founded by a technophile with years’ experience in designing and delivering task-oriented business solutions powered by a range of advanced technologies. Industry-best tailor-made software development to simplify operational tasks and to improve task-specific performances for improved user experience has been our expertise.<br></br><br></br>

                                    Over the years, we have become a widely-known IT services provider in almost all industries including manufacturers, services providers, eCommerce retailers etc. We have experience-driven insights to serve businesses in different domains- healthcare, ITSM, sales-marketing, manufacturing, institutions, service-support, etc.                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/logo3.webp" className="img-fluid" alt="" />
                        </div>

                    </div>
                </div>

            </section>
            <main id="main">

                <section id="values" className="values">

                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <header className="section-header">
                            <h2>
                                Values:</h2>
                        </header>

                        <div className="row">

                            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="box">
                                    <img src="assets/img/assimilate.webp" className="img-fluid" alt="" />
                                    <h3>Our Vision</h3>
                                    <p>To be ​one stop destination for our customers to expand their business globally.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <div className="box">
                                    <img src="assets/img/assimilate1.webp" className="img-fluid" alt="" />
                                    <h3>Our Mission</h3>
                                    <p>To expand human potential by applying innovative technology solution for better tomorrow.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                                <div className="box">
                                    <img src="assets/img/assimilate2.webp" className="img-fluid" alt="" />
                                    <h3>We Love</h3>
                                    <p>To apply greatest technology solutions for our customers business solutions.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                <section id="counts" className="counts">
                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" className="purecounter">232</span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-journal-richtext" style={{ color: "#ee6c20" }}></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" className="purecounter">521</span>
                                        <p>Projects</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-headset" style={{ color: "#15be56" }}></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="0" className="purecounter">1463</span>
                                        <p>Hours Of Support</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-people" style={{ color: "#bb0852" }}></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="0" className="purecounter">15</span>
                                        <p>Hard Workers</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="features" className="features">

                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <header className="section-header">
                            <h2>Features</h2>
                            <h3>Our Team that Makes us #1 IT Service Providing Agency:</h3>
                        </header>

                        <div className="row">

                            <div className="col-lg-6">
                                <img src="assets/img/about1.webp" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                                <div className="row align-self-center gy-4">

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Understand in true sense</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="300">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Plan the best</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="400">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Structure an approach</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="500">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Execute the plan with an Agile approach</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="600">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Test the product/service quality at different stages</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="700">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Make the changes for improvement based on feedbacks</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="row feture-tabs aos-init aos-animate" data-aos="fade-up">
                            <div className="col-lg-6">
                                <h3>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>

                                <ul className="nav nav-pills mb-3">
                                    <li>
                                        <a className="nav-link active" data-bs-toggle="pill" href="#tab1">Saepe fuga</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" data-bs-toggle="pill" href="#tab2">Voluptates</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" data-bs-toggle="pill" href="#tab3">Corrupti</a>
                                    </li>
                                </ul>
                                <div className="tab-content">

                                    <div className="tab-pane fade show active" id="tab1">
                                        <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2"></i>
                                            <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                                        </div>
                                        <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2"></i>
                                            <h4>Incidunt non veritatis illum ea ut nisi</h4>
                                        </div>
                                        <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                                    </div>

                                    <div className="tab-pane fade show" id="tab2">
                                        <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2"></i>
                                            <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                                        </div>
                                        <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2"></i>
                                            <h4>Incidunt non veritatis illum ea ut nisi</h4>
                                        </div>
                                        <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                                    </div>

                                    <div className="tab-pane fade show" id="tab3">
                                        <p>Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2"></i>
                                            <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                                        </div>
                                        <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="bi bi-check2"></i>
                                            <h4>Incidunt non veritatis illum ea ut nisi</h4>
                                        </div>
                                        <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-6">
                                <img src="assets/img/features-2.png" className="img-fluid" alt="" />
                            </div>

                        </div>
                        <div className="row feature-icons aos-init aos-animate" data-aos="fade-up">
                            <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

                            <div className="row">

                                <div className="col-xl-4 text-center aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                                    <img src="assets/img/features-3.png" className="img-fluid p-4" alt="" />
                                </div>

                                <div className="col-xl-8 d-flex content">
                                    <div className="row align-self-center gy-4">

                                        <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up">
                                            <i className="ri-line-chart-line"></i>
                                            <div>
                                                <h4>Corporis voluptates sit</h4>
                                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                            <i className="ri-stack-line"></i>
                                            <div>
                                                <h4>Ullamco laboris nisi</h4>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                            <i className="ri-brush-4-line"></i>
                                            <div>
                                                <h4>Labore consequatur</h4>
                                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                            <i className="ri-magic-line"></i>
                                            <div>
                                                <h4>Beatae veritatis</h4>
                                                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                            <i className="ri-command-line"></i>
                                            <div>
                                                <h4>Molestiae dolor</h4>
                                                <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                            <i className="ri-radar-line"></i>
                                            <div>
                                                <h4>Explicabo consectetur</h4>
                                                <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="text-center text-lg-start">
                                    <Link to="/services" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default About;