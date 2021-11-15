import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "235px",
};

const location = {
  lat: 23.742821,
  lng: 90.441257,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDe5RAgTj7NFUJH6S6pPf4x_UWRpg5UcsI">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12}>
        <Marker onLoad={onLoad} position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
