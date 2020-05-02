import React, { useEffect, useState } from "react";
import "./Weather.scss";
import { getWeatherData } from "../../services/weatherApi";
import { BeatLoader } from 'react-spinners';

const Weather = ({ coordinates, toggleModal, setModalItem }) => {

  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null)
    getWeatherData(coordinates.lat, coordinates.lng)
      .then(res => {
        setForecast(res);
      })
      .catch(err => {
        setError(err)
      });
  }, [coordinates]);

  const forcastItems = forecast.map((day, i) => {
    return (
      <li key={i} className="forecastListItem" onClick={() => {
        setModalItem(day)
        toggleModal(open => !open);
      }}>
        <img src={day.icon} alt="Weather Icon" />
        <h3>{day.name}</h3>
        <p>{day.temperature}</p>
      </li>
    );
  });

  return (
    <section className="Weather">
      <h2>Weekly Forecast</h2>
      <ul className="forecastList">
        {error ? <h2>{error}</h2> : forcastItems}
      </ul>
    </section>
  );
};

export default Weather;
