import { useState } from 'react'
//import { FaUsers } from "react-icons/fa"
//import { FaPhone } from 'react-icons/fa6'
//import { MdEmail, MdLocationCity } from 'react-icons/md'
//import { TbPasswordMobilePhone } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import "../CSS/Registration.css";

import { addUser } from '../service/api'

const Registration = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    password: "",
     selectedRole:"ROLE_USER"
    
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

const handleAdd = async (e) => {
  e.preventDefault();

  // Selected Role नुसार Role ID ठरवा
  const roleId =
    user.selectedRole === "ROLE_ADMIN"
      ? 1
      : user.selectedRole === "ROLE_USER"
      ? 2
      : 3;

  const payload = {
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    city: user.city,
    password: user.password,

    role: [
      {
        id: roleId,
        name: user.selectedRole
      }
    ]
  };

  console.log(payload);

  try {
    const res = await addUser(payload);
    console.log(res.data);
    alert("Registration Successful");
    navigate("/");
  } catch (err) {
    console.log(err.response?.data);
  }
};
  return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleAdd}>
      <h2>Registration Here!</h2>

      <input type="text" name="name" placeholder="Enter name" onChange={handleChange} required />

      <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />

      <input type="tel" name="mobile" placeholder="Enter phone" onChange={handleChange} required />

      <input type="text" name="city" placeholder="Enter city" onChange={handleChange} required />

      <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required />

      <select name="selectedRole" onChange={handleChange} value={user.selectedRole}>
        <option value="ROLE_USER">User</option>
        <option value="ROLE_CUSTOMER">Customer</option>
        <option value="ROLE_ADMIN">Admin</option>
      </select>

      <button type="submit">
    Register
</button>



    </form>
  </div>
  );
};

export default Registration;
