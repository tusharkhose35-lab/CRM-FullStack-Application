import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CustomerList.css";
import { getAllCustomers,deleteUserById } from '../service/api';

const CustomerList = () => {
    const[customer, setCustomer]=useState([]);
    useEffect(()=>{
   fetchCustomer();
    },[])
 const navigate = useNavigate()
    const fetchCustomer=()=>{
        getAllCustomers()
    .then(res => setCustomer(res.data))
    }

     const handledelete=(id)=>{
       deleteUserById(id) ;
         console.log("User deleted");
         fetchCustomer();
     }
  return (
    
    <div className="customer-page">

    <div className="customer-card">

      <h2 className="customer-title">
        Customer Management
      </h2>

      <table className="customer-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customer.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.city}</td>

              <td>
                <div className="action-btn">
                  <button
                    className="update-btn"
                    onClick={() => navigate(`/update/${item.id}`)}
                  >
                    Update
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handledelete(item.id)}
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
}
export default CustomerList
