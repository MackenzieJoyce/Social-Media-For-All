const { Schema } = require('mongoose'); 

// Schema to create Reaction model 
const reactionSchema = new Schema(
    {
        reactionId: {
            Id: mongoose.ObjectIds,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            timestamp: true,
            // get method to format the timestamp 
            get: (timestamp) => dateFormat(timestamp),
        },
    }
); 

// Export model 
module.exports = reactionSchema; 