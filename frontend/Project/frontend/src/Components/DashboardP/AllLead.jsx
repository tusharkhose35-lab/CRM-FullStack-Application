import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../DashboardP/AllLead.css";
const  AllLead=()=> {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);


  const navigate = useNavigate()
  const fetchLeads = async () => {
    const res = await axios.get("http://localhost:8080/api/lead");
    setLeads(res.data);
  };

  const deleteLead = async (id) => {
    await axios.delete(`http://localhost:8080/api/lead/${id}`);
    fetchLeads();
  };

  return (
        <div className="alllead-container">

        <h2 className="alllead-title">All Leads</h2>

        <table className="alllead-table">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

                {leads.length === 0 ? (

                    <tr>
                        <td className="no-data" colSpan="6">
                            No Leads Found
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
                                    className="action-btn delete-btn"
                                    onClick={() => deleteLead(l.id)}
                                >
                                    Delete
                                </button>

                                <button
                                    className="action-btn update-btn"
                                    onClick={() => navigate(`/updatelead/${l.id}`)}
                                >
                                    Update
                                </button>
                            </td>

                        </tr>

                    ))

                )}

            </tbody>

        </table>

        <button
    className="add-btn"
    onClick={() => navigate("/createlead")}
>
    + Add New Lead
</button>

    </div>

  );
}

export default AllLead;
