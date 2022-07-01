import express from "express";
import Productos from "./controllers/Productos.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  Productos.getAll().then((p) => {
    res.send(p);
  });
});

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
