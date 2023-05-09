
import mysql from 'mysql';


const DB_HOST= 'localhost'
const DB_PORT= '3306'
const DB_USER='root'
const DB_DATABASE='echomirror'
const DB_PASSWORD = 'password'
const db = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD,
})

export default db
