import mysql from 'mysql2';
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'nodejsbasic',
});


export default connection;  // export connection to use in other files