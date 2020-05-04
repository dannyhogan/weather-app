import React, { useState } from "react";
import { FaWind } from 'react-icons/fa'
import "./Modal.scss";

const Modal = ({ isOpen, modalItem, toggleModal }) => {
  if (!modalItem) return <div></div>;
  console.log(modalItem);

  return (
    <section className={`Modal ${isOpen ? "modal-open" : "modal-closed"}`}>
      <button
        className="close-modal"
        onClick={() => toggleModal((open) => !open)}
      >
        x
      </button>
      <p className="modal-day">{modalItem.name}</p>
      <p className="modal-short-forecast">{modalItem.shortForecast}</p>
      <p className="modal-wind">
        Wind: {modalItem.windSpeed} {modalItem.windDirection} <FaWind />
      </p>
      <p>{modalItem.detailedForecast}</p>
    </section>
  );
};

export default Modal;
