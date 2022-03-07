import React from "react";
import { Row, Col, Divider } from "antd";
import {
  PushpinOutlined,
  PhoneOutlined,
  MessageOutlined,
  MailOutlined,
} from "@ant-design/icons";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Divider orientation="center">
          <h3 style={{ color: "maroon" }}>Contact</h3>
        </Divider>
        <Row id="contact">
          <Col xs={24} md={12} lg={12}>
            <Row>
              <Col>
                <PushpinOutlined style={{ color: "maroon" }} /> Sheikh Hamdan
                Colony, Street 13B, Blue Block, Building #10, Shop #2, Karama,
                Dubai, UAE. P.O.Box 50098.
              </Col>
            </Row>
            <Row>
              <Col>
                <PhoneOutlined style={{ color: "maroon" }} /> +971-4-3968010
              </Col>
            </Row>
            <Row>
              <Col>
                <MessageOutlined style={{ color: "maroon" }} />{" "}
                <a href="https://api.whatsapp.com/send/?phone=%2B971529940491&text&app_absent=0">
                  +971-52-9940491
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <MailOutlined style={{ color: "maroon" }} />{" "}
                <a href="mailto:sales@manhattan-designer.com ">
                  sales@manhattan-designer.com
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <div>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.647625850799!2d55.30233631508823!3d25.248790835801206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43288c662a89%3A0xcdea463bf1ed0c78!2sManhattan%20Designer%20LLC!5e0!3m2!1sen!2sae!4v1629555725699!5m2!1sen!2sae"
                style={{ border: "0", width: "100%" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
