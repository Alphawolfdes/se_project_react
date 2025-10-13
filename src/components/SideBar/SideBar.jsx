import { useContext } from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfileClick, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  // Generate avatar display similar to Header component
  const getAvatarDisplay = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name || "User"}
          className="sidebar__avatar"
        />
      );
    } else if (currentUser?.name) {
      return (
        <div className="sidebar__avatar-placeholder">
          {currentUser.name.charAt(0).toUpperCase()}
        </div>
      );
    } else {
      return <img src={avatar} alt="User" className="sidebar__avatar" />;
    }
  };

  return (
    <div className="sidebar">
      {getAvatarDisplay()}
      <p className="sidebar__username">{currentUser?.name || "User"}</p>
      <button
        className="sidebar__edit-btn"
        type="button"
        onClick={onEditProfileClick}
      >
        Edit profile
      </button>
      <button className="sidebar__logout-btn" type="button" onClick={onLogout}>
        Sign out
      </button>
    </div>
  );
}

export default SideBar;
