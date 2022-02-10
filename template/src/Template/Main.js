import React from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./footer";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Team from "./Team";

function Main() {
    return (
        <div>
                
                <Header></Header>
                <Home></Home>
                <Services></Services>
                <Portfolio></Portfolio>
                <Team></Team>
                <Blog></Blog>
                <Contact></Contact>
                <Footer></Footer>
        </div>

    )
}
export default Main;