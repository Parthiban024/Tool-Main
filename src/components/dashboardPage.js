import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./navbarPage"
import Swal from "sweetalert2";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
function Table() {
    const [review, setReviews] = useState([]);


    const navigate = useNavigate();


  // const LoadDetails = (id) => {
  //   navigate("/employee/details/:empid" + id);
  // }
  // const LoadEdit = (id) => {
  //   navigate("/employee/edit/" + id);
  // }
  // const Removefunction = (id) => {
  //   if (window.confirm('Do you want to remote')) {
  //     fetch("http://localhost:8001/api/reviews/:id" + id, {
  //       method: "DELETE",
  //     }).then((res) => {
  //       Swal.fire(
  //         'Employee Removed Successfully!',
  //         'You clicked the button!',
  //         'success'
  //       )
  //       window.location.reload();
  //     }).catch((err) => {
  //       console.log(err.message)
  //     })

  //   }
  //   navigate();
  // }


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/api/reviews/${id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      console.log(data);
      // update the reviews state by removing the deleted review
      setReviews(review.filter((review) => review.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  
    useEffect(() => {
        axios.get('http://localhost:8001/api/reviews/:id')
            .then(res => setReviews(res.data))
            .catch(err => console.log(err));
    }, []);


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
                            <tr rowspan="">
                                <th colspan="">Employee Name</th>
                                <th colspan="">Employee ID</th>
                                <th colspan="">Email</th>
                                <th colspan="">System No</th>
                                <th colspan="6" className="text-center">Icons</th>
                            </tr>
                        </thead>
                        <tbody>
    {review.map((review) => (
      <tr key={review.id}>
        <td>{review.employeeName}</td>
        <td>{review.employeeId}</td>
        <td>{review.emailId}</td>
        <td>{review.systemType}</td>
        <td>{review.unitNo}</td>
        <td>{review.floorNo}</td>
        <td>{review.teamName}</td>
        <td>{review.teamManager}</td>
        <td>{review.priority}</td>
        <td>{review.issueDate}</td>
        <td>{review.description}</td>
        <td>
          <button onClick={() => handleDelete(review.id)}>Delete</button>
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
