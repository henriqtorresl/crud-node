import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then((db) => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )');
    });
}

export async function selectPessoa(req, res) {
    openDb().then((db) => {
        db.all('SELECT * FROM Pessoa')
        .then((pessoas) => {
            return res.json(pessoas);
        });
    });
}

export async function selectOnePessoa(req, res) {
    openDb().then((db) => {
        const { id } = req.params;      // pegando apenas o valor do objeto id.. aqui estou desestruturando o objeto que vem de 'req.params'
        db.get('SELECT * FROM Pessoa WHERE id = ?', [id])
        .then((pessoa) => {
            return res.json(pessoa);
        });
    });
}

export async function insertPessoa(req, res) {
    openDb().then((db) => {
        const pessoa = req.body;
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
        
        return res.json(pessoa);
    });
}

export async function updatePessoa(req, res) {
    openDb().then((db) => {
        console.log(req.body);      // pessoa
        console.log(req.params);    // id

        const pessoa = req.body;
        const { id } = req.params;
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, id]);

        return res.json({
            'statusCode': 200
        })
    });
}

export async function deletePessoa(req, res) {
    openDb().then((db) => {
        console.log(req.params);

        const { id } = req.params;
        db.run('DELETE FROM Pessoa WHERE id=?', [id]);

        return res.json({
            'statusCode': 200
        });
    });
}