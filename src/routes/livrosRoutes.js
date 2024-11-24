import express from 'express';

const routes = (app) => {
    app.use(express.json()); //fala pro express que ele deve devolver um JSON

    //Espera uma requisição GET para /livros e devolve um JSON com todos os livros
    app.get("/livros", async (req, res) => {
        const livros = await getTodosLivros();
        res.status(200).json(livros);
    });

}

export default routes;

