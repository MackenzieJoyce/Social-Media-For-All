const { User, Reaction, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get user by id
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-_v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Oops! No one here.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a user by ID
  updateUserById(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Oops! No one here.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user by ID
  deleteUserById(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Oops! No one here. ' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'Goodbye, User!' }))
      .catch((err) => res.status(500).json(err));
  }
};
