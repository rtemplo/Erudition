const router = require("express").Router();
const Account = require("../../models/accountData.js");

// /api/login
router.route("/")
.post(Account.exists);

module.exports = router;