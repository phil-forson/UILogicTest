const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  targetGroup: String,
  status: String
});

module.exports = mongoose.model('Campaign', campaignSchema);
