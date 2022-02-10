import React from "react";
import About from "./About";
import Footer from "./footer";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";

function Main() {
    return (
        <div>
                <Header></Header>
                <Home></Home>
                <About></About>
                <Services></Services>
                <Footer></Footer>
        </div>

    )
}
export default Main;