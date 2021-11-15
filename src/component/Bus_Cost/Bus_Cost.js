import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Home/Footer/Footer";
import Map from "../Map/Map";
import Search from "../Search/Search";
import "./Bus_Cost.css";
const Bus_Cost = () => {
  const [service, setService] = useState([]);
  const [count, setCount] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6060/services")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  // const handleChange = (e) => {
  //   const newDestination = { ...destination };
  //   newDestination[e.target.name] = e.target.value;
  //   console.log(newDestination);
  //   setDestination(newDestination);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    setCount([]);
    fetch(`http://localhost:6060/search?from=${from}&&to=${to}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setError(false);
          setCount(data);
        } else {
          setError(true);
        }

        console.log("count", data);
      })
      .catch((err) => console.log(err));
  };

  const searchByKey = async (key, which) => {
    if (which === "r") {
      setFrom(key);
    } else {
      setTo(key);
    }
    let result = await fetch(
      `http://localhost:6060/searchByKey?key=${key}&param2=${which}`
    );
    result = await result.json();
    console.log("result", result);
    setData(result);
    setOptions(result.sort((a, b) => (a.route > b.route && 1) || -1));
    // if (key === "") {
    //   setOptions([]);
    // }
  };
  return (
    <div>
      <NavBar />
      <div className="">
        <div className="bus-main">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div>
                  <label htmlFor="" className="mt-3">
                    Form
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Form"
                    value={from}
                    list="datalistOptions"
                    onChange={(e) => searchByKey(e.target.value, "r")}
                  />
                  <datalist id="datalistOptions">
                    {options.map((item) => (
                      <option key={item._id} value={item.route} />
                    ))}
                  </datalist>
                  <br />
                  <div>
                    <label htmlFor="">To</label>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="To"
                      list="datalistOptions2"
                      value={to}
                      onChange={(e) => searchByKey(e.target.value, "d")}
                      // onChange={handleChange}
                    />
                    <datalist id="datalistOptions2">
                      {options.map((item) => (
                        <option key={item._id} value={item.destination} />
                      ))}
                    </datalist>
                  </div>
                  <br />
                  <div className="d-grid">
                    <Button
                      className="btn search-button"
                      onClick={(e) => handleSearch(e)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-7 mt-2">
                <div>
                  <input
                    type="text"
                    placeholder="Starting Home"
                    name=""
                    id=""
                  />
                  <input type="text" placeholder="Going To" name="" id="" />
                </div>
                <Map />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {count.map((item) => (
            <Search item={item} key={item._id} />
          ))}
        </div>
      </div>

      {error && (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center">
                <h2 class="text-danger">Item not found</h2>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Bus_Cost;
