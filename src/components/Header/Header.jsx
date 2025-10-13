import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddButtonClick,
  weatherData,
  isLoggedIn,
  onRegisterModal,
  onLoginModal,
  onLogout,
}) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Generate placeholder avatar if no image provided
  const getAvatarDisplay = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name || "User"}
          className="header__avatar"
        />
      );
    } else if (currentUser?.name) {
      return (
        <div className="header__avatar-placeholder">
          {currentUser.name.charAt(0).toUpperCase()}
        </div>
      );
    } else {
      return <img src={avatar} alt="User" className="header__avatar" />;
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR Logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch
        isOn={currentTemperatureUnit === "C"}
        handleToggle={handleToggleSwitchChange}
      />

      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddButtonClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name || "User"}</p>
              {getAvatarDisplay()}
            </div>
          </Link>
          <button
            onClick={onLogout}
            type="button"
            className="header__logout-btn"
          >
            Log out
          </button>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button
            onClick={onRegisterModal}
            type="button"
            className="header__register-btn"
          >
            Sign up
          </button>
          <button
            onClick={onLoginModal}
            type="button"
            className="header__login-btn"
          >
            Log in
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
