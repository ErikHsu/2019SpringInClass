const mysql =   require('mysql'),
                require('dotenv').load();  //reads .env and loads all into environment variables


//const conn = mysql.createConnection(); 
    //createConnection is expensive and relatively slow when setting up
    //instead use connection pooling: instead of creating a new connection every time, it will check if it is the same as previous
        //connection and simply give the request that connection

const conn = mysql.createPool({
    host: process.env,MYSQL_HOST,  // object of .env items
    user: process.env,MYSQL_USER,
    password: process.env,MYSQL_PASSWORD, 
    database: process.env,MYSQL_DB, 
    connectionLimit: 10     //limit should be based on estimate of how many concurrent users
});

module.exports