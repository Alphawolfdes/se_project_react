function ClothesSection({ onCardClick, clothingItems, weatherData }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Your Items</p>
        <button>Add New</button>
      </div>

      <ul className="clothes-section__items">
        {clothingItems((item) => item.weather === weatherData.type).map(
          (item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default ClothesSection;
