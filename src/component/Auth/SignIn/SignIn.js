import React from "react";
import "./SignIn.css";
import signin from "../../../images/signIn.png";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import { useState } from "react";
import useFirebase from "../Hooks/useFirebase";
import { useContext } from "react";
import { UserContext } from "../../../App";
const SignIn = () => {
  const { handleSignIn } = useFirebase();
  const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleChange = (e) => {
    const newUser = { ...loggedInUser };
    newUser[e.target.name] = e.target.value;
    setLoggedInUser(newUser);
    // console.log(loggedInUser);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(loggedInUser.email, loggedInUser.password);
  };
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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control login-text"
                placeholder="Email"
                name="email"
                onBlur={handleChange}
                required
              />
              <br />
              <input
                type="password"
                className="form-control login-text"
                placeholder="Password"
                onBlur={handleChange}
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
