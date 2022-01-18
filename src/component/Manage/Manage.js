import React, { useEffect, useState } from "react";
import "./Manage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Manage = () => {
  const [service, setService] = useState([]);
  const handleDelete = (id) => {
    fetch(`http://localhost:6060/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
                <FontAwesomeIcon className=" icon" icon={faEdit} />
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
    </div>
  );
};

export default Manage;
