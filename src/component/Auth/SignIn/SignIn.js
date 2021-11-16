import React from "react";
import "./SignIn.css";
import signin from "../../../images/signIn.png";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
const SignIn = () => {
  return (
    <div className="login-color">
      <div className="container">
        <div className="login-main">
          <p style={{ color: "#3abd72" }}>
            Welcome to our <br />{" "}
            <span style={{ fontWeight: "bold" }}>Ride2Choice</span> Community
          </p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <form>
              <input
                type="email"
                className="form-control login-text"
                placeholder="Email"
                name="email"
                // onBlur={handleChange}
                required
              />
              <br />
              <input
                type="password"
                className="form-control login-text"
                placeholder="Password"
                // onBlur={handleChange}
                name="password"
                required
              />
              <br />
              <div className="d-grid">
                <input
                  className=" btn login-btn"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <br />
              <p className="text-center">
                Already have an account? <Link to="/signup"> Sign up </Link>{" "}
              </p>
            </form>
          </div>
          <div className="col-md-7 login-image">
            <img src={signin} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
