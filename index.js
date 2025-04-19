const express = require("express");

const server = express();

server.use(express.json());

// server.get("/curso", (req, res) => {
//   const nome = req.query.nome;

//   return res.json({
//     curso: `Aprendendo ${nome}`,
//   });
// });

const cursos = ["HTML e CSS", "JavaScript", "Java", "Python"];

//read
server.get("/cursos3", (req, res) => {
  return res.json(cursos);
});

//create

server.post("/cursos", (req, res) => {
  const { name, description, duration } = req.body;

  cursos.push({
    name: name,
    description: description,
    duration: duration,
  });

  return res.json(cursos);
});

//update
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name, description, duration } = req.body;

  cursos[index] = {
    name: name,
    description: description,
    duration: duration,
  };

  return res.json(cursos);
});

//delete
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.send();
});

server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

server.listen(3000);
