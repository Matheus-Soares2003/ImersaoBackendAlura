async function getTodosLivros() {
    const db = conexao.db("imersao-alura-backend");
    const colecao = db.collection("livros");
    return colecao.find().toArray(); //converte a coleção para um array
}

async function listarLivros(req, res) {
    const livros = await getTodosLivros();
    res.status(200).json(livros);
}