const mongoose = require('mongoose');
const reviewtwoSchema = new mongoose.Schema({
    
    employeeNameTwo: String,
    employeeIdTwo: String,
    emailIdTwo: String,
    systemNoTwo: String,
    systemTypeTwo: String,
    unitNoTwo: String,
    floorNoTwo: String,
    teamNameTwo: String,
    teamManagerTwo: String,
    priorityTwo: String,
    issueDateTwo: String,
    descriptionTwo: String,
  });
  const ReviewTwo = mongoose.model('Reviewtwo', reviewtwoSchema);

module.exports = ReviewTwo;
