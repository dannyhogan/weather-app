import React, { useState } from "react";
import "./WeatherApp.scss";
import Weather from "../../components/Weather/Weather";
import Map from "../../components/Map/Map";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";

const WeatherApp = () => {
  const [modalItem, setModalItem] = useState(null);
  const [isOpen, toggleModal] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: 45.5451,
    lng: -122.7203,
  });

  const handleChange = (lat, lng) => {
    setCoordinates({ lat, lng });
  };

  const handleClick = (day) => {
    console.log("click", day);
    setModalItem(day);
    if (!isOpen) toggleModal((open) => !open);
  };

  return (
    <section className="WeatherApp">
      <Header />
      <Modal isOpen={isOpen} modalItem={modalItem} toggleModal={toggleModal} />
      <Map handleMapChange={handleChange} />
      <Weather coordinates={coordinates} handleClick={handleClick} />
    </section>
  );
};

export default WeatherApp;
