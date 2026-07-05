import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/NewLead.css";

const NewLead = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/lead");
      const filtered = res.data.filter(lead => lead.status.toLowerCase() === "new");
      setLeads(filtered);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
    
   <div className="lead-container">
      <h2 className="lead-title">New Leads</h2>
      <div className="table-wrapper">
        <table className="lead-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-leads">No new leads found</td>
              </tr>
            ) : (
              leads.map(l => (
                <tr key={l.id}>
                  <td>{l.name}</td>
                  <td>{l.email}</td>
                  <td>{l.contact}</td>
                  <td>{l.city}</td>
                  <td>
                    <span className="status-badge">{l.status}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewLead;
