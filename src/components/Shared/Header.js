import React, { useEffect, useState } from "react";
import logoH from "../../assets/images/logo/logo_horizontal.png";
import searchIcon from "../../assets/images/icons/search.png";
import bellIcon from "../../assets/images/icons/bellIcon.png";
import bellDot from "../../assets/images/icons/bellDot.png";
import profileImg from "../../assets/images/icons/blank.png";
import downArrow from "../../assets/images/icons/downArrow.png";
import hamBurger from "../../assets/images/icons/hamburger.png";
import DropDown from "./DropDown";
import NotificationDropDown from "./NotificationDropDown";
import Hamburger from "./Hamburger";
import { Link, useLocation } from "react-router-dom";
import SearchDropDown from "./SearchDropDown";
import { getUser } from "../../core/AuthHelpers";

function Header({ userData }) {
  const location = useLocation();
  const [isDropdown, setIsDropDown] = useState(false);
  const [isNotifDropdown, setIsNotifDropDown] = useState(false);
  const [isSearchDropdown, setIsSearchDropDown] = useState(false);
  const [isNewNotification, setIsNewNotification] = useState(true);
  const [user, setUser] = useState(getUser);
  const [notification, setNotification] = useState([
    { comment: "commented", new: true },
    { comment: "comment 2", new: false },
  ]);
  const [isHamburger, setIsHamburger] = useState(false);

  useEffect(() => {
    const newNot = notification.filter((item) => item.new);
    if (newNot.length > 0) {
      setIsNewNotification(true);
    }
    setUser(getUser);
  }, [userData]);

  const handleOnClickOutside = (e) => {
    if (e.target.className === "dropdown-modal") {
      setIsDropDown(false);
      setIsNotifDropDown(false);
      setIsSearchDropDown(false);
      setIsHamburger(false);
    }
  };

  const changeNotificationInfo = () => {
    setIsNewNotification(false);
  };

  return (
    <div className="header-main-cont">
      <div
        onClick={handleOnClickOutside}
        className="dropdown-modal"
        style={
          isDropdown | isHamburger | isNotifDropdown | isSearchDropdown
            ? {
                width: "100%",
                height: "100vh",
                zIndex: 10,
                position: "absolute",
              }
            : { display: "none" }
        }
      ></div>
      <Link to="/dashboard" className="header-logo-cont">
        <img
          className="header-logo-horizontal"
          src={logoH}
          alt="logo-horizontal"
        />
      </Link>
      <div className="header-navlinks-cont">
        <Link
          to="/dashboard"
          className={
            location.pathname === "/dashboard"
              ? "nav-links-active"
              : "nav-links"
          }
        >
          Dashboard
        </Link>
        <Link
          to="/jobs"
          className={
            location.pathname === "/jobs" ? "nav-links-active" : "nav-links"
          }
        >
          Jobs
        </Link>
        <Link
          to="/post-jobs"
          className={
            location.pathname === "/post-jobs"
              ? "nav-links-active"
              : "nav-links"
          }
        >
          Post Jobs
        </Link>
        <Link
          to="/add-candidate"
          className={
            location.pathname === "/add-candidate"
              ? "nav-links-active"
              : "nav-links"
          }
        >
          Add Candidate
        </Link>
<Link
          to="/add-company"
          className={
            location.pathname === "/add-company"
              ? "nav-links-active"
              : "nav-links"
          }
        >
          Add Company
        </Link>
      </div>
      <div className="header-profile-cont">
        <div className="header-profile-div">
          <div onClick={() => setIsSearchDropDown(true)} className="search-div">
            <img className="search-icon" src={searchIcon} alt="search-icon" />
            <SearchDropDown open={isSearchDropdown} />
          </div>
          <div
            className="bellIcon-cont"
            onClick={() => setIsNotifDropDown(true)}
          >
            {/* <span style={isNewNotification ? { display: 'block' } : { display: 'none' }} className='notification-dot'></span> */}
            <img
              className="bell-icon"
              src={isNewNotification ? bellDot : bellIcon}
              alt="search-icon"
            />
            <NotificationDropDown open={isNotifDropdown} />
          </div>
          <div className="profile-dropdown-main-cont">
            <div
              className="profile-dropdown-cont"
              onClick={() => setIsDropDown(true)}
            >
              <img
                className="profile-img-tag"
                src={user.avatar ? user.avatar : profileImg}
                alt="profile-img"
              />
              <div className="profile-welcome-name">
                <span>Hello!</span>
                <span className="welcome-name-tag">{user.name} </span>
              </div>
            </div>
            <img className="down-arrow" src={downArrow} alt="down-arrow" />
            <DropDown
              open={isDropdown}
              close={() => setIsDropDown(false)}
              user={user}
            />
          </div>
        </div>
      </div>
      <div className="mobile-hamburger-div">
        <div className="bellIcon-cont">
          {/* <span style={isNewNotification ? { display: 'block' } : { display: 'none' }} className='notification-dot'></span> */}
          <img
            onClick={() => setIsNotifDropDown(true)}
            className="bell-icon"
            src={isNewNotification ? bellDot : bellIcon}
            alt="search-icon"
          />
          {isHamburger ? (
            <>
              <img
                style={{ visibility: "hidden" }}
                className="hamburger-icon"
                onClick={() => setIsHamburger(true)}
                src={hamBurger}
                alt="hamburger"
              />

              <span
                style={{
                  position: "absolute",
                  left: "60%",
                  top: 24,
                  width: 0,
                  fontSize: "40px",
                }}
                class="close"
              >
                &times;
              </span>
            </>
          ) : (
            <img
              className="hamburger-icon"
              onClick={() => setIsHamburger(true)}
              src={hamBurger}
              alt="hamburger"
            />
          )}
          <NotificationDropDown open={isNotifDropdown} />
          <Hamburger open={isHamburger} close={setIsHamburger} />
        </div>
      </div>
    </div>
  );
}

export default Header;
