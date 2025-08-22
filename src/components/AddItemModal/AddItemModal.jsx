import { useEffect } from "react";

import { useForm } from "../../../hooks/useForm";
import { addItem } from "../../utils/api";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({
  isOpen,
  onCloseModal,
  setClothingItems,
  clothingItems,
}) => {
  const defaultValues = {
    name: "",
    link: "",
    weatherType: "",
  };

  const { values, handleChange, resetForm } = useForm(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(values);
  };

  const onAddItem = (data) => {
    addItem(data)
      .then((newItem) => {
        setClothingItems([...clothingItems, newItem]);
        onCloseModal();
      })
      .catch((error) => {
        console.error("Failed to add item:", error);
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
            id="weatherType-cold"
            checked={values.weatherType === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weatherType"
            value="warm"
            id="weatherType-warm"
            className="modal__radio-input"
            checked={values.weatherType === "warm"}
            onChange={handleChange}
          />
          Warm
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weatherType"
              value="hot"
              className="modal__radio-input"
              checked={values.weatherType === "hot"}
              onChange={handleChange}
            />
            Hot
          </label>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
