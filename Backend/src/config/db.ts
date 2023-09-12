import mongoose from 'mongoose';
import colors from 'colors';

// Asynchronous function to connect to MongoDB
const connectToDB = async (): Promise<void> => {
    try {
        // Attempt to establish a connection to MongoDB
        const conn = await mongoose.connect(process.env.MONGO_URI as string);


        // Log success message if connected
        if (conn && conn.connection && conn.connection.host) {
            console.log(colors.blue.underline("MongoDB Connected: ".concat(conn.connection.host)));
          } else {
            console.log("MongoDB connection details are undefined.");
          }
          
    } catch (error) {
        // Log the error if connection fails
        console.error(error);

        // Exit the process with failure code
        process.exit(1);
    }
};

// Export the connectToDB function for use in other files
export default connectToDB;
