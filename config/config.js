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

module.exports = config;
