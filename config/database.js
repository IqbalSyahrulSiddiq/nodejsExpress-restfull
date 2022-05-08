const mysql = require('mysql');

//koneksi database
const koneksi = mysql.createConnection({
    host: 'XXXX',
    user: 'XXXX',
    password:'XXXX',
    database: 'XXXX',
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;