import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const defaultValues = {
  email: "",
  password: "",
};

const LoginModal = ({ isOpen, onCloseModal, onLogin }) => {
  const { values, handleChange, resetForm } = useForm(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({
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
      buttonText="Log in"
      title="Log in"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="login-email"
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
          id="login-password"
          className="modal__input modal__input_type_password"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
