const orm = require("../config/orm.js");

const Account = {
    findAll: function (req, res) {
        orm.exec("Select * from UE_Accounts", function (result) {
            res.json(result);
        });
    }
};

module.exports = Account;