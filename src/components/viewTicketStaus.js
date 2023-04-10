import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function ViewUserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8001/api/reviews/${id}`)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Name:</strong> {userData.employeeName}</p>
      <p><strong>ID:</strong> {userData.employeeId}</p>
      <p><strong>Email:</strong> {userData.emailId}</p>
      <p><strong>System Type:</strong> {userData.systemType}</p>
      <p><strong>Unit No:</strong> {userData.unitNo}</p>
      <p><strong>Floor No:</strong> {userData.floorNo}</p>
      <p><strong>Team Name:</strong> {userData.teamName}</p>
      <p><strong>Team Manager:</strong> {userData.teamManager}</p>
      <p><strong>Priority:</strong> {userData.priority}</p>
      <p><strong>Issue Date:</strong> {userData.issueDate}</p>
      <p><strong>Description:</strong> {userData.description}</p>
    </div>
  );
}

export default ViewUserPage;