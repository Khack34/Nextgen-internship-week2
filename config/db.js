const mongoose = require('mongoose');
require('dotenv').config();   For loading environment variables

const connectDB = async () = {
    try {
         Use environment variable for DB URI
        await mongoose.connect(process.env.MONGODB_URI  'mongodb127.0.0.127017internship', {
            useNewUrlParser true,
            useUnifiedTopology true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error', error.message);
        process.exit(1);   Exit if connection fails
    }
};

 Graceful shutdown on termination
process.on('SIGINT', async () = {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

module.exports = connectDB;
