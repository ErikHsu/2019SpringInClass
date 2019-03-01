const express   = require('express');
const path      = require('path');
const users     = require('./controllers/users'); //require returns what is exported in users.js

const app = express();
const port = 3000;

app.use(express.urlencoded)({ extended: false});
app.use(express.json);
app.use(express.static(path.join(__dirname, "../NoFramework")));      //__dirname gives physical location of file on server
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);       //use is middleware for express; passes information to the appropriate function.  


app.listen(port, () => console.log(`Example app http://localhost:${port}!`));
