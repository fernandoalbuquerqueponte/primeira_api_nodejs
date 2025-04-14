//Buscando tudo que o express exporta para utilizar todas as funcionalidades
const express = require("express");

const server = express();

//localhost:3000/curso
server.get("/curso", (req, res) => {
  //req dados da aplicação
  //res dados que serão enviados para o cliente
  return res.json({
    curso: "nodejs",
  });
});

server.listen(3000);
