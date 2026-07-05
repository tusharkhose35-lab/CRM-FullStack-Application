import axios from "axios";
import { useState } from "react";
//import { FaPhone, FaUsers } from "react-icons/fa";
//import { MdEmail, MdLocationCity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import '../DashboardP/CreateLead.css';

const CreateLead=() =>{
  const [lead, setLead] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    status:""
  });
  const navigate= useNavigate();

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/lead", lead);
      alert("Lead added successfully");
      setLead({ name: "", email: "", contact: "", city: "", status:" " });
      navigate("/alllead")
    } catch (err) {
      alert("Error adding lead");
      console.error(err);
    }
  };

  return (
     <div className="create-lead-container">
        <form onSubmit={handleSubmit}>

            <h2>Add New Lead</h2>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={lead.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={lead.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Contact</label>
                <input
                    type="text"
                    name="contact"
                    placeholder="Enter Contact"
                    value={lead.contact}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={lead.city}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Status</label>
                <select
                    name="status"
                    value={lead.status}
                    onChange={handleChange}
                >
                    <option value="">Select Status</option>
                    <option value="Open">Open</option>
                    <option value="New">New</option>
                    <option value="Demo">Demo</option>
                    <option value="Closed">Closed</option>
                    <option value="FollowUp">Follow Up</option>
                </select>
            </div>

            <button className="submit-btn" type="submit">
                Save Lead
            </button>

        </form>
    </div>
  );
}

export default CreateLead;
