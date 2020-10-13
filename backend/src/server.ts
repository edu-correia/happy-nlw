import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    console.log('Usuarios');
    return res.json({message: "Hello World!"});
})

app.listen(3333);