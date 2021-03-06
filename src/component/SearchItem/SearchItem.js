import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./SearchItem.css";
const SearchItem = () => {
  const { id } = useParams();
  console.log(id);
  const [bus, setBus] = useState([]);
  useEffect(() => {
    fetch(`https://obscure-forest-03203.herokuapp.com/bus/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBus(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("bbb", bus);
  const {
    route,
    busclass,
    busname,
    cost,
    bustype,
    imageURL,
    destination,
    km,
    station,
  } = bus;
  return (
    <div className="body-main">
      <div className="container ">
        <div className="d-flex justify-content-center">
          <div className="text-center search-item mb-5">
            <img className="img-fluid" src={imageURL} alt="" />
            <h2>Bus Name : {busname}</h2>
            <h1>Cost : {cost}</h1>
            <h4>Home : {route}</h4>
            {km ? <h5>kilo Meeter : {km}</h5> : <span></span>}
            {station ? (
              <h5>
                Station : <small>{station}</small>
              </h5>
            ) : (
              <span></span>
            )}
            <h4>Destination : {destination}</h4>
            <h4>Bus Type : {bustype}</h4>
            <h4>Bus Class : {busclass}</h4>
          </div>
        </div>
        {/* <Link to={"https://www.google.com/maps"} btn btn-primary>
          Visit Google Map
        </Link> */}
      </div>
    </div>
  );
};

export default SearchItem;
