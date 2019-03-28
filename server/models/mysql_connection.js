const mysql =   require('mysql');
                require('dotenv').load();  //reads .env and loads all into environment variables
const util = require('util');                

const conn = mysql.createPool({
    host: process.env.VUE_APP_MYSQL_HOST,  // object of .env items
    user: process.env.VUE_APP_MYSQL_USER,
    password: process.env.VUE_APP_MYSQL_PASSWORD, 
    database: process.env.VUE_APP_MYSQL_DB,
    port: 3307,
    connectionLimit: 10     //limit should be based on estimate of how many concurrent users
    //insecureAuth: true    
});

conn.query = util.promisify(conn.query);

module.exports = conn;
