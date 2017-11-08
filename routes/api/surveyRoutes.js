const router = require("express").Router();
const Survey = require("../../models/surveyData.js");

// Matches with "/api/User"
router.route("/")
  .get(Survey.findAll)
  .post(Survey.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(Survey.findById)
  .put(Survey.update)
  .delete(Survey.remove);

module.exports = router;
