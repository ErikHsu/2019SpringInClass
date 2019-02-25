const express   = require('express');
const users     = require('./controllers/users'); //require returns what is exported in users.js

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);



app.listen(port, () => console.log(`Example app http://localhost:${port}!`));
