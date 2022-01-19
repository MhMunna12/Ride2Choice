import React, { useEffect, useState } from "react";
import "./Manage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { Button } from "bootstrap";
const Manage = () => {
  const [service, setService] = useState([]);
  const history = useHistory();
  const handleSearchClick = (editId) => {
    history.push(`/edit/${editId}`);
  };
  // const [isTrue, setIsTrue] = useState(false);
  // const [itemId, setItemId] = useState(null);
  //data update
  // const handleEditClick = () => {
  //   setIsTrue(!isTrue);

  // };
  // const handleGetId = (id) => {
  //   setItemId(id);
  // };
  // const handleChange = (e) => {};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  //data delete
  const handleDelete = (id) => {
    const url = `https://obscure-forest-03203.herokuapp.com/delete/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("delete successfully");
        }
      });
  };

  useEffect(() => {
    fetch("https://obscure-forest-03203.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="col-md-11">
      <table class="table">
        <thead>
          <tr>
            <th>Home</th>
            <th>Destination</th>
            <th>Rent</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {service.map((se) => (
            <tr>
              <td data-label="S.No">{se.route}</td>
              <td data-label="Name">{se.destination}</td>
              <td data-label="Age">{se.cost}</td>
              <td>
                <p onClick={() => handleSearchClick()}>
                  <FontAwesomeIcon
                    // onClick={() => handleEditClick()}

                    className=" icon"
                    icon={faEdit}
                  />
                </p>
              </td>
              <td data-label="Staus">
                <FontAwesomeIcon
                  className="icon"
                  onClick={() => handleDelete(se._id)}
                  icon={faTrashAlt}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {isTrue && (
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control login-text"
                    value=""
                    name="cost"
                    onBlur={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control login-text"
                    value=""
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
                    value=""
                    name="cost"
                    onBlur={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control login-text"
                    value=""
                    onBlur={handleChange}
                    name="route"
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
      )} */}
    </div>
  );
};

export default Manage;
