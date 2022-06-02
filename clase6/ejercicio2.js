const express = require("express");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1 style= 'color:blue'>bienvenidos a servidor express</h1>");
});

let visitas = 0;
app.get("/visitas", (req, res) => {
  visitas++;
  res.send(`cantidad de visitas : ${visitas}`);
});

app.get("/fyh", (req, res) => {
  res.send({
    fyh: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  });
});

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
