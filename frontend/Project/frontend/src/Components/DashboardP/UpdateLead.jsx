import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../DashboardP/UpdateLead.css"
 


function UpdateLead() {

  const { id } = useParams();    // ✅ get id from URL
  const navigate = useNavigate();

  const [lead, setLead] = useState({
    name: "",
    email: "",
    contact: "",
    status: ""
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`http://localhost:8080/api/lead/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setLead({
          name: res.data.name,
          email: res.data.email,
          contact: res.data.contact,
          status: res.data.status
        });

      } catch (err) {
        console.error("Error:", err);
      }
    };

    if (id) fetchLead();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.put(`http://localhost:8080/api/lead/${id}`, lead, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Lead updated");
      navigate("/leads");

    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="update-container">

        <h2 className="update-title">
            Update Lead
        </h2>

        <form
            className="update-form"
            onSubmit={handleUpdate}
        >

            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={lead.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={lead.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                />
            </div>

            <div>
                <label>Contact</label>
                <input
                    type="text"
                    name="contact"
                    value={lead.contact}
                    onChange={handleChange}
                    placeholder="Enter Contact"
                />
            </div>

            <div>
                <label>Status</label>

                <select
                    name="status"
                    value={lead.status}
                    onChange={handleChange}
                >
                    <option value="">Select Status</option>
                    <option value="New">New</option>
                    <option value="Open">Open</option>
                    <option value="Demo">Demo</option>
                    <option value="Followup">Followup</option>
                    <option value="Closed">Closed</option>
                </select>

            </div>

            <button
                type="submit"
                className="update-btn"
            >
                Update Lead
            </button>

            <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate(-1)}
            >
                Cancel
            </button>

        </form>

    </div>
  );
}

export default UpdateLead;
