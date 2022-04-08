/** @format */

const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get Message from controller' });
};

const setGoals = (req, res) => {
  res.status(200).json({ Message: 'Set Goal' });
};

const putGoals = (req, res) => {
  res.status(200).json({ message: `update individual goal ${req.params.id}` });
};

const delGoals = (req, res) => {
  res.status(200).json({ message: `Delete individual goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  putGoals,
  delGoals,
};
