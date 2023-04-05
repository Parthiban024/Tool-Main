import React, { useState } from 'react';
// import {  Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import axios from 'axios';
function EmployeeForm() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [emailId, setEmailId] = useState('');
  const [systemNo, setSystemNo] = useState('');
  const [systemType, setSystemType] = useState('');
  const [unitNo, setUnitNo] = useState('');
  const [floorNo, setFloorNo] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamManager, setTeamManager] = useState('');
  const [priority, setPriority] = useState('');
  const [issueDate, setIssueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const formData = {
      employeeName: employeeName,
      employeeId: employeeId,
      emailId: emailId,
      systemType: systemType,
      unitNo: unitNo,
      floorNo: floorNo,
      teamName: teamName,
      teamManager: teamManager,
      priority: priority,
      issueDate: issueDate
    };
    fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData)
      }).then((res) => {
       alert("data saved")
        
      }).catch((err) => {
        console.log(err.message)
      })  
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField label="Employee Name" value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} />
        <TextField label="Employee ID" value={employeeId} onChange={(event) => setEmployeeId(event.target.value)} />
        <TextField label="Email ID" value={emailId} onChange={(event) => setEmailId(event.target.value)} />
      </div>
      <div>
        <TextField label="System No" value={systemNo} onChange={(event) => setSystemNo(event.target.value)} />
        <FormControl>
          <InputLabel>System Type</InputLabel>
          <Select value={systemType} onChange={(event) => setSystemType(event.target.value)}>
            <MenuItem value="Hardware">Hardware</MenuItem>
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="System">System</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField label="Unit No" value={unitNo} onChange={(event) => setUnitNo(event.target.value)} />
        <TextField label="Floor No" value={floorNo} onChange={(event) => setFloorNo(event.target.value)} />
      </div>
      <div>
        <TextField label="Team Name" value={teamName} onChange={(event) => setTeamName(event.target.value)} />
        <TextField label="Team Manager" value={teamManager} onChange={(event) => setTeamManager(event.target.value)} />
        <FormControl>
          <InputLabel>Priority</InputLabel>
          <Select value={priority} onChange={(event) => setPriority(event.target.value)}>
            <MenuItem value="High Priority">High Priority</MenuItem>
            <MenuItem value="Low Priority">Low Priority</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Issue Date" value={issueDate} onChange={(event) => setIssueDate(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;