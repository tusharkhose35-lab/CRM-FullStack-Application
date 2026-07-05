import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CustomerDashboard.css";

import AboutUs from "../Pages/AboutUs";
import AddTickets from "../Pages/AddTickets";
import AllTickets from "../Pages/AllTickets";
import Feedback from "../Pages/Feedback";
import Services from "../Pages/Services";
import Support from "../Pages/Support";

const CustomerDashboard = () => {
  const [page, setPage] = useState("AboutUs");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (page) {
      case "AboutUs":
        return <AboutUs />;
      case "services":
        return <Services />;
      case "addtickets":
        return <AddTickets />;
      case "alltickets":
        return <AllTickets />;
      case "feedback":
        return <Feedback />;
      case "support":
        return <Support />;
      default:
        return <p>No Page Found</p>;
    }
  };

  return (
    <div className="dashboard-container">
      
      <div className="sidebar">
        <h2>CRM Portal</h2>

        <div
          className={`menu-item ${page === "AboutUs" ? "active" : ""}`}
          onClick={() => setPage("AboutUs")}
        >
          About Us
        </div>

        <div
          className={`menu-item ${page === "services" ? "active" : ""}`}
          onClick={() => setPage("services")}
        >
          Services
        </div>

        <div
          className={`menu-item ${page === "addtickets" ? "active" : ""}`}
          onClick={() => setPage("addtickets")}
        >
          Add Tickets
        </div>

        <div
          className={`menu-item ${page === "alltickets" ? "active" : ""}`}
          onClick={() => setPage("alltickets")}
        >
          All Tickets
        </div>

        <div
          className={`menu-item ${page === "feedback" ? "active" : ""}`}
          onClick={() => setPage("feedback")}
        >
          Feedback
        </div>

        <div
          className={`menu-item ${page === "support" ? "active" : ""}`}
          onClick={() => setPage("support")}
        >
          Support
        </div>

        <button
          className="logout-btn"
          onClick={() => navigate("/")}
        >
          Exit
        </button>
      </div>

      <div className="content">
        <div className="dashboard-header">
          <h1>Customer Dashboard</h1>
          <span>Welcome Customer</span>
        </div>

        <div className="content-card">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;