import mysql from 'mysql'
import config from './Config'

// create connection object
const connection = mysql.createPool({
    host: config.mySQLhost,
    user: config.mySQLuser,
    password: config.mySQLpass,
    database: config.mySQLdatabase
})
