import React from "react";
import Nav from "react-bootstrap/Nav";

class NavbarComponent extends React.Component {
  render() {
    return (
      <div>
        <Nav justify className="align-items-end">
          <Nav.Item>
            <Nav.Link
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "13px",
              }}
            >
              <i className="fa fa-map-marker" style={{ maxWidth: "40px" }}></i>{" "}
              Dubai, U.A.E
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "13px",
              }}
            >
              <i className="fa fa-phone" style={{ maxWidth: "40px" }}></i>{" "}
              +971-4-3968010
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "13px",
              }}
            >
              <i className="fa fa-whatsapp" style={{ maxWidth: "40px" }}></i>{" "}
              <a style={{color: 'white'}} href="https://api.whatsapp.com/send/?phone=%2B971529940491&text&app_absent=0">
                +971-52-9940491
              </a>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "13px",
              }}
            >
              <i className=" fa fa-envelope " style={{ maxWidth: "30px" }}></i>{" "}
              <a style={{color: 'white'}} href="mailto:sales@manhattan-designer.com ">
                sales@manhattan-designer.com
              </a>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav justify className="align-items-end">
          <Nav.Item>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default NavbarComponent;
