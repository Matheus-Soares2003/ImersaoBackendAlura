import { getTodosLivros } from "../models/livroModel.js";

export async function listarLivros(req, res) {
    const livros = await getTodosLivros();
    res.status(200).json(livros);
}