import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="item-card" onClick={handleCardClick}>
      <span className="item-card__name">{item.name}</span>
      <div className="item-card__image-wrapper">
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
