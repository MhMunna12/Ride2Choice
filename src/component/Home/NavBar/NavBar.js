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

import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <div className="navbars">
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
                    <Link to="/login" className="nav-link ms-4 text-white">
                      Login
                    </Link>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
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
