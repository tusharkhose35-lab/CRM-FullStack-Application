import { useEffect, useState } from "react";
import "./AllFeedback.css";
const AllFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/feedback");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.error("Error loading feedbacks", err);
    }
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div className="feedback-page">

      <div className="feedback-card">

        <h2 className="feedback-title">
          Customer Feedback
        </h2>

        <table className="feedback-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback Message</th>
            </tr>
          </thead>

          <tbody>
            {feedbacks.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{f.name}</td>
                <td>{f.email}</td>
                <td>{f.message}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AllFeedback;
