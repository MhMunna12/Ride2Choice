import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const RouteAdd = () => {
  const [route, setRoute] = useState({});
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const busData = {
      route: data.route,
      busname: data.busname,
      destination: data.destination,
      cost: data.cost,
      bustype: data.bustype,
      busclass: data.busclass,
      station: data.station,
      km: data.km,
      imageURL: imageURL,
    };

    fetch("http://localhost:6060/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(busData),
    })
      .then((res) => {
        if (res) {
          console.log(res);
          alert("add service");
        }
      })
      // .then(data => console.log(data))
      .catch((err) => console.log(err));
  };
  // const handleChange = (e) => {
  //   const newRoute = { ...route };
  //   newRoute[e.target.name] = e.target.value;
  //   setRoute(newRoute);
  //   console.log(newRoute);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:6060/addService", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(route),
  //   })
  //     .then((res) => {
  //       if (res) {
  //         console.log(res);
  //         alert("add service");
  //       }
  //     })
  //     // .then(data => console.log(data))
  //     .catch((err) => console.log(err));
  // };
  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "3cde4e55b35ec3ed8080086cc4be7349");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImageURL(res.data.data.display_url);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-route">
      <h4>Add Route</h4>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="">Route name</label>
              <input
                name="route"
                className="form-control"
                defaultValue=""
                placeholder="Route Name"
                {...register("route", { required: true })}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="">Bus name</label>
              <input
                name="busname"
                className="form-control"
                defaultValue=""
                placeholder="Bus Name"
                {...register("busname", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="">Destination</label>
              <input
                name="destination"
                className="form-control"
                defaultValue=""
                placeholder="Destination"
                {...register("destination", { required: true })}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="">Cost</label>
              <input
                name="cost"
                className="form-control"
                defaultValue=""
                placeholder="Cost"
                {...register("cost", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="">Station</label>
              <input
                name="station"
                className="form-control"
                defaultValue=""
                placeholder="Station"
                {...register("station", { required: true })}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="">Kilo Meeter</label>
              <input
                name="km"
                className="form-control"
                defaultValue=""
                placeholder="K.M"
                {...register("km", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="">Bus type</label>
              <input
                name="bustype"
                className="form-control"
                defaultValue=""
                placeholder="Bus Type"
                {...register("bustype", { required: true })}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="">Bus Class</label>
              <input
                name="busclass"
                className="form-control"
                defaultValue=""
                placeholder="Bus Class"
                {...register("busclass", { required: true })}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Bus image</label>
              <br />
              <input
                name="image"
                type="file"
                onChange={handleImageUpload}
                className="form-control"
              />
            </div>
          </div>
          <br />
          <input className="btn btn-primary" type="submit" />
        </form>
        {/* <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="">Route Name</label>
              <input
                type="text"
                onBlur={handleChange}
                name="route"
                className="form-control"
                required
                placeholder="Route"
                id=""
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="">Bus Name</label>
              <input
                type="text"
                name="busName"
                onBlur={handleChange}
                className="form-control"
                required
                placeholder="Bus Name"
                id=""
              />
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-md-5">
              <label htmlFor="">Destination</label>
              <input
                type="text"
                name="destination"
                onBlur={handleChange}
                className="form-control"
                required
                placeholder="Destination"
                id=""
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="">Cost</label>
              <input
                type="number"
                className="form-control"
                onBlur={handleChange}
                name="vara"
                placeholder="Cost"
                id=""
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="">Bus type</label>
              <input
                type="text"
                name="bustype"
                onBlur={handleChange}
                className="form-control"
                required
                placeholder="Bus Type"
                id=""
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="">Bus Class</label>
              <input
                type="text"
                className="form-control"
                onBlur={handleChange}
                name="busclass"
                placeholder="Bus Class"
                id=""
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Add image</label>
              <input
                type="file"
                className="form-control"
                onBlur={handleImageUpload}
                name="image"
                placeholder=""
                id=""
              />
            </div>
          </div>
          <input className="submit mt-3" type="submit" value="Added" />
        </form> */}
      </div>
      <br />
    </div>
  );
};

export default RouteAdd;
