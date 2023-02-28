const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Pierra5496!',
    database: 'tessaDb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;