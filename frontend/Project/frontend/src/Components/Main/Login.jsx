import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../service/api";
import "../CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // CALL the API function properly
      const res = await getAllUsers();

      const allUsers = res.data;   // this IS the array

      // find matching user
      const foundUser = allUsers.find(
        (u) => u.email === user.email && u.password === user.password
      );


      if (!foundUser) {
        alert("Invalid Email or Password!");
        return;
      }
 console.log(foundUser);
console.log(foundUser.role);
console.log(foundUser.role[0].name);
 
      alert("Login Successful!");

      // redirect based on actual stored role
      const role = foundUser.role?.[0]?.name;

if (role === "ROLE_ADMIN") {
  alert("Admin Login");
    navigate("/admindash");
}
else if (role === "ROLE_USER") {
    navigate("/udashboard");
}
else if (role === "ROLE_CUSTOMER") {
    navigate("/customerdashboard");
}
else {
    alert("Role not found");
}
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
     <div className="login-container">
    <h2 className="login-title">Login Here</h2>
  


    <form onSubmit={handleLogin} className="login-form">
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
        required
        className="login-input"
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        required
        className="login-input"
      />

      <button type="submit" className="login-btn">
        Login
      </button>

      <div className="register-section">
        <p>
          Not registered?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="register-btn"
          >
            Register Here
          </button>
        </p>
      </div>
    </form>
  </div>
  );
};

export default Login;
