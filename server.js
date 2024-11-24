import express from 'express';
import routes from './src/routes/livrosRoutes.js';

const app = express(); //app representa o servidor
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando..."); //servidor vai escutar na porta 3000
});
