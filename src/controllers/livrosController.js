import { getLivroByAutor, getLivroByID, getTodosLivros } from "../models/livroModel.js";

export async function listarLivros(req, res) {
    const livros = await getTodosLivros();
    res.status(200).json(livros);
}

export async function pegarLivroPorID(req, res) {
    const livro = await getLivroByID(req.params.id);

    if (livro) {
        res.status(200).json(livro);
    } else {
        res.status(404).json({message: "Livro não econtrado"});
    }
}

export async function pegarLivrosPorAutor(req, res) {
    const livro = await getLivroByAutor(req.query.autor);
    if (livro) {
        res.status(200).json(livro);
    } else {
        res.status(404).json({message: "Livros com esse autor não econtrados"});
    }
}

//Este é o arquivo responsável por gerenciar o que deve acontecer com as requisicoes