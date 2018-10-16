const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//CRUD - create / read / update / delete
//Verbs http

let pessoas = [];

// Read
app.get('/',(req, res) => {
    res.status(200).send(pessoas);
});

// Create
app.post('/', (req, res) => {
    console.log('Corpo: ', req.body);
    pessoas.push(req.body);
    res.status(201).send(req.body);
});

// Update
app.put('/:id', (req, res) => {
    let pessoaEncontrada = pessoas.filter(pes => { return pes.id == req.params.id });
    pessoaEncontrada == req.body;

    res.status(202).send(pessoaEncontrada);
});

// Delete
app.delete('/:id', (req, res) => {
    
for (let index = 0; index < pessoas.length; index++) {
    const pessoa = pessoas[index];
    if (pessoa.id == req.params.id){
        pessoas.splice(index, 1);
    }
}
    res.status(204).send();
});


// codigo 400 - bad request
// codigo 401 - Unauthorized
// codigo 500 - internal server error

app.listen(3000, ()=> {
    console.log('Servidor Api NoFood iniciado na porta 3000.');
});