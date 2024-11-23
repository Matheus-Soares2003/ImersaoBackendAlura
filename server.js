import express from 'express'

const app = express(); //app representa o servidor

app.listen(3000, () => {
    console.log("Servidor escutando...");
});