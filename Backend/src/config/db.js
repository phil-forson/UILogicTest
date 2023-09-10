// Importing the mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Asynchronous function to connect to MongoDB
const connectTODB = async () => {
    try {
        // Attempt to establish a connection to MongoDB
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Log success message if connected
        console.log("MongoDB Connected: ", `${conn.connection.host}`.blue.underline);
    }
    catch(error) {
        // Log the error if connection fails
        console.log(error);

        // Exit the process with failure code
        process.exit(1);
    }
};

// Export the connectTODB function for use in other files
module.exports = connectTODB;
