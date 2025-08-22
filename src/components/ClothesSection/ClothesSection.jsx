import React from "react";
import "./ClothesSection.css";

function ClothesSection({ clothingItems, onCardClick }) {
  return (
    <section className="clothes-section">
      <h2 className="clothes-section__title">Your Clothes</h2>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => (
          <li key={item._id} onClick={() => onCardClick(item)}>
            <img src={item.imageUrl || item.link} alt={item.name} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
