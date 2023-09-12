// Importing required modules
import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { errorHandler }  from './middleware/errorMiddleware';
import connectTODB from './config/db';
import schema from './schema';

// Initialize dotenv
dotenv.config();

// Setting up port from environment variables or default to 8000
const port: number = Number(process.env.PORT) || 8000;

// Initializing the Express app
const app: Application = express();

// Connecting to the database
connectTODB();

// Middleware to parse JSON payloads in incoming HTTP requests
app.use(express.json());

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
app.listen(port, () => console.log(colors.cyan(`Server started on ${port}`)));
