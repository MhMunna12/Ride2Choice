import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import AddRoute from "../AddRoute/AddRoute";
import "./Dashbroad.css";
import Manage from "../Manage/Manage";
const Dashbroad = () => {
  const [add, setAdd] = useState(true);
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-2 side-bar ">
          <Button className="mt-2" onClick={() => setAdd(false)}>
            <FontAwesomeIcon icon={faTasks} /> Manage Route
          </Button>
          <Button onClick={() => setAdd(true)} block className="mt-2">
            <FontAwesomeIcon icon={faPlus} /> Add Route
          </Button>
        </div>
        <div className="col-md-10">{add ? <AddRoute /> : <Manage />}</div>
      </div>
    </div>
  );
};

export default Dashbroad;
