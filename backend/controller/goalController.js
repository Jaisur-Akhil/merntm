/** @format */
const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Message from controller' });
});

const setGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.brain) {
    res.status(400);
    throw new Error('Please add brain as key '); // error handler gives an html page
    // res.status(400).json({ message: 'please text not brain' });
  }
  res.status(200).json({ Message: 'Set Goal' });
});

const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update individual goal ${req.params.id}` });
});

const delGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete individual goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  putGoals,
  delGoals,
};

// ; to use body we need to add some middleware
// req.body - post - body - x-www-form-urlencoded
//async because it will return a promise when attached to mongodb
// usually we use try catch block but here we are using npm package  - npm i express-async-handler
//express-async-handler wrap controllers in it
