import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const defaultValues = {
  name: "",
  link: "",
  weatherType: "",
};

const AddItemModal = ({ isOpen, onCloseModal, onAddItem }) => {
  const { values, handleChange, resetForm } = useForm(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({
      name: values.name,
      link: values.link,
      weather: values.weatherType, // Reassign weatherType to weather
    });
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="clothing-name"
          className="modal__input modal__input_type_name"
          placeholder="name"
          required
          minLength={1}
          maxLength={30}
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image URL
        <input
          type="url"
          name="link"
          id="imageUrl"
          className="modal__input modal__input_type_url"
          placeholder="image URL"
          required
          value={values.link}
          onChange={handleChange}
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
            checked={values.weatherType === "cold"}
            onChange={handleChange}
          />
          <span className="modal__custom-radio"></span>
          Cold
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weatherType"
            value="warm"
            className="modal__radio-input"
            checked={values.weatherType === "warm"}
            onChange={handleChange}
          />
          <span className="modal__custom-radio"></span>
          Warm
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weatherType"
            value="hot"
            className="modal__radio-input"
            checked={values.weatherType === "hot"}
            onChange={handleChange}
          />
          <span className="modal__custom-radio"></span>
          Hot
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
