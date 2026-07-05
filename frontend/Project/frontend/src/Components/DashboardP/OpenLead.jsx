import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../DashboardP/OpenLead.css';

const OpenLead = () => {
  const [leads, setLeads] = useState([]);
 const navigate = useNavigate()
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/lead");
      const filtered = res.data.filter(lead => lead.status.toLowerCase() === "open");
      setLeads(filtered);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
   <div className="openlead-container">

        <h2 className="openlead-title">Open Leads</h2>

        <table className="openlead-table">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>

                {leads.length === 0 ? (

                    <tr>
                        <td className="no-data" colSpan="6">
                            No Open Leads Found
                        </td>
                    </tr>

                ) : (

                    leads.map((l) => (

                        <tr key={l.id}>

                            <td>{l.name}</td>
                            <td>{l.email}</td>
                            <td>{l.contact}</td>
                            <td>{l.city}</td>
                            <td>{l.status}</td>

                            <td>
                                <button
                                    className="email-btn"
                                    onClick={() => navigate("/email")}
                                >
                                    Send Email
                                </button>
                            </td>

                        </tr>

                    ))

                )}

            </tbody>

        </table>

    </div>
  )
};


export default OpenLead;
