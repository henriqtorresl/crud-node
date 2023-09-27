import express from 'express';
import { createTable, insertPessoa, updatePessoa, selectPessoa, deletePessoa } from './controller/pessoa.js'

const app = express();
app.use(express.json());        // configuração para que o app reconheça JSON nas requisições..

createTable();      // criando a tabela de pessoas

app.get('/', (req, res) => {
    return res.json({'message': 'Olá mundo!'})
})

app.get('/pessoa', async (req, res) => {
    const pessoas = await selectPessoa();

    return res.json(pessoas);
})

app.post('/pessoa', (req, res) => {
    console.log(req.body);
    insertPessoa(req.body);

    return res.json({
        'statusCode': 200
    });
});

app.put('/pessoa/:id', (req, res) => {
    console.log(req.body);      // pessoa
    console.log(req.params);    // id
    updatePessoa(req.body, req.params.id);

    return res.json({
        'statusCode': 200
    });
});

app.delete('/pessoa/:id', (req, res) => {
    console.log(req.params);    // id

    deletePessoa(req.params.id);

    return res.json({
        'statusCode': 200
    });
});

app.listen(3000, () => {
    console.log('API rodando!');
});