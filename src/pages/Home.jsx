import React from "react";
import FooterComponent from "../components/Home/Footer";
import NavbarComponent from "../components/Home/Navbar";
import CarouselComponent from "../components/Home/Carousel";
import AboutComponent from "../components/Home/About";
import ServicesComponent from "../components/Home/Services";
import ContactComponent from "../components/Home/Contact";

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
