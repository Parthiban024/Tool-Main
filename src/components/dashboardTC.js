import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./navbarPage"
import Swal from "sweetalert2";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
function Table() {
  const [review, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/api/timechamp').then((response) => {
      setReviews(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8001/api/timechamp/${id}`).then(() => {
      // remove the deleted review from the local state
      const updatedReviews = review.filter((r) => r._id !== id);
      setReviews(updatedReviews);
      // show a success message
      Swal.fire({
        title: 'Success',
        text: 'The review has been deleted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }).catch(() => {
      // show an error message
      Swal.fire({
        title: 'Error',
        text: 'There was an error deleting the review.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };


  return (
    <div>
      <Navbar />
      <div className='sec_two d-flex justify-content-center align-items-center'>
        <h1>ADMIN PANEL</h1>
      </div>
      <div className='hm_sec_3'>
        <div className='container  d-flex justify-content-center '>
          <table className="table table-hover tablePage">
            <thead className="thead_bg">
              <tr>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Email</th>
                <th>System No</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {review.map((r) => (
                <tr key={r._id}>
                  <td>{r.employeeNameTwo}</td>
                  <td>{r.employeeIdTwo}</td>
                  <td>{r.emailIdTwo}</td>
                  <td>{r.systemTypeTwo}</td>
                  <td>
                    <Link to={`/edit/${r._id}`}>
                      <i className="fa fa-edit"></i>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(r._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}



export default Table;
