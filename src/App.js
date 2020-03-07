import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherApp from './containers/WeatherApp/WeatherApp';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
