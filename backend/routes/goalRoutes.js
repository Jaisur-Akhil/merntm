/** @format */

const express = require('express');
const router = express.Router();

//app to router as variable name has changed
// path is being modified - /api/goals

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Message' });
});

router.post('/', (req, res) => {
  res.status(200).json({ Message: 'Set Goal' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `update individual goal ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete individual goal ${req.params.id}` });
});

module.exports = router;
