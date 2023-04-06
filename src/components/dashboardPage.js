import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./navbarPage"
function Table() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/api/reviews/:id')
            .then(res => setFormData(res.data))
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
                            </tr>
                        </thead>
                        <tbody>
                            {formData &&
                                formData.map(item => (
                                    <tr className="" rowspan="" key={item.id}>
                                        <td colspan="">{item.employeeName}</td>
                                        <td colspan="">{item.employeeId}</td>
                                        <td colspan="">{item.emailId}</td>
                                        <td colspan="">{item.systemType}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default Table;
