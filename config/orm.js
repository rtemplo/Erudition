const connection = require("./connection.js");

orm = {
    exec: async (strSQL) => {
        return await connection.request().query(strSQL);
    }   
};

module.exports = orm;