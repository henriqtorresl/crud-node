import { openDb } from './configDB.js';
import express from 'express';

const app = express();
app.use(express.json());        // configuração para que o app reconheça JSON nas requisições..

openDb();

app.get('/', (req, res) => {
    return res.json({'message': 'Olá mundo!'})
})

app.post('/pessoa', (req, res) => {
    console.log(req.body);
    
    return res.json({
        'statusCode': 200
    });
});

app.listen(3000, () => {
    console.log('API rodando!');
});