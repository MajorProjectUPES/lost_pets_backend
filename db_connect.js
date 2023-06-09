require("dotenv").config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    port: process.env.port
});

module.exports = pool;