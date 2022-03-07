import React from "react";
import cover_image from "../../assets/images/manhattan-cover.jpeg";
import logo from "../../assets/images/Manhattan logo.jpg";
import { Row, Col } from "antd";

const CarouselComponent = () => {
  return (
    <>
      <Row align="middle">
        <Col md={6} xs={24}>
          <img style={{ width: "100%", margin: "5px" }} src={logo} alt="logo" />
        </Col>
        <Col md={18} xs={24}>
          <img
            style={{ width: "100%", margin: "5px" }}
            src={cover_image}
            alt="cover"
          />
        </Col>
      </Row>
    </>
  );
};

export default CarouselComponent;
