import React, { useState } from 'react';
import './WeatherApp.scss';
import Weather from "../../components/Weather/Weather";
import Map from "../../components/Map/Map";
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';

const WeatherApp = () => {

  const [modalItem, setModalItem] = useState();
  const [isOpen, toggleModal] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 45.3736, lng: -121.6961 });

  const handleChange = (lat, lng) => {
    setCoordinates({ lat, lng });
  };

  return (
    <section className="WeatherApp" >
      <Header />
      <Modal isOpen={isOpen} modalItem={modalItem} toggleModal={toggleModal} />
      <Map handleMapChange={handleChange} />
      <Weather coordinates={coordinates} toggleModal={toggleModal} setModalItem={setModalItem} />
    </section>
  );
}

export default WeatherApp;
