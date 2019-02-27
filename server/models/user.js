const conn = require('./mysql_connection');

const model = {
    getAll(cb){     //cb = callback
        console.log(conn),
        conn.query("SELECT * FROM 2019Spring_Persons", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb){

    },
    add(input, cb){
        conn.query("INSERT INTO 2019Spring_Persons (FirstName,LastName,Birthday,Password,created_at VALUES (?)",  //values(?) is saying we will feed it values later
            [[input.FirstName, input.LastName, input.Birthday, input.Password, new Date()]],
            (err, data) => {
                cb(err, data);
            }    
        );
    }
};

module.exports = model;