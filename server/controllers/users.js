const express = require("express");
const conn = require('../models/mysql_connection');

const app = express.Router();

const app = express.Router();

app.get("/", (req, res) => {

    conn.query("SELECT * FROM 2019SPRINGINCLASS", (err, data) => {
        if(err) throw err;
        res.send(data);
    })
    res.send ([{ FirstName: "Fake Person" }]);
})

module.exports = app;