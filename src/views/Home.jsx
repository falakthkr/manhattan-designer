import React from "react";
import logo from "../assets/images/Manhattan logo.jpg";
import FooterComponent from "../pages/Footer";
import NavbarComponent from "../pages/Navbar";
import CarouselComponent from "../pages/Carousel";
import AboutComponent from "../pages/About";
import ServicesComponent from "../pages/Services";
import ContactComponent from "../pages/Contact";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <img src={logo} style={{position: 'fixed',zIndex:1}} alt="logo" width="100" />
        <NavbarComponent />
        <hr style={{backgroundColor: 'transparent'}}/>
        {/* Hero Section Carousel */}
        <CarouselComponent />
        {/* About */}
        <AboutComponent />
        {/* Services */}
        <ServicesComponent />
        {/* Contact */}
        <ContactComponent />
        {/* Footer */}
        <FooterComponent />
      </div>
    );
  }
}

export default Home;
