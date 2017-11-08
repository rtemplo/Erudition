const router = require("express").Router();
const Distribution = require("../../models/distributionData.js");


// Matches with "/api/User"
router.route("/")
  .get(Distribution.findAll)
  .post(Distribution.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(Distribution.findById)
  .put(Distribution.update)
  .delete(Distribution.remove);

module.exports = router;
