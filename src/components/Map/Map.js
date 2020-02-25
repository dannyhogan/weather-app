import React from "react";
import "./Map.scss";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const props = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 20
  };

  return (
    <section className="Map">
      <GoogleMapReact
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      ></GoogleMapReact>
    </section>
  );
};

export default Map;
