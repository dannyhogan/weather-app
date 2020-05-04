import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} />
      <div>
        <h1>GeoWeather</h1>
        <h2>Select a location on the map to view a weekly weather forecast!</h2>
      </div>
    </header>
  );
};

export default Header;
