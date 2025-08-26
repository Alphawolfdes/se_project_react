import React from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, onCardClick, onAddButtonClick }) {
  return (
    <section className="profile">
      <div className="profile__header">
        <div className="profile__avatar"></div>
        <div>
          <h1 className="profile__title">Your Profile</h1>
          <p className="profile__subtitle">
            Manage your clothes and preferences
          </p>
        </div>
      </div>
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onAddButtonClick={onAddButtonClick}
      />
    </section>
  );
}

export default Profile;
