import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  if (activeModal !== "preview") return null;

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
            className="modal__delete"
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
