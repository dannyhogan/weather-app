import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, modalItem, toggleModal }) => {

  if(!modalItem) return <div></div>;
  console.log(modalItem);

  return (
    <section className={`Modal ${isOpen ? 'modal-open' : 'modal-closed'}`}>
      <button className="close-modal" onClick={() => toggleModal(open => !open)}>x</button>
      <p>{modalItem.name}</p>
      <p>{modalItem.shortForecast}</p>
      <p>Wind: {modalItem.windSpeed}{modalItem.windDirection}</p>
      <p>{modalItem.detailedForecast}</p>
    </section>
  )

};

export default Modal;
