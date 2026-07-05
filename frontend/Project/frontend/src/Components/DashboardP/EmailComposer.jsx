import { useState } from "react";
import axios from "axios";
import "../DashboardP/EmailComposer.css";
function EmailComposer() {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
    module: "LEAD"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    const params = new URLSearchParams();
    params.append("to", form.to);
    params.append("subject", form.subject);
    params.append("body", form.body);
    params.append("module", form.module);

    await axios.post("http://localhost:8080/api/crm/email/send", params);
    alert("Email sent from CRM!");
  };

  return (
    <div className="email-container">

        <h2 className="email-title">
            CRM Email Module
        </h2>

        <div className="email-form">

            <div>
                <label>Select Module</label>
                <select
                    name="module"
                    value={form.module}
                    onChange={handleChange}
                >
                    <option value="LEAD">Lead</option>
                    <option value="TICKET">Ticket</option>
                    <option value="CUSTOMER">Customer</option>
                </select>
            </div>

            <div>
                <label>Recipient Email</label>
                <input
                    type="email"
                    name="to"
                    value={form.to}
                    onChange={handleChange}
                    placeholder="Enter recipient email"
                />
            </div>

            <div>
                <label>Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Enter email subject"
                />
            </div>

            <div>
                <label>Email Message</label>
                <textarea
                    name="body"
                    value={form.body}
                    onChange={handleChange}
                    placeholder="Write your email..."
                />
            </div>

            <button
                className="send-btn"
                onClick={sendEmail}
            >
                Send Email
            </button>

        </div>

    </div>
  );
}

export default EmailComposer;
