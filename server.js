const PORT = process.env.PORT || 3001;

const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const sql = require("mssql");
const config = require("./config/config.js");
//const passport = require("./config/passport");

const app = express();
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: "XASDASDA", resave:true, saveUninitialized:true }));

// Serve up static assets
app.use(express.static("client/build"));

//const routes = require("./routes")(app); //not sure if we need to pass the context of app here, will req res carry the session this way?
const routes = require("./routes");

app.use(routes);

sql.connect(config, function (err) {
    if (err) console.log(err);
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
  
