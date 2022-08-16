const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought by id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-_v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Oops! No thoughts.' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update thought by ID
  updateThoughtById(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !thought
          ? res.status(404).json({ message: 'Oops! No thoughts.' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought by ID
  deleteThoughtById(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Oops! No thoughts.' })
          : User.deleteMany({ _id: { $in: thought.username } })
      )
      .then(() => res.json({ message: 'No more thoughts!' }))
      .catch((err) => res.status(500).json(err));
  }
};
