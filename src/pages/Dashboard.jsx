import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import ConversionCard from "../components/ConversionCard";
import TeamTable from "../components/TeamTable";
import SalesChart from "../components/SalesChart";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";


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
              <StatCard
                title="Total Leads"
                value="1,250"
                icon={PeopleAltOutlinedIcon}
                gradient="linear-gradient(135deg, #6366f1, #8b5cf6)"
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Active Deals"
                value="136"
                icon={BusinessCenterOutlinedIcon}
                gradient="linear-gradient(135deg, #34d399, #10b981)"
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Closed Deals"
                value="136"
                icon={BusinessCenterOutlinedIcon}
                gradient="linear-gradient(135deg, #fb7185, #f43f5e)"
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Monthly Revenue"
                value="45,000"
                icon={PaymentsOutlinedIcon}
                gradient="linear-gradient(135deg, #facc15, #f59e0b)"
              />
            </div>
          </div>

          {/* MIDDLE */}
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <ConversionCard />
            </div>

            <div className="col-md-8">
              <div className="card sales-card">
                <div className="card-header sales-header">
                  <h6>Sales Reports</h6>
                  <div className="sales-filter">
                    Monthly <i className="bi bi-chevron-down"></i>
                  </div>
                </div>

                <div className="sales-chart">
                  <SalesChart />
                </div>
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
