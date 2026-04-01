const db = require('../configs/dbc.config');

exports.getAll = (data, callback) => {
    console.log("Get All Users Service Called.");

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