const conn = require('./mysql_connection');

const model = {
    getAll(cb){     //cb = callback
        conn.query("SELECT * FROM 2019Spring_Persons", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb){
        conn.query("SELECT * FROM 2019Spring_Persons WHERE Id=?", id, (err, data) => {    
            cb(err, data);
        });
    },
    add(input, cb){
        if(input.Password.length < 8){
            cb(Error('Password must be at least 8 characters'));
        }
        conn.query( "INSERT INTO 2019Spring_Persons (FirstName,LastName,Birthday,Password,created_at) VALUES (?)",
                    [[input.FirstName, input.LastName, input.Birthday, input.Password, new Date()]],  //nested array allows for one query to input multiple lines
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.instertId, (err, data) => {
                            cb(err, data);
                        });
                    });
    }
};

module.exports = model;