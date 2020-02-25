import React, { useEffect, useState } from "react";
import "./Weather.scss";
import { getWeatherData } from "../../services/weatherApi";

const Weather = () => {
  const [forecast, setForecast] = useState([]);

  console.log(forecast);
  useEffect(() => {
    getWeatherData(45.4543, -121.9331).then(setForecast);
  }, []);

  const forcastItems = forecast.map((day, i) => {
    return (
      <li key={i} className="forecastListItem">
        <h3>{day.name}</h3>
        <p>{day.temperature}</p>
        <img src={day.icon}></img>
      </li>
    );
  });

  return (
    <section className="Weather">
      <ul className="forecastList">{forcastItems}</ul>
    </section>
  );
};

export default Weather;
