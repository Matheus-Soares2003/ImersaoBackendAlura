import express from 'express'

const app = express(); //app representa o servidor

app.listen(3000, () => {
    console.log("Servidor escutando..."); //servidor vai escutar na porta 3000
});

//Espera uma requisição GET para /api
app.get("/api", (req, res) => {
    res.status(200).send("Bem-Vindo à minha API!");
});