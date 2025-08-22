import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, onCardClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection clothingItems={clothingItems} onCardClick={onCardClick} />
    </div>
  );
}

export default Profile;
