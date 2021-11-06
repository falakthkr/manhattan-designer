import React from "react";
import cover_image from "../../assets/manhattan-cover.jpeg";
import logo from "../../assets/Manhattan logo.jpg";

class CarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="mySlides w3-display-container w3-center flex">
            <img src={cover_image} style={{ width: "100%" }} alt="cover" />
            <div
              className="
              w3-display-middle w3-container w3-white w3-padding-16 w3-hide-small
            "
            >
              <img width="100px" src={logo} alt="logo" />
              <h4>Manhattan Designer LLC</h4>
              <p>
                is one of the most and <b>Prominent</b> and
                <b> Professional</b> Custom Uniform Manufacturing Companies
                registered in the U.A.E.
              </p>
            </div>
            <div
              className="
              w3-display-bottommiddle w3-container w3-black w3-padding-16 w3-margin-bottom w3-hide-small
            "
            >
              <p>
                With several decades of experience, we recognize ourselves as a
                one stop shop for{" "}
                <b>total solutions for all uniform requirements</b>
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default CarouselComponent;