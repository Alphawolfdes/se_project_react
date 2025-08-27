import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, onCardClick, onAddButtonClick }) {
  return (
    <section className="profile">
      <div className="profile__layout">
        <SideBar />
        <div className="profile__main">
          <div className="profile__header"></div>
          <ClothesSection
            clothingItems={clothingItems}
            onCardClick={onCardClick}
            onAddButtonClick={onAddButtonClick}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
