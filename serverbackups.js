const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const sql = require("mssql");
const config = require("./config/config.js");
//const passport = require("./config/passport");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(passport.initialize());
// app.use(passport.session());

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

app.use(session({ secret: "XASDASDA", resave:true, saveUninitialized:true }));

//app.use(express.static("public"));
//require("./routes/testRoute.js")(app);

app.use(routes);

sql.connect(config, function (err) {
    console.log(err);
});

// (async () => {
//     try {
//         console.log("DB Connecting ...##########################################");
//         sql.close();
//         //let pool = await sql.connect(config)
//         //let result = await pool.request().query("select * from UE_Accounts where userID = 1000");

//         const connection = await sql.connect(config);

//         orm = {
//             exec: async (strSQL) => {
//                 return await connection.request().query(strSQL);
//             }   
//         };

//         const username = 'ray.ds'
//         const password = 'password'

//         var result = await orm.exec(`Select Username, [Password], Email, userID from UE_Accounts where Username = '${username}' and [Password] = ${password}`);
//         //var result = await orm.exec("Update UE_Accounts Set Email = 'rtemplo@gmail.com' where userID = 1000"); //rowsAffected[]
//         //var result = await orm.exec("Exec dbo.UE_CreateUser 1, 'ray.ds', 'password', 'Ray', 'Templo', 'rtemplo@gmail.com', '''Trilogy Ed Svcs'', ''Software Development'', ''Senior Developer'', ''10/21/2000'''"); //recordset[] if you have a select statement
//         //var result = await orm.exec("Delete from UE_Accounts;DBCC CHECKIDENT ('UE_Accounts', RESEED, 999); "); //rowsAffected
//         //var result = await orm.exec("ALTER TABLE UE_AccountsExt ADD testCol varchar(50)");// returns an empty response object "res" in this case
//         //var result = await orm.exec("ALTER TABLE UE_AccountsExt DROP COLUMN testCol");
//         //var result = await orm.exec("Select * from UE_Entities; Select * from UE_Accounts");
//         //var result = await orm.exec("EXEC GetAccountData 1, 3");

//         console.log(result);
//         console.log("DB CONNECTED! #############################");
//     } catch (err) {
//         // ... error checks
//         console.log("DB Connection Error ############################################# START");
//         console.log(err);
//         console.log("DB Connection Error ############################################# ^END");
//     }
// })();

 app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
 });
  
