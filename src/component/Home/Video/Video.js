import React from "react";
import "./Video.css";
const Video = () => {
  return (
    <div className="vedio-section">
      <div>
        <h1 className="text-center mt-5">
          How to Service Ride2Choice <br /> Followers?{" "}
          <span style={{ color: "#3abd72" }}>[Video Guide]</span>{" "}
        </h1>
      </div>
      <div className="d-flex justify-content-center align-content-center mt-5 mb-5">
        <div className="embed-responsive embed-responsive-16by9 ">
          <iframe
            width="750"
            height="305"
            src="https://www.youtube.com/embed/oSMHSG-aLHo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
