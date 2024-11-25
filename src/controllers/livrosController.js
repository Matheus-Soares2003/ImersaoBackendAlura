import fs from "fs"
import { getLivroByAutor, getLivroByID, getTodosLivros, insertLivro } from "../models/livroModel.js";

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
    if (livro.length > 0) {
        res.status(200).json(livro);
    } else {
        res.status(500).json({message: "Erro interno do servidor"});
    }
}

export async function criarLivro(req, res) {
    const novoLivro = req.body;
    try {
        const livroCriado = await insertLivro(novoLivro);
        res.status(201).json(livroCriado);
    } catch (e) {
        console.error("ERRO! " + e.message);
        res.status(500).json({message: "Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novoLivro = {
        titulo: "",
        autor: "",
        imageUrl: req.file.originalname,
        descricaoImagem: "descricao da imagem"
    };
    try {
        const livroCriado = await insertLivro(novoLivro);
        const imagemAtualizada = `uploads/${livroCriado.insertedId}.jpg`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(201).json(livroCriado);
    } catch (e) {
        console.error("ERRO! " + e.message);
        res.status(500).json({message: "Falha na requisição"});
    }
}

//Este é o arquivo responsável por gerenciar o que deve acontecer com as requisicoes