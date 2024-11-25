import express from 'express';
import { criarLivro, listarLivros, pegarLivroPorID, pegarLivrosPorAutor} from '../controllers/livrosController.js';

const routes = (app) => {
    //fala pro express que ele deve devolver um JSON
    app.use(express.json()); 

    /*  Métodos GET */
    //  Rota para pegar todos os Livros
    app.get("/livros", listarLivros);
    //  Rota para pegar um livro pelo seu ID
    app.get("/livro/:id", pegarLivroPorID);
    //  Rota para pesquisar um livro por autor
    app.get("/livros/search", pegarLivrosPorAutor); // -> /livros/search?autor=Arthur Conan Doyle

    /*  Métodos POST */
    //  Rota para criar um livro
    app.post("/livros", criarLivro);
}

export default routes;

//Este é o arquivo responsável por guardar as rotas da api de livros