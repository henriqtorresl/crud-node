import { Router } from 'express';
import { createTable, selectPessoa, selectOnePessoa, insertPessoa, updatePessoa, deletePessoa } from './controller/pessoa.js'

const router = Router();

router.get('/', (req, res) => {
    return res.json({
        'statusCode': 200,
        'message': 'API rodando!'
    })
})

createTable();      // criando a tabela de pessoas, caso ela já não tenha sido criada...

// forma que estava implementada antes:
// router.get('/pessoa', async (req, res) => {
//     const pessoas = await selectPessoa();

//     return res.json(pessoas);
// })

// forma que está implementada agora que eu joguei a lógica para a camada de Controller:
router.get('/pessoa', selectPessoa);    // implicitamente estou passando o 'req' e o 'res' como parâmetro para a função 'selectPessoa'...

router.get('/pessoa/:id', selectOnePessoa)

router.post('/pessoa', insertPessoa);

router.put('/pessoa/:id', updatePessoa);

router.delete('/pessoa/:id', deletePessoa);

export default router;      // exportando o meu router que foi instanciado na linha 4..