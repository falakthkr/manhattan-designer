import React from "react";
import uniforms_image from "../../assets/35992210_m.jpg";
import embroidery_image from "../../assets/40139640_m.jpg";
import events_image from "../../assets/44317661_m.jpg";
import alterations_image from "../../assets/37976579_m.jpg";

class ServicesComponent extends React.Component {
  render() {
    return (
      <div className="w3-row w3-padding-32" id="services">
        <div className="w3-col">
          <h4>Uniforms</h4>
          <img
            src={uniforms_image}
            className="w3-round"
            alt="Uniforms"
            style={{ width: "60%" }}
          />
          <p>
            At Manhattan Designer LLC we strongly believe that uniforms improve
            the image of a company. We understand that customer oriented
            employees should represent their company in the best and most
            elegant way possible. Therefore, we strive to provide the best
            quality and service for our clients needs. Some of the industries we
            provide uniforms to include: Hotels, Hospitals, Offices, Clinics,
            Salons, Showrooms, Department Stores, Workshops, & Numerous Other
            Industries
          </p>
        </div>
        <div className="w3-col">
          <h4>Embroidery</h4>
          <img
            src={embroidery_image}
            className="w3-round"
            alt="Embroidery"
            style={{ width: "60%" }}
          />
          <p>
            The best way for a company to represent itself through its employees
            is to have the company logo embroidered on the uniforms. We provide
            computerized Embroidered Logos, Designs, & Patches on any apparel
            produced by us or provided by the customer allowing for an
            enhancement of design and style.
          </p>
        </div>
        <div className="w3-col">
          <h4>Event Apparels</h4>
          <img
            src={events_image}
            className="w3-round"
            alt="Event Apparels"
            style={{ width: "60%" }}
          />
          <p>
            Dubai is considered as one of the premier business event
            destinations around the world. Therefore, it is our goal to provide
            the best quality and service to this industry in order to help
            businesses represent themselves in the best way possible. We provide
            a multitude of items for events including: Uniforms, Event T-shirts,
            Caps, Table Linens, Table Runners, Chair Covers, Napkins, Sashes, &
            Embroidery.
          </p>
        </div>
        <div className="w3-col">
          <h4>Alterations</h4>
          <img
            src={alterations_image}
            className="w3-round"
            alt="Alterations"
            style={{ width: "60%" }}
          />
          <p>
            With fashion, the more comfortable you feel in your clothes, the
            more confident you will be. Our team of knowledgeable and
            experienced tailors can provide insightful solutions to fix and
            alter any piece of clothing to make them better fitting and much
            more comfortable to wear. We alter a various amount of items
            including: Uniforms, Suits, Dresses, Jackets, Casual Clothes, &
            Various Other Garments.
          </p>
        </div>
      </div>
    );
  }
}

export default ServicesComponent;
