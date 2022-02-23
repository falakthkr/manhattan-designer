import React from "react";
import uniforms_image from "../assets/images/35992210_m.jpg";
import embroidery_image from "../assets/images/40139640_m.jpg";
import events_image from "../assets/images/44317661_m.jpg";
import alterations_image from "../assets/images/37976579_m.jpg";
import FlipCard from "../components/FlipCard";

const cards = [
  {
    id: "1",
    variant: "hover",
    front: { title: "Uniforms", background: uniforms_image },
    back: {
      image: uniforms_image,
      heading: "Uniforms",
      paragraph:
        "At Manhattan Designer LLC we strongly believe that uniforms improve the image of a company. We understand that customer oriented employees should represent their company in the best and most elegant way possible. Therefore, we strive to provide the best quality and service for our clients needs. Some of the industries we provide uniforms to include: Hotels, Hospitals, Offices, Clinics, Salons, Showrooms, Department Stores, Workshops, & Numerous Other Industries",
    },
  },
  {
    id: "2",
    variant: "hover",
    front: { title: "Embroidery", background: embroidery_image },
    back: {
      image: embroidery_image,
      heading: "Embroidery",
      paragraph:
        "The best way for a company to represent itself through its employees is to have the company logo embroidered on the uniforms. We provide computerized Embroidered Logos, Designs, & Patches on any apparel produced by us or provided by the customer allowing for an enhancement of design and style.",
    },
  },
  {
    id: "3",
    variant: "hover",
    front: { title: "Event Apparels", background: events_image },
    back: {
      image: events_image,
      heading: "Event Apparels",
      paragraph:
        "Dubai is considered as one of the premier business event destinations around the world. Therefore, it is our goal to provide the best quality and service to this industry in order to help businesses represent themselves in the best way possible. We provide a multitude of items for events including: Uniforms, Event T-shirts, Caps, Table Linens, Table Runners, Chair Covers, Napkins, Sashes, & Embroidery.",
    },
  },
  {
    id: "3",
    variant: "hover",
    front: { title: "Alterations", background: alterations_image },
    back: {
      image: alterations_image,
      heading: "Alterations",
      paragraph:
        "With fashion, the more comfortable you feel in your clothes, the more confident you will be. Our team of knowledgeable and experienced tailors can provide insightful solutions to fix and alter any piece of clothing to make them better fitting and much more comfortable to wear. We alter a various amount of items including: Uniforms, Suits, Dresses, Jackets, Casual Clothes, & Various Other Garments.",
    },
  },
];

class ServicesComponent extends React.Component {
  render() {
    return <div id="services"></div>;
  }
}

export default ServicesComponent;
