// bring in mongoose

const { Schema } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        ...
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
    },
    {
        // use virutals for friendCount 
    }
);

// set up vitual for friendCount

// set up model

// export model 