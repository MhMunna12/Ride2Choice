import Button from "@restart/ui/esm/Button";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faCoffee,
  faRocket,
  faSubway,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/Ride2Choice.jpg";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      {/* <div className="navbars">
        <div className="container">
          <Navbar
            className="d-flex justify-content-between menu-bar  nav-container"
            variant="dark"
            expand="lg"
          >
            <Navbar.Brand as={Link} to="/">
              <strong>Ride2Choice</strong>
            </Navbar.Brand>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav class="navbar navbar-expand-lg ">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <Link to="/home" className="nav-link ms-4 text-white">
                      Home
                    </Link>
                    <Link to="/service" className="nav-link ms-4 text-white">
                      Service
                    </Link>
                    <Link to="/about" className="nav-link ms-4 text-white">
                      About
                    </Link>
                    <Link to="/contact" className="nav-link ms-4 text-white">
                      Contact
                    </Link>
                    <Link to="/signup" className="nav-link ms-4 text-white">
                      Login
                    </Link>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </div> */}
      <div className="navbars">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <img style={{ width: "150px", height: "55px" }} src={logo} alt="" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <ul class="navbar-nav ">
                <Link to="/home" className="nav-link ms-4 text-white">
                  Home
                </Link>
                <Link to="/service" className="nav-link ms-4 text-white">
                  Service
                </Link>
                <Link to="/about" className="nav-link ms-4 text-white">
                  About
                </Link>
                <Link to="/contact" className="nav-link ms-4 text-white">
                  Contact
                </Link>
                <Link to="/signup" className="nav-link ms-4 text-white">
                  Login
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div style={{ backgroundColor: "white" }} className="shadow">
        <div className="d-flex justify-content-center vehicles">
          {/* <Button className="btn">
            
          </Button> */}
          <Link to="/bus-service" className="btn vehicle">
            <FontAwesomeIcon icon={faBus} /> Bus
          </Link>
          <Link to="/train" className="btn vehicle">
            <FontAwesomeIcon icon={faSubway} /> Train
          </Link>
          <Link to="/air-service" className="btn vehicle">
            <FontAwesomeIcon icon={faRocket} /> Air
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
