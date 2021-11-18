import Button from "@restart/ui/esm/Button";
import React from "react";
import { useHistory, useParams } from "react-router";
import "./Search.css";
const Search = ({ item }) => {
  const history = useHistory();
  const handleSearchClick = (id) => {
    history.push(`/search/${id}`);
  };

  console.log(item);
  const { route, destination, busname, cost, km } = item;
  return (
    <div className="container ">
      <div className="d-flex  justify-content-center search mb-4">
        <h4 className="ms-4">
          {" "}
          <span style={{ color: "tomato" }}>Form</span>{" "}
          <span style={{ color: "white" }}>: {route}</span>
        </h4>
        <h4 className="ms-4">
          <span style={{ color: "tomato" }}>To</span> : {destination}
        </h4>
        <h4 className="ms-4">
          <span style={{ color: "tomato" }}>Bus Name</span> : {busname}
        </h4>
        <h4 className="ms-5">
          <span style={{ color: "tomato" }}>Cost</span> :{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>{cost}</span>
        </h4>
        {km ? (
          <h4 className="ms-5">
            <span style={{ color: "tomato" }}>Kilo Meeter</span> : {km}
          </h4>
        ) : (
          <span></span>
        )}
        <div className="ms-auto">
          <Button
            className="btn btn-primary view-btn"
            onClick={() => handleSearchClick(item._id)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
