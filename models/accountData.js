const orm = require("../controllers/orm.js");

let ssn; //session

function formAddSQLCommand(formData) {
    let sqlStatements = '';
    return sqlStatements;
}

function formUpdateSQLCommand(formData) {
    let sqlStatements = '';
    return sqlStatements;
}

const Account = {
    exists:  async (req, res) => {
        const username = req.body.Username;
        const password = req.body.Password;

        var result = await orm.exec(`Select Username, [Password], Email, userID from UE_Accounts where [Username] = '${username}' and [Password] = '${password}'`);

        if (result.recordset.length >= 1) {
            const userRec = result.recordset[0];
            ssn = req.session;
            ssn.userID = userRec.userID;
            res.json({usrObj:ssn.userID});
        } else {
            req.session.destroy();
            res.json({usrObj:null});
        }
    },

    isAuthenticated: (req, res) => {
        ssn = req.session;
        if (ssn.hasOwnProperty("userID")) {
            console.log("Already logged in");
            res.json({auth:true});
        } else {
            console.log("Not logged in");
            res.json({auth:false});
        }
    },

    getdashdata: function (req, res) {
        const sortcol = req.params.sortcol
        sortcol = (sortcol === '' || sortcol === undefined || sortcol === null) ? 'NULL': "'"+sortcol+"'";
        orm.exec(`EXEC GetAccountData 1, 1, 0, ${sortcol}`, function (result) {
            res.json(result);
        });
    },

    getprofileU: function (req, res) {
        const id = req.params.id;
        orm.exec(`EXEC GetAccountData 1, 2, ${id}`, function (result) {
            res.json(result);
        });
    },

    getprofileM: function (req, res) {
        const id = req.params.id;
        orm.exec(`EXEC GetAccountData 1, 3, ${id}`, function (result) {
            res.json(result);
        });
    },

    create: function (req, res) {
        const strSQL = formAddSQLCommand(req.body)
        orm.exec(strSQL, function (result) {
            res.json(result);
        });
    },

    update: function (req, res) {
        const strSQL = formUpdateSQLCommand(req.body)
        orm.exec(strSQL, function (result) {
            res.json(result);
        });
    },

    delete: function (req, res) {
        const strSQL = `Delete from UE_Accounts where userID = ${req.body.SYS_userID}`
        orm.exec(strSQL, function (result) {
            res.json(result);
        });        
    }

};

module.exports = Account;