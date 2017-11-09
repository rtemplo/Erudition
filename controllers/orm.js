const sql = require("mssql");

orm = {
    exec: async (strSQL) => {
        const request = new sql.Request();
        return await request.query(strSQL);
    }   
};

module.exports = orm;