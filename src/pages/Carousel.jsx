import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cover_image from "../assets/images/manhattan-cover.jpeg";
// import logo from "../assets/images/12382312_m.jpg";

class CarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cover_image}
              alt="First slide"
            />
            <Carousel.Caption style={{backgroundColor:'white', padding: '10px'}}>
              <h4 style={{color:'#9F1C22'}}>Manhattan Designer LLC </h4>
              <p style={{color:'#9F1C22'}}>
                is one of the most and prominent and professional custom uniform
                manufacturing companies registered in the U.A.E. With several
                decades of experience, we recognize ourselves as a one stop shop
                for total solutions for all uniform requirements.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
