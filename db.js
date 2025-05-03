// const mysql = require('mysql2/promise')

// const pool = mysql.createPool({
//     user: "admin",
//     host: "localhost",
//     database: "hardwaredb",
//     password: "admin@root",
//     port: 3306
// })

// module.exports = pool

require('dotenv').config()
const {Pool} = require('pg')

const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: {
        rejectUnauthorized: false, 
    },
})

module.exports = pool