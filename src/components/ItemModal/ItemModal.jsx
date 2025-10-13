import { useContext } from "react";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  if (activeModal !== "preview") return null;

  // Checking if the current user is the owner of the current clothing item
  const isOwn = card.owner === currentUser?._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "" : "modal__delete_hidden"
  }`;

  return (
    <div className="modal modal__opened">
      <div className="modal__content_type_image">
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
        <img
          className="modal__image"
          src={card.imageUrl || card.link}
          alt={card.name}
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            type="button"
            className={itemDeleteButtonClassName}
            onClick={() => onDelete(card._id)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
