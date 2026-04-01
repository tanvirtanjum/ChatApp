const db = require('../configs/dbc.config');

exports.getAll = (data, callback) => {
    var sqlString = `
                    SELECT      * 
                    FROM        \`users\`;
                    `;

    var options = { 
        sql: sqlString, 
        nestTables: false 
    };

    db.query(options, [], (error, results, fields) => {
            if (error) {
                console.error("DB ERROR:", error);
                return callback(error);
            }
            // var nestedResults = func.convertToNested(results, nestingOptions);
            console.log("DB RESULTS:", results);
            return callback(null, results);
        } 
    );
};

exports.createUser = (data, callback) => {
    console.log("Create User Service Called.", data);

    var sqlString = `
                    INSERT INTO \`users\` (
                        email,
                        password,
                        active_flag
                    )
                    VALUES (
                        ?,
                        ?,
                        ?
                    );
                    `;
    var options = { 
        sql: sqlString, 
        nestTables: false 
    };

    db.query(options, [data.email, data.password, data.active_flag], (error, results, fields) => {
            if (error) {
                console.error("DB ERROR:", error);
                return callback(error);
            }
            // var nestedResults = func.convertToNested(results, nestingOptions);
            console.log("DB RESULTS:", results);
            return callback(null, results);
        } 
    );
};