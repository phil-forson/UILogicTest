const express = require("express");
const router = express.Router();
const {
  getCampaigns,
  createCampaign,
} = require("../controllers/campaignController");

router.get("/", getCampaigns);

router.post("/create", createCampaign);

module.exports = router;
