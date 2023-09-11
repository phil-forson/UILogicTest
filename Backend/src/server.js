// Importing required modules
const express = require('express');  // Express for creating the web server
const dotenv = require('dotenv').config();  // Dotenv for environment variables
const morgan = require('morgan');
const colors = require('colors');  // Colors for console output styling (not used in this snippet)
const cors = require('cors');  // CORS for handling cross-origin requests
const { graphqlHTTP } = require('express-graphql');  // Middleware for handling GraphQL HTTP requests

// Importing custom middleware and utility functions
const { errorHandler } = require('./middleware/errorMiddleware');  // Custom error handling middleware
const connectTODB = require('./config/db');  // Function to connect to the database
const schema = require('./schema');  // GraphQL schema

// Setting up port from environment variables or default to 8000
const port = process.env.PORT || 8000;

// Initializing the Express app
const app = express();

// Connecting to the database
connectTODB();

// Middleware to parse JSON payloads in incoming HTTP requests
app.use(express.json());

app.use(morgan('combined'));


// Enabling CORS for all routes
app.use(cors());

// Setting up the GraphQL endpoint with schema and enabling GraphiQL interface
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

// Using custom error handling middleware
app.use(errorHandler);

// Starting the server and listening on the specified port
app.listen(port, () => console.log(`Server started on ${port}`));
