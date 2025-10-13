import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  onCardClick,
  onAddButtonClick,
  onEditProfileClick,
  onCardLike,
  onLogout,
}) {
  return (
    <section className="profile">
      <div className="profile__layout">
        <SideBar onEditProfileClick={onEditProfileClick} onLogout={onLogout} />
        <div className="profile__main">
          <div className="profile__header"></div>
          <ClothesSection
            clothingItems={clothingItems}
            onCardClick={onCardClick}
            onAddButtonClick={onAddButtonClick}
            onCardLike={onCardLike}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
