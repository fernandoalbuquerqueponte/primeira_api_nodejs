const express = require("express");

const server = express();

// server.get("/curso", (req, res) => {
//   const nome = req.query.nome;

//   return res.json({
//     curso: `Aprendendo ${nome}`,
//   });
// });

const cursos = [
  {
    name: "HTML e CSS",
    description: "Aprenda HTML e CSS do zero",
    duration: "2 meses",
  },
  {
    name: "JavaScript",
    description: "Aprenda JavaScript do zero",
    duration: "3 meses",
  },
  {
    name: "Java",
    description: "Aprenda Java do zero",
    duration: "4 meses",
  },
  {
    name: "Python",
    description: "Aprenda Python do zero",
    duration: "5 meses",
  },
];

server.get("/curso/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

server.listen(3000);
