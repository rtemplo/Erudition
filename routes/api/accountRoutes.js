const router = require("express").Router();
const Account = require("../../models/accountData.js");

// /api/account/auth
router.route("/auth")
  .get(Account.isAuthenticated);

// Matches with "/api/account/getdashdata/:sortingcolumn"
router.route("/getaccounts/:sortcol")
  .get(Account.getaccounts);

// Matches with "/api/account/getprofileU/:id"
router.route("/getprofileU/:id")
  .get(Account.getprofileU);

router.route("/getprofileM/:id")
  .get(Account.getprofileM);

router.route("/getuserinfo")
  .get(Account.getuserinfo);

// get the data structure for user account fields
router.route("/getconfig")
  .get(Account.getconfig);

// Matches with "/api/account/:id"
router.route("/:id")
  .post(Account.create)
  .put(Account.update)
  .delete(Account.delete);

module.exports = router;