export default function Sidebar() {
  const menu = [
    { icon: "bi-grid", label: "Dashboard", active: true },
    { icon: "bi-people", label: "Leads" },
    { icon: "bi-building", label: "Companies" },
    { icon: "bi-briefcase", label: "Deals" },
    { icon: "bi-ticket", label: "Tickets" },
  ];

  return (
    <aside className="sidebar">
      {menu.map((m, i) => (
        <div key={i} className={`side-icon ${m.active ? "active" : ""}`}>
          <i className={`bi ${m.icon}`} />
          <span>{m.label}</span>
        </div>
      ))}
    </aside>
  );
}
