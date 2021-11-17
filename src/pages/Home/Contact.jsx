import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div
        className="w3-container w3-content w3-padding-64 "
        style={{ maxWidth: "800px" }}
        id="contact"
      >
        <h2 className="w3-wide w3-center ">CONTACT</h2>
        <div className="w3-row w3-padding-32 ">
          <div className="w3-col m6 w3-large w3-margin-bottom ">
            <i className="fa fa-map-marker" style={{ maxWidth: "30px" }}></i>{" "}
            Sheikh Hamdan Colony, Street 13B, Blue Block, Building #10, Shop #2,
            Karama, Dubai, UAE. P.O.Box 50098.
            <br />
            <i className="fa fa-phone" style={{ maxWidth: "30px" }}></i>
            +971-4-3968010
            <br />
            <i className="fa fa-whatsapp" style={{ maxWidth: "30px" }}></i>{" "}
            <a href="https://api.whatsapp.com/send/?phone=%2B971529940491&text&app_absent=0">
              +971-52-9940491
            </a>
            <br />
            <i className=" fa fa-envelope " style={{ maxWidth: "30px" }}>
            </i>{" "}
            <a href="mailto:sales@manhattan-designer.com ">
               sales@manhattan-designer.com
            </a>
            <br />
          </div>
          <div className="w3-col m6">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.647625850799!2d55.30233631508823!3d25.248790835801206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43288c662a89%3A0xcdea463bf1ed0c78!2sManhattan%20Designer%20LLC!5e0!3m2!1sen!2sae!4v1629555725699!5m2!1sen!2sae"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact