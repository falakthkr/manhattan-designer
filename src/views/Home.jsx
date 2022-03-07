import React from "react";
import "./home.css";
// import logo from "../assets/images/Manhattan logo.jpg"
import { Layout } from "antd";
import ServicesComponent from "../pages/Home/Services"
import NavbarComponent from "../pages/Home/Navbar"
import CarouselComponent from "../pages/Home/Carousel";
import AboutComponent from "../pages/Home/About";
import ContactComponent from "../pages/Home/Contact";

const { Content, Footer } = Layout;

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <NavbarComponent />
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <CarouselComponent />
              <AboutComponent id="about" />
              <ServicesComponent id="services" />
              <ContactComponent id="contact" />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Manhattan Designer LLC ©2022 
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
