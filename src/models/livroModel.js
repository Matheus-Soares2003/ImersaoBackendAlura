import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosLivros() {
    const db = conexao.db("imersao-alura-backend");
    const colecao = db.collection("livros");
    return colecao.find().toArray(); //converte a coleção para um array
}

export async function getLivroByID(id) {
    const db = conexao.db("imersao-alura-backend");
    const colecao = db.collection("livros");
    return colecao.findOne({ _id: new ObjectId(id) });
}

//Este é o arquivo responsável por gerenciar manipulações com o banco de dados