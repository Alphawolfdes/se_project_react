import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const defaultValues = {
  name: "",
  avatar: "",
  email: "",
  password: "",
};

const RegisterModal = ({ isOpen, onCloseModal, onRegister }) => {
  const { values, handleChange, resetForm } = useForm(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister({
      name: values.name,
      avatar: values.avatar,
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <ModalWithForm
      buttonText="Sign up"
      title="Sign up"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="register-name"
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
          id="register-avatar"
          className="modal__input modal__input_type_url"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="register-email"
          className="modal__input modal__input_type_email"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="register-password"
          className="modal__input modal__input_type_password"
          placeholder="Password"
          required
          minLength={6}
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
