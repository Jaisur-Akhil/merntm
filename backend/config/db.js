/** @format */

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.M_URI);
    console.log(`Mongo Db connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
      console.log(error)
      process.exit(1) // fail 1 
  }
};

module.exports= connectDB

//All mongoose methods are asynchronous
