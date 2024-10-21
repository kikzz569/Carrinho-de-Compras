import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products'
});

app.use(cors())

app.get('/products', ( req, res ) => {
    connection.query('SELECT * FROM products', (erro, results) => {
        if (erro) throw erro;
        res.json(results);
    })
});


app.listen(3030, () => {
    console.log('Server is running on port 3030');
});