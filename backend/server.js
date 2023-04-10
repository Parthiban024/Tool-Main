const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
require('dotenv').config(); // load environment variables from .env file

const app = express();  

app.use(cors());
// setup body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MongoDB connected');
});





const reviewSchema = new mongoose.Schema({
    
    employeeName: String,
    employeeId: String,
    emailId: String,
    systemType: String,
    unitNo: String,
    floorNo: String,
    teamName: String,
    teamManager: String,
    priority: String,
    issueDate: String,
    description: String
  });
  const Review = mongoose.model('Review', reviewSchema);






// Add a new review
app.post('/api/reviews', (req, res) => {
  const { employeeName, employeeId, emailId, systemType, unitNo, floorNo, teamName, teamManager, priority, issueDate, description } = req.body;

  const newReview = new Review({
    employeeName, employeeId, emailId, systemType, unitNo, floorNo, teamName, teamManager, priority, issueDate, description
  });

  newReview.save()
    .then(review => {
      res.send(review);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error saving review');
    });

    // nodemailer function
   const transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'parthibaneee7548@gmail.com',
      pass: 'xnzrszhaawvpkcov'
    }
   })
   const mailOptions = {
    from: `${employeeName}`,
    to: 'kalaiyarasan@objectways.com',
    cc:'parthibaneee7548@gmail.com',
    subject: `New Ticket from ${req.body.employeeName}`,
    text: `Name: ${req.body.employeeName}\nEmail: ${req.body.emailId}\nMessage: ${req.body.description}`, // plain text body
    html: `<p>Name: ${req.body.employeeName}</p><p>Email: ${req.body.emailId}</p><p>Issue: ${req.body.systemType}</p><p>Message: ${req.body.description}</p>` // html body
   }
transpoter.sendMail(mailOptions, function(error, info){
  if(err){
    console.log(error);
  }else{
    res.redirect('/');
    console.log('email sent' + info.response)
  }

})

});

// Get all reviews
app.get('/api/reviews/:id', async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.send(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting reviews');
  }
});

// Delete a review
app.delete('/api/reviews/:id', (req, res) => {
  const id = req.params.id;

  Review.findByIdAndDelete(id)
    .then(review => {
      res.send(review);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error deleting review');
    });
});


// Update an existing review
app.put('/api/reviews/:id', (req, res) => {
  // const id = req.params.id;
  const { employeeName, employeeId, emailId, systemType, unitNo, floorNo, teamName, teamManager, priority, issueDate, description } = req.body;

  Review.findByIdAndUpdate({
    employeeName, employeeId, emailId, systemType, unitNo, floorNo, teamName, teamManager, priority, issueDate, description
  }, { new: true })
    .then(review => {
      res.send(review);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error updating review');
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});