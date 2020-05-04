import React, { useEffect, useState } from "react";
import "./Weather.scss";
import { getWeatherData } from "../../services/weatherApi";
import { BeatLoader } from "react-spinners";

const Weather = ({ coordinates, handleClick }) => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeatherData(coordinates.lat, coordinates.lng)
      .then((res) => {
        setForecast(res);
      })
      .catch((err) => {
        if (typeof err === "string") setError(err);
      });
  }, [coordinates]);

  const forcastItems = forecast.map((day, i) => {
    return (
      <li key={i} className="forecastListItem" onClick={() => handleClick(day)}>
        <img src={day.icon} alt="Weather Icon" />
        <h3>{day.name}</h3>
        <p>{day.temperature} °F</p>
      </li>
    );
  });

  return (
    <section className="Weather">
      <div>
        <h2>Weekly Forecast</h2>
        <h3>Click on a card for a detailed forecast!</h3>
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <ul className="forecastList">{forcastItems}</ul>
      )}
    </section>
  );
};

export default Weather;
