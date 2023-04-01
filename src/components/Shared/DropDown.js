import React from "react";
import { useAuth } from "../../core/Auth";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function DropDown({ open, user, close }) {
  const { logout } = useAuth();

  return (
    <div
      style={open ? { display: "flex" } : { display: "none" }}
      className="dropdown-div"
    >
      <div className="dropdown-profile-image-cont">
        {user.avatar ? (
          <img
            className="profile-img-tag"
            src={user.avatar}
            alt="profile-img"
          />
        ) : (
          <div
            style={{
              width: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaUser size={"2rem"} />
          </div>
        )}

        <div className="dropdown-email-div">
          <span className="dropdown-name-tag">{user.name}</span>
          <span className="dropdown-email-tag">{user.email}</span>
        </div>
      </div>
      <div className="dropdown-nav-options-div">
        <Link to="/profile" className="dropdown-div-nav-tag" onClick={close}>
          Profile
        </Link>
        {/* <span className="dropdown-div-nav-tag">My Projects</span> */}
        <span className="dropdown-div-nav-tag" onClick={close}>
          My Documents
        </span>
      </div>
      <div className="dropdown-settings-div">
        <span className="dropdown-div-nav-tag" onClick={close}>
          Language
        </span>
        <span className="dropdown-div-nav-tag" onClick={close}>
          Settings
        </span>
        <span className="dropdown-div-nav-tag" onClick={logout}>
          Sign Out
        </span>
      </div>
    </div>
  );
}

export default DropDown;
