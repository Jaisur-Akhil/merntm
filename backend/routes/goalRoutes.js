/** @format */

const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoals,
  putGoals,
  delGoals,
} = require('../controller/goalController');

//1
router.get('/', getGoals);

router.post('/', setGoals);

router.put('/:id', putGoals);

router.delete('/:id', delGoals);
//2

module.exports = router;

/* 2 
we can do this way also . 
router.router('/').get(getGoals).post(setGoals);
router.router('/:id').put(putGoals).delete(delGoals);
*/

/*
1.
app to router as variable name has changed
path is being modified - /api/goals


router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Message from controller' });
});
*/
