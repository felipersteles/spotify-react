// antigo costume que eu tenho
// de rodar um server express
// pra facilitar a hospedagem
// da aplicação em nuvem

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3333; //se n tiver porta ele hospeda no 3333

app.use(express.static(__dirname + "/build"));

app.get("*", (res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, (err) => {
  if (err) return console.log("Erro: " + err);
  console.log("Servidor iniciado na porta " + PORT);
});
