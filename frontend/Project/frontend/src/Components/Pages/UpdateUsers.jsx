import { useEffect, useState } from "react";


import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../service/api";
import "./UpdateUsers.css";

const UpdateUsers = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    password: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, [id]);

  const loadUsers = async () => {
    const res = await getUserById(id);
    setUser(res.data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUser(id, user);
    alert("User updated successfully!");
    navigate("/userlist");   // redirect to list page
  };

  return (
     <div className="update-container">

      <div className="update-card">

        <h2>Update User</h2>
        <p>Edit user details below</p>

        <form onSubmit={handleUpdate}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={user.name}
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              value={user.mobile}
              name="mobile"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={user.city}
              name="city"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="btn-group">

            <button className="update-btn" type="submit">
              Update User
            </button>

            <button
              className="cancel-btn"
              type="button"
              onClick={() => navigate("/userlist")}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};
export default UpdateUsers;
