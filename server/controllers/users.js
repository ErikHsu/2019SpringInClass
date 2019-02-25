const express = require("express");
const user = require('../models/user');

const app = express.Router();

app.get("/", (req, res) => {

    console.log('Roses are red');
    user.getAll((err, data) => {
        console.log('Violets are blue')
        if(err) throw err;
        res.send(data);
    });
    console.log('Async is great')
});

app.post("/", (req, res) => {

    user.add({FirstName: "Steve", LastName: "Irwin", Password: "BobbyTables"}, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
    console.log('Async is great')
});


module.exports = app;