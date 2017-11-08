const router = require("express").Router();
const accountRoutes = require("./accountRoutes.js");
const surveyRoutes = require("./surveyRoutes.js");
const dsitributionRoutes = require("./distributionRoutes.js");

// Book routes
router.use("/account", accountRoutes);
router.use("/survey", surveyRoutes);
router.use("/distribution", dsitributionRoutes);

module.exports = router;
