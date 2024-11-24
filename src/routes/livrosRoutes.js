import express from 'express';
import { listarLivros } from '../controllers/livrosController.js';

const routes = (app) => {
    //fala pro express que ele deve devolver um JSON
    app.use(express.json()); 

    //Espera uma requisição GET para /livros e devolve um JSON com todos os livros
    app.get("/livros", listarLivros); 
}

export default routes;

