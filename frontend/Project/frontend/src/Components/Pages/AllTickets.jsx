import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllTickets.css";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);

  const loadTickets = () => {
    fetch("http://localhost:8080/api/Ticket")
      .then(res => res.json())
      .then(data => setTickets(data));
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const deleteTicket = async (id) => {
    await fetch(`http://localhost:8080/api/Ticket/${id}`, {
      method: "DELETE"
    });
    alert("Ticket deleted!");
    loadTickets();
  };

  return (
    <div className="ticket-page">

      <div className="ticket-card">

        <h2 className="ticket-title">
          Ticket Management
        </h2>

        <table className="ticket-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.body}</td>
                <td>{t.contact}</td>
                <td>{t.email}</td>

                <td>
                  <div className="action-btn">

                    <Link to={`/update-ticket/${t.id}`}>
                      <button className="update-btn">
                        Update
                      </button>
                    </Link>

                    <button
                      className="delete-btn"
                      onClick={() => deleteTicket(t.id)}
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AllTickets;
