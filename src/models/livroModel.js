import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
const db = conexao.db("imersao-alura-backend");
const colecao = db.collection("livros");

export async function getTodosLivros() {
    return colecao.find().toArray(); //converte a coleção para um array
}

export async function getLivroByID(id) {
    return colecao.findOne({ _id: new ObjectId(id) });
}

export async function getLivroByAutor(autor) {
    return colecao.find({autor: autor}).toArray();
}

export async function insertLivro(novoLivro) {
    return colecao.insertOne(novoLivro);
}

//Este é o arquivo responsável por gerenciar manipulações com o banco de dados