import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = (e) => {
    e.stopPropagation(); // Prevent card click when clicking like button
    onCardLike({ id: item._id, isLiked });
  };

  // Check if the item was liked by the current user
  // The likes array should be an array of ids
  const isLiked = item.likes?.some((id) => id === currentUser?._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `item-card__like-button ${
    isLiked ? "item-card__like-button_active" : ""
  }`;

  return (
    <li className="item-card">
      <div className="item-card__header">
        <span className="item-card__name">{item.name}</span>
        {currentUser && (
          <button
            className={itemLikeButtonClassName}
            type="button"
            onClick={handleLike}
          >
            ♡
          </button>
        )}
      </div>
      <div className="item-card__image-wrapper" onClick={handleCardClick}>
        <img
          className="item-card__image"
          src={item.imageUrl || item.link}
          alt={item.name}
        />
      </div>
    </li>
  );
}

export default ItemCard;
