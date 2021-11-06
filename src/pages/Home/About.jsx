import React from "react";

class AboutComponent extends React.Component {
  render() {
    return (
      <div>
        <h2 className="w3-wide">ABOUT US</h2>
        <p className="w3-justify">
          We are known for our perfection in making the finest custom commercial
          and industrial uniforms in U.A.E. We started operations in 1993 and
          have since grown into a leading commercial and industrial uniform
          manufacturer in the U.A.E. offering a complete range of custom
          Uniforms & Event Apparel with a strong base in Tailoring. Our
          professional management approach and a long serving customer base
          across numerous industries are proof of our commitment to our clients.
          Our professional team is both knowledgeable and courteous and they
          understand the value of the material they are handling. We are
          encouraged by our strong belief that
          <b className="boldText"> UNIFORMS IMPROVE THE IMAGE OF A COMPANY.</b>
          <br /> We are known to provide quality and elegant uniforms and
          corporate wear, for staff at
          <b className="boldText">
            {" "}
            Hotels, Hospitals, Clinics, Salons, Showrooms, Offices, Department
            Stores, Workshops, and Numerous Other Industries
          </b>{" "}
          You will find finesse in our cuts and a variety in our computerized
          embroidery designs that are offered for logo designs and Company
          names.<b className="boldText">
            {" "}
            Let us guide you and cater to your every UNIFORM need!
          </b>{" "}
          With decades worth of experience, we completely understand our clients
          needs and their urgency as well. This is what has helped
          <b className="boldText">Manhattan Designer LLC</b> become a leading custom UNIFORM
          manufacturer in U.A.E.
        </p>
        <hr />
      </div>
    );
  }
}

export default AboutComponent;
