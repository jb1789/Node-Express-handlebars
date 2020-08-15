const mysql = require('mysql2/promise');
// exports.connect = async () => {
//     const connection = await mysql.createConnection({
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: process.env.DB_NAME
//     });
//     return connection;
// }
exports.connect = async () => {
    var connection;

// process.env.JAWSDB_URL lets us plug in your connection details with just one object property. Since the JawsDB provision, Heroku saved the connection info in an environmental variable.
if (process.env.JAWSDB_URL) {
    // If the server contains the JAWSDB_URL environmental variable, it connects to the JawsDB database.
    connection = await mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // If the server lacks the variable, it falls back on an explicitly defined local database.
    connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
};
    
    return connection;
}

