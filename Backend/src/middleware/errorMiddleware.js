// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
    // Determine the status code; default to 500 if not set
    const statusCode = res.statusCode ?? 500;

    // Set the response status code
    res.status(statusCode);

    console.error(err.stack);

    // Send the error message and stack trace as JSON response
    res.json({
        message: err.message,  // Error message
        // Include stack trace only if in development environment
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    });
};

// Export the errorHandler function for use in other files
module.exports = {
    errorHandler
};
