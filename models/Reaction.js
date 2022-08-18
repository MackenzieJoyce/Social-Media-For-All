const { Schema, Types } = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const date = require('../utils/date');

// Schema to create Reaction model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    timestamp: true,
    // get method to format the timestamp
    get: (timestamp) => date(timestamp)
  }
});

// Export model
module.exports = reactionSchema;
