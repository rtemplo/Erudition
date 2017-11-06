const router = require("express").Router();
const dbRoutes = require("./dbData.js");

// Book routes
router.use("/users", dbRoutes);

module.exports = router;
