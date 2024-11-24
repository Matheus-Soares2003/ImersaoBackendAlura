import conectarAoBanco from "../config/dbConfig";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosLivros() {
    const db = conexao.db("imersao-alura-backend");
    const colecao = db.collection("livros");
    return colecao.find().toArray(); //converte a coleção para um array
}