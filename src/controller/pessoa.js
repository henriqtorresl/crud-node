import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then((db) => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )');
    });
}

export async function selectPessoa() {
    return openDb().then((db) => {
        db.all('SELECT * FROM Pessoa')
        .then((pessoas) => {
            console.log(pessoas)
            return pessoas;
        });
    });
}

export async function insertPessoa(pessoa) {
    openDb().then((db) => {
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
    });
}

export async function updatePessoa(pessoa, id) {
    openDb().then((db) => {
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, id]);
    });
}

export async function deletePessoa(id) {
    openDb().then((db) => {
        db.run('DELETE FROM Pessoa WHERE id=?', [id]);
    });
}