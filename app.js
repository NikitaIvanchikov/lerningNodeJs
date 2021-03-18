const mysql = require('mysql2');



// config

const conn = mysql.createConnection( {
    host: 'localhost',
    user: 'nikitaivanchikov',
    database: 'test',
    password: 'leh@262012',
});

conn.connect(err => {
    if (err) {
        console.log (err);
        return err;
    }else {
        console.log(' Database ------ OK');
    }
});

// let query = "INSERT INTO users (firstname, lastname, email) VALUES ('Джинни', 'Уизли', 'rigyy2@SpeechGrammarList.com')";
// let query = "SELECT * FROM users"

conn.query(query, (err, res, field) => {
    console.log (err);
    console.log (res);
    // console.log (field);
})