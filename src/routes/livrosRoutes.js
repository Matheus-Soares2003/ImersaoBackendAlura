import express from 'express';
import { listarLivros } from '../controllers/livrosController.js';

const routes = (app) => {
    app.use(express.json()); //fala pro express que ele deve devolver um JSON

    //Espera uma requisição GET para /livros e devolve um JSON com todos os livros
    app.get("/livros", listarLivros);

}

export default routes;

