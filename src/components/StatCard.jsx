export default function StatCard({ title, value, icon, bg }) {
  return (
    <div className="stat-card">
      <div>
        <p className="stat-title">{title}</p>
        <h2>{value}</h2>
      </div>

      <div className="stat-icon" style={{ background: bg }}>
        <i className={`bi ${icon}`} />
      </div>
    </div>
  );
}
