import React from "react";
import FooterComponent from "../pages/Home/Footer";
import NavbarComponent from "../pages/Home/Navbar";
import CarouselComponent from "../pages/Home/Carousel";
import AboutComponent from "../pages/Home/About";
import ServicesComponent from "../pages/Home/Services";
import ContactComponent from "../pages/Home/Contact";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <NavbarComponent />
        <div
          className="w3-content"
          style={{ maxWidth: "2000px", marginTop: "46px" }}
        >
          {/* Hero Section Carousel */}
          <CarouselComponent />
          {/* About */}
          <div
            className="w3-container w3-content w3-center w3-padding-64"
            style={{ maxWidth: "800px" }}
            id="about"
          >
            <AboutComponent />
            {/* Services */}
            <ServicesComponent />
            <hr />
            {/* Contact */}
            <ContactComponent />
          </div>
          {/* Footer */}
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default Home;
