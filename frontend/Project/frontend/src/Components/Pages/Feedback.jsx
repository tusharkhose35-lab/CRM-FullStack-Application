import { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(feedback)
      });

      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }

      alert("Feedback submitted successfully!");
      setFeedback({ name: "", email: "", message: "" });

    } catch (err) {
      console.error(err);
      alert("Error submitting feedback!");
    }
  };

  return (
     <div className="feedback-container">
    <div className="feedback-card">
      <h2>Submit Feedback</h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Share your feedback with us..."
          value={feedback.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="feedback-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  </div>
  );
};

export default Feedback;
