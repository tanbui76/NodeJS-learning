import mysql from 'mysql2/promise';
// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '12345',
//     database: 'nodejsbasic',
// });

// connect to database
async function main() {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic', password: '12345' });
    return connection;
}

const connection = main();

export default connection;  // export connection to use in other files