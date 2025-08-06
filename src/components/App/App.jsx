import React, { useEffect, useState } from "react";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleAddButtonClick={handleAddButtonClick}
          weatherData={weatherData}
        />
        <Main
          weatherData={weatherData}
          handleAddButtonClick={handleAddButtonClick}
        />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image URL
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend"> Select the weather type:</legend>
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weatherType"
              value="cold"
              className="modal__radio-input"
            />
            Cold
          </label>
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weatherType"
              value="warm"
              className="modal__radio-input"
            />
            Warm
          </label>
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weatherType"
              value="hot"
              className="modal__radio-input"
            />
            Hot
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
