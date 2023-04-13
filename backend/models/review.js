const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    
    employeeName: String,
    employeeId: String,
    emailId: String,
    systemNo: String,
    systemType: String,
    unitNo: String,
    floorNo: String,
    teamName: String,
    teamManager: String,
    priority: String,
    issueDate: String,
    description: String,
  });
  const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
