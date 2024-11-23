import express from 'express'

const livros = [
    {
      titulo: "Harry Potter",
      autor: "J.K. Rowling",
      imagem: "https://placecats.com/300/200"
    },
    {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      imagem: "https://placecats.com/300/200"
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      imagem: "https://placecats.com/300/200"
    },
    {
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      imagem: "https://placecats.com/300/200"
    },
    {
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      imagem: "https://placecats.com/300/200"
    },
    {
      titulo: "Dom Quixote",
      autor: "Miguel de Cervantes",
      imagem: "https://placecats.com/300/200"
    }
];

const app = express(); //app representa o servidor
app.use(express.json()); //fala pro express que ele deve devolver um JSON

app.listen(3000, () => {
    console.log("Servidor escutando..."); //servidor vai escutar na porta 3000
});

//Espera uma requisição GET para /livros e devolve um JSON com todos os livros
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});