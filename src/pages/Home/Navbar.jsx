import React from "react";

class NavbarComponent extends React.Component {
  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="index.html" className="w3-bar-item w3-button">
            <b>Manhattan Designer LLC</b>
          </a>
          <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button">
              Who We Are
            </a>
            <a href="#services" className="w3-bar-item w3-button">
              What We Do
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;
