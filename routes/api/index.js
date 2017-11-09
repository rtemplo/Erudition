const router = require("express").Router();
const loginRoute = require("./login.js");
const accountRoutes = require("./accountRoutes.js");
//const surveyRoutes = require("./surveyRoutes.js");
//const dsitributionRoutes = require("./distributionRoutes.js");

// All Routes within /api
router.use("/login", loginRoute);
router.use("/account", accountRoutes);
//router.use("/survey", surveyRoutes);
//router.use("/distribution", dsitributionRoutes);

module.exports = router;
