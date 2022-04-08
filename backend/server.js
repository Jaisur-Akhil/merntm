/** @format */
const colors = require('colors');
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

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

//google - akhiljaisur98
mongodb.com - compass download 
sign in > create an organisation > name + mongodb atlas 
Create a project > name > build a database > shared aws > server > clustername
username akhil
pasword 12345

add my currect ip address - finish and close 

load databse page > browse collection > add my own data > name it 
db name - Mern 
collection name - goal 

overview - connect - compass - link paste that link to your compass

compass - databases - Mern -  collection : documents (view and edit and create new user)
*/
