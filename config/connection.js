var sql = require("mssql");

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
        const connection = await sql.connect(config);
        module.exports = connection;
        console.log("DB CONNECTED! #############################");
    } catch (err) {
        // ... error checks
        console.log("DB Connection Error ############################################# START");
        console.log(err);
        console.log("DB Connection Error ############################################# ^END");
    }
})();
