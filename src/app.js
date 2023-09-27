import express from 'express';
import router from './routes.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

// arquivo de configuração do meu app...

const app = express();
app.use(cors());                  // configuração de cors...
app.use(express.json());        // configuração para que o app reconheça JSON nas requisições..
app.use(router);                // configuração para o app reconhecer o router que eu instanciei

app.listen(3000, () => {
    console.log('API rodando!');
});

// rodando a porta https:
https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key:  fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () => console.log('API rodando em https'));