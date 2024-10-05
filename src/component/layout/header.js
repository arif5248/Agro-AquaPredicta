import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import "./header.css";
import logoIcon from "../../images/Only Logo.png";
import logoText from "../../images/Chashi Sheba.png";
import profileIcon from "../../images/account.png";
import locationIcon from "../../images/location.png";
import notificationIcon from "../../images/bell.png";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  // Dummy notifications array
  const notifications = [
    // "Your order has been shipped!",
    // "New message from customer support.",
    // "Special discount available for you!",
  ];

  // Function to toggle notification box
  const toggleNotificationBox = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  // Function to close notification box when clicking outside
  const closeNotification = () => {
    setNotificationOpen(false);
  };

  return (
    <div className="headerSection">
      <div className="logoBox">
        <div className="logoBoxWrapper">
          <img src={logoIcon} alt="Logo Icon" />
          <img src={logoText} alt="Logo Text" />
        </div>
      </div>

      <div className="headerIconBox">
        <img onClick={toggleNotificationBox} src={notificationIcon} alt="Notification Icon" />
        <img src={profileIcon} alt="Profile Icon" />
        <img src={locationIcon} alt="Location Icon" />
      </div>

      {/* Overlay that closes notification box when clicked */}
      {isNotificationOpen && <div className="overlay" onClick={closeNotification}></div>}

      {/* Notification Box */}
      <div className={`notificationBox ${isNotificationOpen ? "open" : ""}`}>
        <div className="notificationHeader">
          <FaArrowLeft onClick={closeNotification} className="closeIcon" />
          <h3 className="notificationTitle">{t("Notifications")}</h3>
        </div>
        {notifications.length > 0 ? (
          <ul className="notificationList">
            {notifications.map((notification, index) => (
              <li key={index} className="notificationItem">
                {notification}
              </li>
            ))}
          </ul>
        ) : (
          <p className="noNotification">{t("No notifications available now.")}</p>
        )}
      </div>
    </div>
  );
};

export default Header;
