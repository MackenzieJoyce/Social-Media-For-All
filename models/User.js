const { Schema } = require('mongoose');

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
        // use virutals for friendCount 
    }
);

// set up vitual for friendCount

// set up model

// export model 