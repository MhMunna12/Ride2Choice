import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import "./InfoCard.css";
const InfoCard = ({ info }) => {
  console.log(info);
  return (
    <div className="col-md-4 text-white">
      <div
        className={`d-flex align-items-center info-container info-${info.background} `}
      >
        <div className="me-4">
          <FontAwesomeIcon className="info-icon textColor" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description} </small>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
