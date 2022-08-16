const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: { 
            type: String, 
            required: true, 
            unique: true,
            match: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            // Regex = numbers, lowercase letters, special chars + @ + numbers and lowercase letters + . + lowercase letters with the length of this component being between 2 and 6 characters. 
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [ 
            {
                type: Schema.Types.ObjectId, 
                ref: 'User'
            }
        ]
    },
    {
        // Use .toJSON() as a call for JSON.stringify() 
        toJSON: { 
            virtuals: true, 
        },
        id: false,
    }
);

// set up vitual for friendCount
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length
    });

// Initialize User model 
const User = model('user', userSchema); 

// Export model 
module.exports = User; 