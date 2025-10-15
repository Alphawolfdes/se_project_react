import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  name,
  onSubmit,
  redirectText,
  onRedirect,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? " modal__opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close"
        >
          <svg
            className="modal__close-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <line
              x1="4"
              y1="4"
              x2="16"
              y2="16"
              stroke="#15171C"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="4"
              x2="4"
              y2="16"
              stroke="#15171C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <div className="modal__buttons">
            <button type="submit" className="modal__button">
              {buttonText}
            </button>
            {redirectText && (
              <button
                type="button"
                className="modal__redirect-button"
                onClick={onRedirect}
              >
                {redirectText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
