const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const date = require('../utils/date');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter to format the timestamp on query
      get: (timestamp) => date(timestamp)
    },
    // User that created the thought
    username: {
      type: String,
      required: true,
      ref: 'User',
    },
    // Similar to a reply
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

// Set up virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

// Export model
module.exports = Thought;
