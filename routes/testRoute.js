const path = require("path");
const Account = require("../models/accountData.js");

module.exports = function(app) {
    app.get("/", function (req, res) {
        //res.send("../client/public/login.html");
        res.sendFile(path.join(__dirname, "../client/public/login.html"));
    });

    app.post("/login", Account.exists);

    app.get("/sessiontest", function (req, res) {
        console.log("USERID#####################");
        console.log(req.session.userID);
        res.end();
    });
};