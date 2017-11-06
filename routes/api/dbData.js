const router = require("express").Router();
const apiController = require("../../controllers/accountsContoller.js");

// Matches with "/api/books"
router.route("/")
  .get(apiController.findAll)
  .post(apiController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(apiController.findById)
  .put(apiController.update)
  .delete(apiController.remove);

module.exports = router;
