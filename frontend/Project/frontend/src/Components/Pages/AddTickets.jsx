import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTickets.css";

const AddTickets = () => {
  const [ticket, setTicket] = useState({
    title: "",
    body: "",
    contact: "",
    email: ""
  });
const navigate=useNavigate()
  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/api/Ticket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket)
    });

    alert("Ticket added successfully!");
    setTicket({ title: "", body: "", contact: "", email: "" });
    navigate("/tickets")
  };

  return (
    <div className="ticket-container">
    <div className="ticket-card">
      <h2>Raise Support Ticket</h2>

      <form className="ticket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Ticket Title"
          value={ticket.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="body"
          placeholder="Describe your issue..."
          value={ticket.body}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={ticket.contact}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={ticket.email}
          onChange={handleChange}
          required
        />

        <button type="submit" className="ticket-btn">
          Submit Ticket
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddTickets;

