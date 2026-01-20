import "../styles/topbar.css";

export default function Topbar() {
  const userName = "Arjun"; // later from backend
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <div className="topbar">
      <h4 className="brand">CRM</h4>

      <div className="topbar-right">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input placeholder="Search" />
        </div>

        <button className="icon-btn">
          <i className="bi bi-bell"></i>
        </button>

        <div className="profile-avatar">
          {firstLetter}
        </div>
      </div>
    </div>
  );
}
