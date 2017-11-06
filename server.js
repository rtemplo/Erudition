const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("mssql");
//const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

//app.use(routes);

const config = {
    user: 'dsadmin',
    password: 'AZjump42!',
    server: 'darkroom.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'Erudition',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};

(async () => {
    try {
        console.log("DB Connecting ...##########################################");
        //let pool = await sql.connect(config)
        //let result = await pool.request().query("select * from UE_Accounts where userID = 1000");

        const connection = await sql.connect(config);

        orm = {
            exec: async (strSQL) => {
                return await connection.request().query(strSQL);
            }   
        };

        //var result = orm.exec("Update UE_Accounts Set Email = 'rtemplo@gmail.com' where userID = 1000"); //rowsAffected[]
        //var result = orm.exec("Exec dbo.UE_CreateUser 1, 'ray.ds', 'password', 'Ray', 'Templo', 'rtemplo@gmail.com', '''Trilogy Ed Svcs'', ''Software Development'', ''Senior Developer'', ''10/21/2000'''"); //recordset[] if you have a select statement
        //var result = orm.exec("Delete from UE_Accounts;DBCC CHECKIDENT ('UE_Accounts', RESEED, 999); "); //rowsAffected
        //var result = orm.exec("ALTER TABLE UE_AccountsExt ADD testCol varchar(50)");// returns an empty response object "res" in this case
        var result = orm.exec("ALTER TABLE UE_AccountsExt DROP COLUMN testCol");
        result.then((res) => {
            console.log(res)
        });
        console.log("DB CONNECTED! #############################");
    } catch (err) {
        // ... error checks
        console.log("DB Connection Error ############################################# START");
        console.log(err);
        console.log("DB Connection Error ############################################# ^END");
    }
})();




// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });
  
