import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import ConversionCard from "../components/ConversionCard";
import TeamTable from "../components/TeamTable";
import SalesChart from "../components/SalesChart";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <div className="container-fluid px-4">
          {/* STATS */}
          <div className="row g-4 mt-2">
            <div className="col-md-3">
              <StatCard title="Total Leads" value="1,250" icon="bi-people" bg="#e0e7ff" />
            </div>
            <div className="col-md-3">
              <StatCard title="Active Deals" value="136" icon="bi-briefcase" bg="#d1fae5" />
            </div>
            <div className="col-md-3">
              <StatCard title="Closed Deals" value="136" icon="bi-bag-check" bg="#fee2e2" />
            </div>
            <div className="col-md-3">
              <StatCard title="Monthly Revenue" value="45,000" icon="bi-currency-dollar" bg="#fde68a" />
            </div>
          </div>

          {/* MIDDLE */}
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <ConversionCard />
            </div>

            <div className="col-md-8">
              <div className="card sales-card">
                <div className="card-header">
                  <h6>Sales Reports</h6>
                  <select>
                    <option>Monthly</option>
                  </select>
                </div>

                {/* REAL CHART */}
                <SalesChart />
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="row mt-4">
            <div className="col-12">
              <TeamTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
