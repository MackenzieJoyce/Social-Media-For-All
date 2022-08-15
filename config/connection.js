const mongoose = require('mongoose'); 

// Wrapping Mongoose wround the local connection to MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/socialMediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 

// Export the connection 
module.exports = mongoose.connection; 