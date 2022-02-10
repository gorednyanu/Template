import React from "react";
import { BrowserRouter as Router,  } from "react-router-dom";
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
                <Home></Home>
                <About></About>
                <Services></Services>
                <Footer></Footer>
        </div>
        </Router>
        

    )
}
export default Main;