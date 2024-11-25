import express from 'express';
import multer from 'multer';
import { criarLivro, listarLivros, pegarLivroPorID, pegarLivrosPorAutor, uploadImagem} from '../controllers/livrosController.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

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
    // Rota para fazer uploads de imagens
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;

//Este é o arquivo responsável por guardar as rotas da api de livros