// Importing the mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Defining the schema for the Campaign model
const campaignSchema = new mongoose.Schema({
  title: String,        // Title of the campaign
  description: String,  // Description of the campaign
  targetGroup: String,  // Target group for the campaign
  status: String        // Status of the campaign (e.g., Active, Inactive)
});

// Exporting the Campaign model based on the defined schema
module.exports = mongoose.model('Campaign', campaignSchema);
