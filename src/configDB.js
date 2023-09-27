import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// função que conecta com o banco de dados..
export async function openDb() {
    return open({
        filename: './database.db',
        driver: sqlite3.Database
    });
}