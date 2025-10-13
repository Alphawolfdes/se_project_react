import { useEffect, useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./EditProfileModal.css";

const EditProfileModal = ({ isOpen, onCloseModal, onEditProfile }) => {
  const currentUser = useContext(CurrentUserContext);

  const [values, setValues] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProfile({
      name: values.name,
      avatar: values.avatar,
    });
  };

  // Update form values when modal opens with current user data
  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setValues({
        name: "",
        avatar: "",
      });
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Save changes"
      title="Change profile data"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name *
        <input
          type="text"
          name="name"
          id="edit-name"
          className="modal__input modal__input_type_name"
          placeholder="Name"
          required
          minLength={1}
          maxLength={30}
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          name="avatar"
          id="edit-avatar"
          className="modal__input modal__input_type_url"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
