import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [user, setUser] = useState({});
  const { editId } = useParams();
  console.log(editId);
  const handleSubmit = () => {};
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
    console.log("d", newUser);
  };

  return (
    <div className="container">
      <div>
        <h1>Edit</h1>
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control login-text"
                    name="cost"
                    onBlur={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control login-text"
                    // value=""
                    onBlur={handleChange}
                    name="route"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control login-text"
                    // value=""
                    name="destination"
                    onBlur={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control login-text"
                    // value=""
                    onBlur={handleChange}
                    name="busname"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="d-grid">
                <input
                  className=" btn login-btn"
                  type="submit"
                  value="update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
