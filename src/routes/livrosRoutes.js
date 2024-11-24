import express from 'express';
import { listarLivros, pegarLivroPorID } from '../controllers/livrosController.js';

const routes = (app) => {
    //fala pro express que ele deve devolver um JSON
    app.use(express.json()); 

    //Espera uma requisição GET para /livros e devolve um JSON com todos os livros
    app.get("/livros", listarLivros);
    app.get("/livro/:id", pegarLivroPorID); 
}

export default routes;

//Este é o arquivo responsável por guardar as rotas da api de livros