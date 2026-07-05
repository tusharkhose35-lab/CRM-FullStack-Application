import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTickets = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    title: "",
    body: "",
    contact: "",
    email: ""
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/Ticket/${id}`)
      .then(res => res.json())
      .then(data => setTicket(data));
  }, [id]);

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:8080/api/Ticket/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket)
    });

    alert("Ticket updated successfully!");
    navigate("/tickets");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Ticket</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="title"
          value={ticket.title}
          onChange={handleChange}
          required
        /><br /><br />

        <textarea
          name="body"
          value={ticket.body}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="contact"
          value={ticket.contact}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          value={ticket.email}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default UpdateTickets;
