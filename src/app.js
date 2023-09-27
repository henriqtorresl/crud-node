import express from 'express';
import { createTable, selectPessoa, selectOnePessoa, insertPessoa, updatePessoa, deletePessoa } from './controller/pessoa.js'

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

app.get('/pessoa/:id', async (req, res) => {
    let { id } = req.params;        // pego o valor que está no objeto id do meu 'req.params'
    let pessoa = await selectOnePessoa(id);

    return res.json(pessoa);
});

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