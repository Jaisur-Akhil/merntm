/** @format */

const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routing
app.use('/api/goals', require('./routes/goalRoutes'));

//Server
app.listen(port, () => console.log(`Server started at ${port}`));

// git commit -m 'Initial commit'

/*
app.get('/api/goals', (req, res) => {
  res.send('Get Goals'); // Nomal
  res.json({ message: 'get Goals' }); // Json format
  res.json({ message: 'get Goals' }); // Json format
  res.status(200).json({ message: 'get Goals' }); // Json format
});
*/
