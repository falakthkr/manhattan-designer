import React from "react";
import cover_image from "../../assets/images/manhattan-cover.jpeg";
import logo from "../../assets/images/Manhattan logo.jpg";

class CarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="mySlides w3-display-container w3-center flex">
            <img src={cover_image} style={{ width: "100%" }} alt="cover" />
            <div
              className="
              w3-display-middle w3-container w3-black w3-padding-16 w3-hide-small
            "
            >
              <img width="100px" src={logo} alt="logo" />
              <p>
                <br />
                <span style={{fontSize: "18px"}}><b>Manhattan Designer LLC</b></span> is one of the most and <b>prominent</b> and
                <b> professional</b> custom uniform manufacturing companies
                registered in the U.A.E.
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