import express from 'express';
import router from './routes.js';

// arquivo de configuração do meu app...

const app = express();
app.use(express.json());        // configuração para que o app reconheça JSON nas requisições..
app.use(router);                // configuração para o app reconhecer o router que eu instanciei

app.listen(3000, () => {
    console.log('API rodando!');
});