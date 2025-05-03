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
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE,
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, 
    },
})

module.exports = pool