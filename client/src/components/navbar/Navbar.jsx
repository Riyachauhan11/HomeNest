import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>HomeNest </span>
        </a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noAvatar.png"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" className="register">
              Sign in
            </a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
