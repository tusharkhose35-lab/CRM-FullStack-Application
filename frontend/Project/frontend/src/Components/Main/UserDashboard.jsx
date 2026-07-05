import axios from "axios";
import { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from "react-router-dom";
import AllLead from '../DashboardP/AllLead'; // Modify AllLead to accept props
import DemoLead from '../DashboardP/Demolead';
import NewLead from '../DashboardP/NewLead';
import OpenLead from '../DashboardP/OpenLead';
import TodaysFollowup from '../DashboardP/TodaysFollowup';

import '../Main/UserDashboard.css';

const UserDashboard = () => {
  const [leads, setLeads] = useState([]);
 const Navigate = useNavigate()
  useEffect(() => {
    const fetchLeads = async () => {
      const res = await axios.get("http://localhost:8080/api/lead");
      setLeads(res.data);
    };
    fetchLeads();
  }, []);

  // Filtering leads based on status
  const openLeads = leads.filter(lead => lead.status === "Open");
  const newLeads = leads.filter(lead => lead.status === "New");
  const demoLeads = leads.filter(lead => lead.status === "Demo");
const todaysFollowupLeads = leads.filter(
  lead => lead.status.toLowerCase() === "followup"
);
  // Add any other status filters as needed

  return (
    
 <div className="dashboard-container">

    {/* Header */}
    <div className="dashboard-header">
      <div>
        <h2 className="dashboard-title">User Dashboard</h2>
        <p className="dashboard-subtitle">
          Manage your Leads and Followups
        </p>
      </div>

      <button
        className="add-btn"
        onClick={() => Navigate("/createlead")}
      >
        + Add Lead
      </button>
    </div>

    {/* Cards */}
    <div className="dashboard-cards">

      <div className="card-box blue">
        <h5>All Leads</h5>
        <h2>{leads.length}</h2>
      </div>

      <div className="card-box green">
        <h5>Open Leads</h5>
        <h2>{openLeads.length}</h2>
      </div>

      <div className="card-box purple">
        <h5>New Leads</h5>
        <h2>{newLeads.length}</h2>
      </div>

      <div className="card-box orange">
        <h5>Demo Leads</h5>
        <h2>{demoLeads.length}</h2>
      </div>

      <div className="card-box pink">
        <h5>Today's Followup</h5>
        <h2>{todaysFollowupLeads.length}</h2>
      </div>

    </div>

    {/* Tabs */}
    <Tabs
      defaultActiveKey="allLead"
      id="dashboard-tab"
      className="custom-tabs"
    >
      <Tab eventKey="allLead" title="All Lead">
        <AllLead leads={leads} />
      </Tab>

      <Tab eventKey="open" title="Open">
        <OpenLead leads={openLeads} />
      </Tab>

      <Tab eventKey="new" title="New Lead">
        <NewLead leads={newLeads} />
      </Tab>

      <Tab eventKey="demo" title="Demo">
        <DemoLead leads={demoLeads} />
      </Tab>

      <Tab eventKey="followup" title="Today's Followup">
        <TodaysFollowup leads={todaysFollowupLeads} />
      </Tab>
    </Tabs>

  </div>

  );
};

export default UserDashboard;
