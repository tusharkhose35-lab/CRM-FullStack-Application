import axios from "axios";
import { useEffect, useState } from "react";
import "../DashboardP/Demolead.css";

const DemoLead = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/lead");
      const filtered = res.data.filter(lead => lead.status.toLowerCase() === "demo");
      setLeads(filtered);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
 

<div className="demo-container">

        <h2 className="demo-title">Demo Leads</h2>

        <table className="demo-table">

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
                        <td className="no-demo" colSpan="5">
                            No Demo Leads Found
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
                        </tr>

                    ))

                )}

            </tbody>

        </table>

    </div>
  
       
  );
};
export default DemoLead