const { Thought, User } = require('../models');

module.exports = {
  //-----THOUGHTS
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought by id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
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
      .then((thought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((response) =>
        !response
          ? res
              .status(404)
              .json({ message: 'Thoughts but no user' })
          : res.json(response)
      )
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
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Oops! No thoughts.' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought by ID
  deleteThoughtById(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then(() =>
        User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Oops! No thoughts.' })
          : User.deleteMany({ _id: { $in: thought.username } })
      )
      .then(() => res.json({ message: 'No more thoughts!' }))
      .catch((err) => res.status(500).json(err));
  },

  //-----REACTIONS
  // Create a reaction
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Oops! No thoughts. ' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete reaction by ID
  deleteReactionById(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        thought
          ? res.status(404).json({ message: 'Oops! No thoughts. ' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  }
};
