import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddButtonClick }) {
  return (
    <section className="clothes-section">
      <h2 className="clothes-section__title">Your Clothes</h2>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
      <button
        className="clothes-section__add-btn"
        type="button"
        onClick={onAddButtonClick}
      >
        + Add New
      </button>
    </section>
  );
}

export default ClothesSection;
