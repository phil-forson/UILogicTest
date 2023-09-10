// @desc Get Campaigns
// @route GET /campaigns
// @access private
const getCampaigns = (req, res) => {
  res.status(200).json({ message: "api working please" });
};

// @desc Create Campaigns
// @route POST /campaigns
// @access private
const createCampaign = (req, res) => {
    if(!req.body.json){
        res.status(400)
        throw new Error('Please provide request body');
    }

    res.status(200).json({ message: "create api" });
};

module.exports = {
  getCampaigns,
  createCampaign,
};
