import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/topbar.css";

export default function Topbar({ onMenuClick }) {
  const user = {
    name: "sulthan",
    email: "sulthan@gmail.com",
    role: "Admin",
    registeredAt: "12 Jan 2025",
  };

  const firstLetter = user.name.charAt(0).toUpperCase();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // clear auth data
    navigate("/");
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <i className="bi bi-list"></i>
        </button>
        <h4 className="brand">CRM</h4>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input placeholder="Search" />
        </div>

        <button className="icon-btn">
          <i className="bi bi-bell"></i>
        </button>

        {/* PROFILE */}
        <div className="profile-wrapper" ref={menuRef}>
          <div
            className="profile-avatar"
            onClick={() => setOpen(!open)}
          >
            {firstLetter}
          </div>

          {open && (
            <div className="profile-dropdown">
              {/* ACCOUNT INFO */}
              <div className="profile-info">
                <div className="avatar-lg">{firstLetter}</div>
                <div>
                  <h6>{user.name}</h6>
                  <p>{user.email}</p>
                </div>
              </div>

              <div className="profile-meta">
                <p>
                  <strong>Role:</strong> {user.role}
                </p>
                <p>
                  <strong>Registered:</strong> {user.registeredAt}
                </p>
              </div>

              <button className="logout-btn" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
