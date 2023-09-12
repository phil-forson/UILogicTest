"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required modules
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const db_1 = __importDefault(require("./config/db"));
const schema_1 = __importDefault(require("./schema"));
// Initialize dotenv
dotenv_1.default.config();
// Setting up port from environment variables or default to 8000
const port = Number(process.env.PORT) || 8000;
// Initializing the Express app
const app = (0, express_1.default)();
// Connecting to the database
(0, db_1.default)();
// Middleware to parse JSON payloads in incoming HTTP requests
app.use(express_1.default.json());
// Enabling CORS for all routes
app.use((0, cors_1.default)());
// Setting up the GraphQL endpoint with schema and enabling GraphiQL interface
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: true,
}));
// Using custom error handling middleware
app.use(errorMiddleware_1.errorHandler);
// Starting the server and listening on the specified port
app.listen(port, () => console.log(colors_1.default.cyan(`Server started on ${port}`)));
