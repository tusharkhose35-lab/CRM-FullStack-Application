import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AllLead from "../DashboardP/AllLead";
import AllFeedback from "../Pages/AllFeedback";
import AllTickets from "../Pages/AllTickets";
import CustomerList from "../Pages/CustomerList";
import "../Main/AdminDashboard.css";

const AdminDashboard = () => {
  const [page, setPage] = useState("AboutUs");

  const navigate = useNavigate()

  const renderPage = () => {
    switch (page) {
      case "CustomerList":
        return <CustomerList />;
    case "AllLead":
      return <AllLead/>;
    
      case "AllTickets":
        return <AllTickets />;

      case "AllFeedback":
        return <AllFeedback />;
   
      default:
        return <h3>No Page Found</h3>;
    }
  };

  return (
     <div className="dashboard">

      <div className="sidebar">

        <div className="logo">
          <h2>CRM</h2>
          <p>Admin Panel</p>
        </div>

        <div
          className={`menu-item ${page==="CustomerList" ? "active":""}`}
          onClick={()=>setPage("CustomerList")}
        >
          👤 Customer List
        </div>

        <div
          className={`menu-item ${page==="AllLead" ? "active":""}`}
          onClick={()=>setPage("AllLead")}
        >
          📋 All Leads
        </div>

        <div
          className={`menu-item ${page==="AllTickets" ? "active":""}`}
          onClick={()=>setPage("AllTickets")}
        >
          🎫 All Tickets
        </div>

        <div
          className={`menu-item ${page==="AllFeedback" ? "active":""}`}
          onClick={()=>setPage("AllFeedback")}
        >
          ⭐ All Feedback
        </div>

        <button
          className="logout-btn"
          onClick={()=>navigate("/")}
        >
          Logout
        </button>

      </div>

      <div className="main-content">

        <h1 className="title">Dashboard Overview</h1>

        <div className="card-container">

          <div className="card blue">
            <h3>Total Customers</h3>
            <p>120</p>
          </div>

          <div className="card orange">
            <h3>Total Leads</h3>
            <p>56</p>
          </div>

          <div className="card green">
            <h3>Tickets</h3>
            <p>18</p>
          </div>

          <div className="card purple">
            <h3>Feedback</h3>
            <p>43</p>
          </div>

        </div>

        <div className="page-content">
          {renderPage()}
        </div>

      </div>

    </div>
  )
  };


export default AdminDashboard;