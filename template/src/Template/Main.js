import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Footer from "./footer";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";

function Main() {
    return (
        <Router>
            <div>
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<Home></Home>} />
                    <Route exact path="/about" element={<About></About>} />
                    <Route exact path="/services" element={<Services></Services>} />
                </Routes>
                <Footer></Footer>
            </div>
        </Router>
    )
}
export default Main;