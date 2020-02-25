import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather/Weather";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <Map />
      <Weather />
    </div>
  );
}

export default App;
