const router = require("express").Router();
const Account = require("../../models/accountData.js");

// Matches with "/api/account"
router.route("/")
  .get(Account.findAll)
  .post(Account.create);

// Matches with "/api/account/:id"
router
  .route("/:id")
  .get(Account.findById)
  .put(Account.update)
  .delete(Account.remove);

module.exports = router;
55