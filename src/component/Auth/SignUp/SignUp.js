import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import signup from "../../../images/singUp.png";
import Footer from "../../Home/Footer/Footer";
const SignUp = () => {
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
                type="text"
                // onBlur={handleChange}
                className="form-control login-text"
                placeholder="Name"
                name="name"
                id=""
              />
              <br />
              <input
                type="email"
                // onBlur={handleChange}
                className="form-control login-text"
                placeholder="Email"
                name="email"
                id=""
              />
              <br />
              <input
                type="password"
                // onBlur={handleChange}
                className="form-control login-text"
                placeholder="Password"
                name="password"
                id=""
              />
              <br />
              <input
                type="password"
                // onBlur={handleChange}
                className="form-control login-text"
                placeholder="Re-Password"
                name="repassword"
                id=""
              />
              {/* {error && <p style={{ color: "red" }}>Password didn't match</p>} */}
              <br />
              <div className="d-grid">
                <input
                  className="submit btn login-btn"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <br />
              <p className="text-center">
                Don't have any account? <Link to="/sign-in"> Sign In </Link>
              </p>
            </form>

            <div className="d-grid">
              <Button className=" btn google">Signin with Google</Button>
            </div>
          </div>
          <div className="col-md-7 register-image">
            <img src={signup} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
