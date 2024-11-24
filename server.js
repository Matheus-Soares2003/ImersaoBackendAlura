import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';


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

app.listen(3000, () => {
    console.log("Servidor escutando..."); //servidor vai escutar na porta 3000
});


function buscarLivroPorID(id) {
    return livros.findIndex(livro =>  {
        return livro.id === Number(id);
    }); //Entra em cada objeto dentro do array, acha o livro pelo ID, e retorna o index onde esse livro está
}
