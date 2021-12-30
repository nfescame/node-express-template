const express = require("express");
const app = express();
const data = require("./data/project.json");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.info(`Aplicação rodando em http://localhost:${port} `);
});
