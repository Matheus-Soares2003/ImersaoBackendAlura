import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//acessando o atlas mongoDB
async function getTodosLivros() {
  const db = conexao.db("imersao-alura-backend");
  const colecao = db.collection("livros");
  return colecao.find().toArray(); //converte a coleção para um array
}

const livros = [
    {
      id: 1,
      titulo: "Harry Potter",
      autor: "J.K. Rowling",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 2,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 3,
      titulo: "1984",
      autor: "George Orwell",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 4,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 5,
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 6,
      titulo: "Dom Quixote",
      autor: "Miguel de Cervantes",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 7,
      titulo: "A Metamorfose",
      autor: "Franz Kafka",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 8,
      titulo: "O Nome da Rosa",
      autor: "Umberto Eco",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 9,
      titulo: "O Alquimista",
      autor: "Paulo Coelho",
      imagem: "https://placecats.com/300/200"
    },
    {
      id: 10,
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      imagem: "https://placecats.com/300/200"
    }
];

const app = express(); //app representa o servidor
app.use(express.json()); //fala pro express que ele deve devolver um JSON

app.listen(3000, () => {
    console.log("Servidor escutando..."); //servidor vai escutar na porta 3000
});

//Espera uma requisição GET para /livros e devolve um JSON com todos os livros
app.get("/livros", async (req, res) => {
    const livros = await getTodosLivros();
    res.status(200).json(livros);
});

//Devolve um livro baseado em seu ID (/livro/1)
app.get("/livro/:id", (req, res) => {
    const idx = buscarLivroPorID(req.params.id); //pega o parametro id passado pela url
    res.status(200).json(livros[idx]);
});


function buscarLivroPorID(id) {
    return livros.findIndex(livro =>  {
        return livro.id === Number(id);
    }); //Entra em cada objeto dentro do array, acha o livro pelo ID, e retorna o index onde esse livro está
}
