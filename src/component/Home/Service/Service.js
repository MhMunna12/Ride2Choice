import React from "react";
import "./Service.css";
// import train from '../../../images/train.png';
import bus from "../../../images/bus.png";
import air from "../../../images/airplane.png";
import tolly from "../../../images/trolley.png";
const Service = () => {
  return (
    <div className="container">
      <div>
        <h2 className="mt-5 text-center">Our Services</h2>
        <div className="d-flex justify-content-center">
          <hr className="bottom-hr" />
        </div>
        <div className="row mt-3">
          <div className="col-md-4 text-center offer-card">
            <div className="offer-img">
              <img src={bus} alt="heart" />
            </div>
            <h5 className="mt-4">BUS SERVICE</h5>
            <small className="text-secondary mt-4">
              Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm
              neque quam
            </small>
          </div>

          <div className="col-md-4 text-center offer-card">
            <div className="offer-img">
              <img src={air} alt="heart" />
            </div>
            <h5 className="mt-4">AIR SERVICE</h5>
            <small className="text-secondary mt-4">
              Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm
              neque quam
            </small>
          </div>

          <div className="col-md-4 text-center offer-card">
            <div className="offer-img">
              <img src={tolly} alt="heart" />
            </div>
            <h5 className="mt-4">TRAIN SERVICE</h5>
            <small className="text-secondary mt-4">
              Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enena comm
              neque quam
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
