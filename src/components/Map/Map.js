import React from "react";
import "./Map.scss";
import GoogleMapReact from "google-map-react";

const Map = ({ handleMapChange }) => {
  const props = {
    center: {
      lat: 45.5451,
      lng: -122.7203,
    },
    zoom: 10,
  };

  return (
    <section className="Map">
      <GoogleMapReact
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        onChange={({ center }) =>
          handleMapChange(center.lat.toFixed(4), center.lng.toFixed(4))
        }
      >
        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" />
      </GoogleMapReact>
    </section>
  );
};

export default Map;
