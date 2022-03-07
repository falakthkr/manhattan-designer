import React from "react";
import { Divider } from "antd";
import { Carousel } from "antd";

const contentStyle = {
  color: 'white',
  fontSize: '18px',
  lineHeight: '9vh',
  textAlign: 'center',
  background: 'maroon',
};

const AboutComponent = () => {

  return (
    <>
      <Divider orientation="center">
        <h3 style={{ color: "maroon" }}>About Us</h3>
      </Divider>
      <Carousel dotPosition="top">
        <div className="justify-content-center">
          <p style={contentStyle}>
            {" "}
            We are known for our perfection in making the finest custom
            commercial and industrial uniforms in U.A.E. We started operations
            in 1993 and have since grown into a leading commercial and
            industrial uniform manufacturer in the U.A.E. offering a complete
            range of custom Uniforms & Event Apparel with a strong base in
            Tailoring. Our professional management approach and a long serving
            customer base across numerous industries are proof of our commitment
            to our clients.
          </p>
        </div>
        <div>
          <p style={contentStyle}>
            Our professional team is both knowledgeable and courteous and they
            understand the value of the material they are handling. We are
            encouraged by our strong belief that{" "}
            <i>"Uniforms improve the image of a company."</i><br />
            We are known to provide quality and elegant uniforms and corporate
            wear, for staff at Hotels, Hospitals, Clinics, Salons, Showrooms,
            Offices, Department Stores, Workshops, and Numerous Other
            Industries.
          </p>
        </div>
        <div>
          <p style={contentStyle}>
            You will find finesse in our cuts and a variety in our computerized
            embroidery designs that are offered for logo designs and Company
            names.Let us guide you and cater to your every uniform need! With
            decades worth of experience, we completely understand our clients
            needs and their urgency as well. This is what has helped Manhattan
            Designer LLC become a leading custom uniform manufacturer in the U.A.E.
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default AboutComponent;
