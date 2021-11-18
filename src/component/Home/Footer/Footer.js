import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
  faPlayCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@restart/ui/esm/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-main mt-5">
      <div className="container">
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4 about-us" style={{ marginTop: "30px" }}>
            <h3 className="mb-4 mt-4">About us</h3>
            <p>
              We started our journey in 2021 with one goal in mind- to make
              lives easier. As a technology first company, we develop
              tech-driven solutions for the everyday challenges of Bangladeshi
              people. The Ride2Choice website serves as a single portal
              connecting people to vehicles providing a wide range of services
              like rides, bus rides, launch rides, bike rides, plane rides, etc.
              Our on-demand service provides all the customer care must have
              digital control vehicles and we serve our people online base
              digital vehicles.
            </p>
            {/* <img src={paypal} alt="" /> */}
          </div>

          <div className="col-md-4 contact" style={{ marginTop: "30px" }}>
            <h3 className="mb-4 mt-4">Contact with us</h3>
            <h6>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "white", marginRight: "5px" }}
              />{" "}
              +0167 255 0799
            </h6>
            <h6>
              <FontAwesomeIcon
                style={{ color: "white", marginRight: "5px" }}
                icon={faEnvelope}
              />{" "}
              info@ride2choice.com
            </h6>

            <h6 style={{ marginLeft: "25px" }}> Dhaka Bangladesh</h6>
            <Button className="button">SEND US MESSAGE</Button>
          </div>

          <div className="col-md-4 support" style={{ marginTop: "30px" }}>
            <h3 className="mb-4 mt-4">Useful Links</h3>
            <h6>Contact Us</h6>
            <h6>Terms of Use</h6>
            <h6>Privacy Policy</h6>
            <h6>FAQ</h6>
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div>
          <div className="d-flex footer-desc">
            <p>&copy; Copyright Ride2Choice 2021. All Right Received</p>
            <p className="mb-3">Privacy | Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
