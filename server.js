const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const router = require('../backend/routes');
// const path = require('path')
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


// Routes
app.use('/api', router);

// Add a new review
app.post('/api/reviews', (req, res) => {
  const { employeeName, employeeId, emailId, systemNo, systemType, unitNo, floorNo, teamName, teamManager, priority, issueDate, description } = req.body;

  const newReview = new Review({
    employeeName, employeeId, emailId, systemNo, systemType, unitNo, floorNo, teamName, teamManager, priority, issueDate, description
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
    to: 'balamuruganveerappan@objectways.com',
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

// Add a new review
app.post('/api/timechamp', (req, res) => {
  const { employeeNameTwo, employeeIdTwo, emailIdTwo, systemNoTwo, systemTypeTwo, unitNoTwo, floorNoTwo, teamNameTwo, teamManagerTwo, priorityTwo, issueDateTwo, descriptionTwo } = req.body;

  const newReviewTwo = new ReviewTwo({
    employeeNameTwo, employeeIdTwo, emailIdTwo, systemNoTwo, systemTypeTwo, unitNoTwo, floorNoTwo, teamNameTwo, teamManagerTwo, priorityTwo, issueDateTwo, descriptionTwo
  });

  newReviewTwo.save()
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
    from: `${employeeNameTwo}`,
    to: 'balamuruganveerappan@objectways.com',
    cc:'parthibaneee7548@gmail.com',
    subject: `New Ticket from ${req.body.employeeNameTwo}`,
    text: `Name: ${req.body.employeeNameTwo}\nEmail: ${req.body.emailIdTwo}\nMessage: ${req.body.descriptionTwo}`, // plain text body
    html: `<p>Name: ${req.body.employeeNameTwo}</p><p>Email: ${req.body.emailIdTwo}</p><p>Issue: ${req.body.systemTypeTwo}</p><p>Message: ${req.body.descriptionTwo}</p>` // html body
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

// Add a new review
app.post('/api/hrreview', (req, res) => {
  const { employeeNameThree, employeeIdThree, emailIdThree, systemNoThree, systemTypeThree, unitNoThree, floorNoThree, teamNameThree, teamManagerThree, priorityThree, issueDateThree, descriptionThree } = req.body;

  const newReviewThree = new ReviewThree({
    employeeNameThree, employeeIdThree, emailIdThree, systemNoThree, systemTypeThree, unitNoThree, floorNoThree, teamNameThree, teamManagerThree, priorityThree, issueDateThree, descriptionThree
  });

  newReviewThree.save()
    .then(reviewthree => {
      res.send(reviewthree);
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
    from: `${employeeNameThree}`,
    to: 'balamuruganveerappan@objectways.com',
    cc:'parthibaneee7548@gmail.com',
    subject: `New Ticket from ${req.body.employeeNameThree}`,
    text: `Name: ${req.body.employeeNameThree}\nEmail: ${req.body.emailIdThree}\nMessage: ${req.body.descriptionThree}`, // plain text body
    html: `<p>Name: ${req.body.employeeNameThree}</p><p>Email: ${req.body.emailIdThree}</p><p>Issue: ${req.body.systemTypeThree}</p><p>Message: ${req.body.descriptionTwo}</p>` // html body
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
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.send(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting reviews');
  }
});

// Get all reviews
app.get('/api/timechamp', async (req, res) => {
  try {
    const reviewstwo = await ReviewTwo.find({});
    res.send(reviewstwo);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting reviews');
  }
});

// Get all reviews
app.get('/api/hrreview', async (req, res) => {
  try {
    const reviewsthree = await ReviewThree.find({});
    res.send(reviewsthree);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting reviews');
  }
});

// Delete a review
app.delete('/api/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      res.status(404).send('Review not found');
    } else {
      res.send(review);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting review');
  }
});

// Delete a review
app.delete('/api/timechamp/:id', async (req, res) => {
  try {
    const reviewtwo = await ReviewTwo.findByIdAndDelete(req.params.id);
    if (!reviewtwo) {
      res.status(404).send('Review not found');
    } else {
      res.send(reviewtwo);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting review');
  }
});

// Delete a review
app.delete('/api/hrreview/:id', async (req, res) => {
  try {
    const reviewthree = await ReviewThree.findByIdAndDelete(req.params.id);
    if (!reviewthree) {
      res.status(404).send('Review not found');
    } else {
      res.send(reviewthree);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting review');
  }
});


// IT Admin Dashboard
// define API routes
app.post('/api/accept', (req, res) => {
  // update the ticket status to "accepted"
  const ticket = req.body;
  ticket.status = 'accepted';

  // TODO: update the ticket status in the database

  // return success response
  res.status(200).send('Ticket accepted successfully');
});

app.post('/api/resolve', (req, res) => {
  // update the ticket status to "resolved"
  const ticket = req.body;
  ticket.status = 'resolved';

  // TODO: update the ticket status in the database

  // return success response
  res.status(200).send('Ticket resolved successfully');
});

app.post('/api/send-email', (req, res) => {
  // send email to user using nodemailer
  const emailData = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'parthibaneee7548@gmail.com',
      
      pass: 'xnzrszhaawvpkcov'
    }
  });

  const mailOptions = {
    from: 'parthibaneee7548@gmail.com', // replace with your Gmail address
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('There was an error sending the email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


// Hr dashboard
// define API routes
app.post('/api/accepthr', (req, res) => {
  // update the ticket status to "accepted"
  const ticket = req.body;
  ticket.status = 'accepted';

  // TODO: update the ticket status in the database

  // return success response
  res.status(200).send('Ticket accepted successfully');
});

app.post('/api/resolvehr', (req, res) => {
  // update the ticket status to "resolved"
  const ticket = req.body;
  ticket.status = 'resolved';

  // TODO: update the ticket status in the database

  // return success response
  res.status(200).send('Ticket resolved successfully');
});

app.post('/api/send-emailhr', (req, res) => {
  // send email to user using nodemailer
  const emailData = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'parthibaneee7548@gmail.com',
      
      pass: 'xnzrszhaawvpkcov'
    }
  });

  const mailOptions = {
    from: 'parthibaneee7548@gmail.com', // replace with your Gmail address
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('There was an error sending the email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Timechamp Dashboard
// define API routes
app.post('/api/accepttc', (req, res) => {
  // update the ticket status to "accepted"
  const ticket = req.body;
  ticket.status = 'accepted';

  // TODO: update the ticket status in the database

  // return success response
  res.status(200).send('Ticket accepted successfully');
});

app.post('/api/resolvetc', (req, res) => {
  // update the ticket status to "resolved"
  const ticket = req.body;
  ticket.status = 'resolved';

  // TODO: update the ticket status in the database

  // return success response
  res.status(200).send('Ticket resolved successfully');
});

app.post('/api/send-emailtc', (req, res) => {
  // send email to user using nodemailer
  const emailData = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'parthibaneee7548@gmail.com',
      
      pass: 'xnzrszhaawvpkcov'
    }
  });

  const mailOptions = {
    from: 'parthibaneee7548@gmail.com', // replace with your Gmail address
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('There was an error sending the email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


// // static files
// app.use(express.static(path.join(__dirname, './client/build')))

// app.get('*', function(req,res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html'))
// })

// port
const port = process.env.PORT || 8001

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});