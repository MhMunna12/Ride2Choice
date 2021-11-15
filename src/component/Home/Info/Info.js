import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import {
  faClock,
  faHome,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const infosData = [
  {
    title: "Our Services",
    description: "We are open always service",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit our Location",
    description: "Dhaka, Bangladesh",
    icon: faHome,
    background: "dark",
  },
  {
    title: "Call us Now",
    description: "+8801337484494",
    icon: faPhone,
    background: "primary",
  },
];
const Info = () => {
  console.log(infosData);
  return (
    <div style={{ backgroundColor: "#3abd72" }}>
      <section className="d-flex justify-content-center business-info container">
        <div className="w-75 row">
          {infosData.map((info) => (
            <InfoCard info={info}></InfoCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Info;
